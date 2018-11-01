import React from "react";
import { ScrollView, View, Text, Button, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Comment from "./Comment";
import { deletePost } from "../actions/posts";
import CommentForm from "./CommentForm";

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postComments: []
        };
        this.deletePostAndComments = this.deletePostAndComments.bind(this);
        this.addComment = this.addComment.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const comments = await response.json();
            const postComments = comments.filter((comment) => comment.postId === this.props.post.id);
            this.setState({ postComments });
        } catch (err) {
            console.log(err);
        }
    }

    addComment(comment) {
        this.setState(() => ({
            postComments: this.state.postComments.concat(comment)
        }));
    }

    renderComments() {
        return (
            <FlatList
                data={this.state.postComments}
                renderItem={({ item }) => <Comment comment={item} />}
                keyExtractor={(comment) => comment.body}
            />
        )
    }

    deletePostAndComments() {
        this.props.deletePost(this.props.post.id);
        Actions.pop();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.post}>
                    <Text style={styles.title}>{this.props.post.title}</Text>
                    <Text style={styles.body}>{this.props.post.body}</Text>
                </View>

                {
                    this.props.loggedIn ? <CommentForm postId={this.props.post.id} addComment={this.addComment} /> : (
                        <View style={styles.loginMessage}>
                            <Text>Sign in to add a comment</Text>
                        </View>
                    )
                }

                { this.renderComments() }

                <Button
                    title="Delete Post"
                    onPress={this.deletePostAndComments}
                    color="red"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 10,
        padding: 5,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    title: {
        textAlign: "center",
        marginBottom: 5,
        fontWeight: "800"
    },
    body: {
        textAlign: "justify"
    },
    loginMessage: {
        alignItems: "center",
        marginBottom: 20
    }
});

const mapStateToProps = (state) => ({
    loggedIn: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (id) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);