import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Comment = (props) => (
    <View style={styles.container}>
        <Text style={styles.name} numberOfLines={1}>{props.comment.name}</Text>
        <Text style={styles.comment}>{props.comment.body}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#fff"
    },
    name: {
        fontWeight: "600",
        textAlign: "center"
    },
    comment: {
        margin: 10,
    }
});

export default Comment;