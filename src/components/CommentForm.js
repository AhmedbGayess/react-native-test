import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addComment } from "../actions/comments";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    handleAddComment() {
        this.props.addComment({
            name: this.props.user.name,
            postId: this.props.postId,
            id: this.props.comments[this.props.comments.length - 1] + 1,
            body: this.state.comment
        })
    }
    render() {
        return (
            <View>
                <Text>Add a comment</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.name}
                    onChangeText={(comment) => this.setState({ comment })}
                />

                <Button
                    title="Add Comment"
                    onPress={this.handleAddComment}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.id,
    user: state.auth,
    comments: state.commentsObject.comments
});

const mapDispatchToProps = (dispatch) => ({
    addComment: (comment) => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);