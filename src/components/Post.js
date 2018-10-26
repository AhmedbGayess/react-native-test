import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: ""
        }
    }
    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (response.ok) {
                    response.json().then((users) => {
                        const user = users.find((user) => user.id === this.props.post.userId);
                        this.setState({ user: user.name });
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        const { viewStyle } = styles;
        return (
            <TouchableOpacity
                style={viewStyle}
                onPress={() => {
                    Actions.Post({
                        post: this.props.post,
                        user: this.state.user,
                        comments: this.state.comments,
                        handleDeleteComment: this.handleDeleteComment,
                        handleDeletePost: this.props.handleDeletePost
                    });
                }}>
                <Text>{this.state.user}</Text>
                <Text>{this.props.post.title}</Text>
            </TouchableOpacity>
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

export default Post;