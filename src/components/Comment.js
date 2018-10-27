import React from "react";
import { View, Text, Button } from "react-native";

class Comment extends React.Component {
    render() {
        const { viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Button title="Delete Comment" onPress={() => {}}/>
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