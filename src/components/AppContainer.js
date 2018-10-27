import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { fetchUsers } from "../actions/users";
import { fetchComments } from "../actions/comments";
import PostList from "./PostList"

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers();
        this.props.fetchComments();
    }
    render() {
        let content = <PostList />
        if (this.props.posts.posts.isFetching && this.props.users.isFetching && this.props.comments.isFetching) {
            content = (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
        return content
    }
}

const mapStateToProps = (state) => ({
    posts: state.postsObject,
    users: state.usersObject,
    comments: state.commentsObject
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);