import React from "react";
import { connect } from "react-redux";
import { Button, ScrollView } from "react-native";

import { fetchPosts } from "../actions/posts";
import { fetchUsers } from "../actions/users";
import { logout } from "../actions/auth";

import PostList from "./PostList"
import Modal from "./Modal";
import LoadingPage from "./LoadingPage";
import UserForm from "./UserForm";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSigninModalVisible: false
        };
        this.toggleSigninModal = this.toggleSigninModal.bind(this);
        this.signinAndOut = this.signinAndOut.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers();
    }

    toggleSigninModal() {
        this.setState({ isSigninModalVisible: !this.state.isSigninModalVisible });
    }
    
    signinAndOut() {
        if (!this.props.loggedIn) {
            this.toggleSigninModal();
        } else {
            this.props.logout();
        }
    }

    render() {
        if (this.props.posts.isFetching || this.props.users.isFetching) {
            return <LoadingPage />
        } else {
            return (
                <ScrollView>
                    <Button
                        title={this.props.loggedIn ? "Sign Out" : "Sign In"}
                        onPress={this.signinAndOut}
                    />
                    
                    <Modal
                        form={UserForm}
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
    loggedIn: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);