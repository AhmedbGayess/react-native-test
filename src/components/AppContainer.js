import React from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity, Button } from "react-native";

import { fetchPosts } from "../actions/posts";
import { fetchUsers, addUser } from "../actions/users";
import { fetchComments } from "../actions/comments";
import PostList from "./PostList"
import UserModal from "../components/UserModal";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalVisible: false,
            isSigninModalVisible: false
        };
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleSigninModal = this.toggleSigninModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers();
        this.props.fetchComments();
    }

    toggleLoginModal() {
        this.setState({ isLoginModalVisible: !this.state.isLoginModalVisible });
    }

    toggleSigninModal() {
        this.setState({ isSigninModalVisible: !this.state.isSigninModalVisible });
    }

    render() {
        if (this.props.posts.isFetching || this.props.users.isFetching || this.props.comments.isFetching) {
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <TouchableOpacity onPress={this.toggleLoginModal}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <UserModal toggleModal={this.toggleLoginModal} isVisible={this.state.isLoginModalVisible} title="Login"/>

                    <TouchableOpacity onPress={this.toggleSigninModal}>
                        <Text>Sign in</Text>
                    </TouchableOpacity>

                    <UserModal toggleModal={this.toggleSigninModal} isVisible={this.state.isSigninModalVisible} title="Sign in"/>

                    <PostList />
                </View>

            );
        }
    }
}

const mapStateToProps = (state) => ({
    posts: state.postsObject,
    users: state.usersObject,
    comments: state.commentsObject,
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchComments: () => dispatch(fetchComments()),
    addUser: (user) => dispatch(addUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);