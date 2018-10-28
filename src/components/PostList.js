import React from "react";
import { View, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import PostModal from "../components/PostModal";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isAddPostModalVisible: false
        }
        this.toggleAddPostModal = this.toggleAddPostModal.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
    }
    renderPosts() {
        this.setState({ posts: this.props.posts });
        console.log(this.state.posts);
        console.log(this.props.posts);
    }
    componentDidMount() {
        this.renderPosts()
    }
    toggleAddPostModal() {
        this.setState({ isAddPostModalVisible: !this.state.isAddPostModalVisible });
        console.log(this.props.posts)
    }
    render() {
        return (
            <View>
                {this.props.loggedIn && <Button title="Add Post" onPress={this.toggleAddPostModal} />}

                <PostModal
                    toggleModal={this.toggleAddPostModal}
                    isVisible={this.state.isAddPostModalVisible}
                    renderPosts={this.renderPosts}
                />

                <FlatList
                    data={this.props.posts}
                    renderItem={({ item }) => <PostItem post={item} />}
                    keyExtractor={(post) => post.id.toString()}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.postsObject.posts,
    loggedIn: state.auth.id
});

export default connect(mapStateToProps)(PostList);