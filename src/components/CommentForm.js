import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

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
            body: this.state.comment
        });
    }

    render() {
        return (
            <View style={styles.form}>
                <Text style={styles.label}>Add a comment</Text>
                
                <TextInput
                    style={styles.input}
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

const styles = StyleSheet.create({
    form: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        marginBottom: 10,
        padding: 10
    },
    input: {
        width: "95%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10
    },
    label: {
        fontWeight: "800"
    }
})

const mapStateToProps = (state) => ({
    loggedIn: state.auth.id,
    user: state.auth
});


export default connect(mapStateToProps)(CommentForm);