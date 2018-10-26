import React from "react";
import { ScrollView, Text } from "react-native";
import Post from "./Post";

class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        this.handleDeletePost = this.handleDeletePost.bind(this);

    }
    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (response.ok) {
                    response.json().then((posts) => {
                        this.setState(() => ({ posts }));
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    handleDeletePost(id) {
        this.setState({
            posts: this.state.posts.filter((post) => post.id !== id)
        });
    }
    renderPosts() {
        return this.state.posts.map((post) => <Post key={post.id} post={post} handleDeletePost={this.handleDeletePost} users={this.state.users}/>)
    }

    render() {
        if (!this.state.posts.length) {
            return (
                <Text>Loading...</Text>
            );
        } else {
            return (
                <ScrollView>
                    {this.renderPosts()}
                </ScrollView>
            )
        }
    }
}

export default PostList;