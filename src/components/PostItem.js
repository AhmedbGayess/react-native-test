import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

class PostItem extends React.Component {
    state = {
        user: {}
    }
    componentWillMount() {
        const user = this.props.users.find((user) => user.id === this.props.post.userId)
        this.setState({ user });
    }
    render() {   
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={() => {console.log(this.props.post.body)}}
            >
                <Text>{this.state.user.name}</Text>
                <Text>{this.props.post.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: "#f6e5a2",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 2
    }
});

const mapStateToProps = (state) => ({
    users: state.usersObject.users
});

export default connect(mapStateToProps)(PostItem);