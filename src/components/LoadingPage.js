import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoadingPage = () => (
    <View style={styles.container}>
        <Text style={styles.loadingMessage}>Loading, Please Wait...</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }, 
    loadingMessage: {
        marginTop: "50%"
    }
});

export default LoadingPage; 