import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { deleteComment } from "../actions/comments";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    handleDeleteComment(id) {
        this.props.deleteComment(id) 
        this.props.renderComments()
    }

    render() {
        const { viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text>{this.props.comment.body}</Text>
                <Button
                    title="Delete Comment"
                    onPress={() => this.handleDeleteComment(this.props.comment.id)}
                />
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#000",
        margin: 3,
        padding: 3
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(undefined, mapDispatchToProps)(Comment);