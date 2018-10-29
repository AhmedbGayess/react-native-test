import React from "react";
import { ScrollView, View, Text, Button, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Comment from "./Comment";
import { deletePost } from "../actions/posts";
import { deleteComments } from "../actions/comments";
import CommentForm from "./CommentForm";


class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postComments: []
        };
        this.deletePostAndComments = this.deletePostAndComments.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    renderComments() {
        const postComments = this.props.comments.filter((comment) => comment.postId === this.props.post.id);
        this.setState({ postComments });
    }

    componentDidMount() {
        this.renderComments();
    }

    deletePostAndComments(id) {
        this.props.deletePost(id);
        this.props.deleteComments(id);
        Actions.pop();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.post}>
                    <Text style={styles.title}>{this.props.post.title}</Text>
                    <Text style={styles.body}>{this.props.post.body}</Text>
                </View>

                {this.props.loggedIn ? <CommentForm postId={this.props.post.id} renderComments={this.renderComments}/> : (
                    <View style={styles.loginMessage}>
                        <Text>Sign in to add a comment</Text>
                    </View>
                )
                }

                <FlatList
                    data={this.state.postComments}
                    renderItem={({ item }) => <Comment comment={item} renderComments={this.renderComments} />}
                    keyExtractor={(comment) => comment.id.toString()}
                />
                <Button title="Delete Post"
                    onPress={() => {
                        this.deletePostAndComments(this.props.post.id);
                    }}
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
        borderBottomColor: "gray",
        borderBottomWidth: 1
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
    comments: state.commentsObject.comments,
    loggedIn: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (id) => dispatch(deletePost(id)),
    deleteComments: (id) => dispatch(deleteComments(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);