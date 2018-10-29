import React from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { addPost } from "../actions/posts";

class PostForm extends React.Component {
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
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Add Post</Text>
                <Text>Title</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={(title) => this.setState({ title })}
                />
                <Text>Body</Text>
                <TextInput
                    style={styles.input}
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

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#eee",
        borderColor: "#000",
        borderWidth: 1
    },
    header: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800",
        margin: 10
    },
    input: {
        margin: 10,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "#fff"
    }
});

const mapStateToProps = (state) => ({
    loggedIn: state.auth.id,
    user: state.auth,
    posts: state.postsObject.posts
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(addPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);