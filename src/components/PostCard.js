import React from "react";
import { ScrollView, Text, Button, View, StyleSheet } from "react-native";
import Comment from "./Comment";
import { Actions } from "react-native-router-flux";
import Form from "./Form";

class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.addComment = this.addComment.bind(this);
    }
    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        const comments = data.filter((comment) => comment.postId === this.props.post.id)
                        this.setState({ comments });
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    handleDeleteComment(id) {
        this.setState({
            comments: this.state.comments.filter((comment) => comment.id !== id)
        });
        console.log(id)
        console.log(this.state.comments.length)
    }
    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    render() {
        const { headerStyle, container } = styles;
        return (
            <ScrollView contentContainerStyle={container}>
                <Text style={headerStyle}>{this.props.post.title}</Text>
                <Text>{this.props.post.body}</Text>
                {
                    this.state.comments.map((comment, index) => <Comment
                        comment={comment}
                        key={index}
                        handleDeleteComment={this.handleDeleteComment}
                    />)
                }
                <Button
                    title="Delete Post"
                    onPress={() => {
                        this.props.handleDeletePost(this.props.post.id);
                        console.log(this.props.post.id)
                        Actions.Home();
                    }}
                />
                <View>
                    <Text>Add a comment</Text>
                    <Form inputTitle="Comment" handlePost={this.addComment} />
                </View>

            </ScrollView>
        );
    }
}

export default PostCard