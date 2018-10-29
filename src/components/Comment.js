import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.comment.name}</Text>
                <Text style={styles.comment}>{this.props.comment.body}</Text>
                <Button
                    color="#FD5700"
                    title="Delete Comment"
                    onPress={() => this.handleDeleteComment(this.props.comment.id)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      marginBottom: 5,
      padding: 10,
      backgroundColor: "#fff",
      alignItems: "center"
    },
    name: {
        fontWeight: "600"
    },
    comment: {
        margin: 10
    }
  });

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(undefined, mapDispatchToProps)(Comment);