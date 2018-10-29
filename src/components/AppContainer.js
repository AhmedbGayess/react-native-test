import React from "react";
import { connect } from "react-redux";
import { Button, ScrollView, StyleSheet } from "react-native";

import { fetchPosts } from "../actions/posts";
import { fetchUsers, addUser } from "../actions/users";
import { fetchComments } from "../actions/comments";
import { login, logout } from "../actions/auth";

import PostList from "./PostList"
import UserModal from "../components/UserModal";
import LoadingPage from "./LoadingPage";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalVisible: false,
            isSigninModalVisible: false
        };
        this.toggleSigninModal = this.toggleSigninModal.bind(this);
        this.handleSignin = this.handleSignin.bind(this);
        this.signinAndOut = this.signinAndOut.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers();
        this.props.fetchComments();
    }

    toggleSigninModal() {
        this.setState({ isSigninModalVisible: !this.state.isSigninModalVisible });
    }

    handleSignin(user) {
        this.props.addUser(user);
        this.props.login(user);
    }

    signinAndOut() {
        if (!this.props.loggedIn) {
            this.toggleSigninModal();
        } else {
            this.props.logout();
        }
    }

    render() {
        if (this.props.posts.isFetching || this.props.users.isFetching || this.props.comments.isFetching) {
            return <LoadingPage />
        } else {
            return (
                <ScrollView>
                    <Button
                        title={this.props.loggedIn ? "Sign Out" : "Sign In"}
                        onPress={this.signinAndOut}
                    />
                    <UserModal
                        toggleModal={this.toggleSigninModal}
                        isVisible={this.state.isSigninModalVisible}
                        method={this.handleSignin}
                    />

                    <PostList />
                </ScrollView>

            );
        }
    }
}

const mapStateToProps = (state) => ({
    posts: state.postsObject,
    users: state.usersObject,
    comments: state.commentsObject,
    loggedIn: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchComments: () => dispatch(fetchComments()),
    addUser: (user) => dispatch(addUser(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);