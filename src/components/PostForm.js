import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import { connect } from "react-redux";

import { addPost } from "../actions/posts";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        }
        this.handleAddPost = this.handleAddPost.bind(this);
    }

    handleAddPost() {
        if (this.props.loggedIn) {
            this.props.addPost({
                title: this.state.title,
                body: this.state.body,
                userId: this.props.user.id,
                id: this.props.posts[this.props.posts.length -1].id + 1
            });
            this.props.toggleModal();
            this.props.renderPosts();
        }
    }

    render() {
        return (
            <View>
                <Text>Add Post</Text>
                <Text>Title</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.name}
                    onChangeText={(title) => this.setState({ title })}
                />
                <Text>Body</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.body}
                    onChangeText={(body) => this.setState({ body })}
                />
                <Button
                    title="Add Post"
                    onPress={this.handleAddPost}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.id,
    user: state.auth,
    posts: state.postsObject.posts
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(addPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);