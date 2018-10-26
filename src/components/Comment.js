import React from "react";
import { View, Text, Button } from "react-native";

class Comment extends React.Component {
    render() {
        const { viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text>{this.props.comment.name}</Text>
                <Text>{this.props.comment.body}</Text>
                <Button title="Delete Comment" onPress={() => {
                    this.props.handleDeleteComment(this.props.comment.id);
                }}/>
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
export default Comment;