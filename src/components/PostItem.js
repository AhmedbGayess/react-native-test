import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
        this.openPostCard = this.openPostCard.bind(this)
    }
    
    componentDidMount() {
        const user = this.props.users.find((user) => user.id === this.props.post.userId)
        this.setState({ user });
    }

    openPostCard() {
        Actions.post({ user: this.state.user, post: this.props.post });
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.postItem}
                onPress={this.openPostCard}
            >
                <Text>{this.state.user.name}</Text>
                <Text>{this.props.post.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    postItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#fff",
        alignItems: "center"
    }
});

const mapStateToProps = (state) => ({
    users: state.usersObject.users
});

export default connect(mapStateToProps)(PostItem);