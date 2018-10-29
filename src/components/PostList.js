import React from "react";
import { View, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import Modal from "../components/Modal";
import PostForm from "./PostForm";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isAddPostModalVisible: false
        }
        this.toggleAddPostModal = this.toggleAddPostModal.bind(this);
    }

    toggleAddPostModal() {
        this.setState({ isAddPostModalVisible: !this.state.isAddPostModalVisible });
    }

    render() {
        return (
            <View>
                {this.props.loggedIn && <Button title="Add Post" onPress={this.toggleAddPostModal} />}

                <Modal
                    form={PostForm}
                    toggleModal={this.toggleAddPostModal}
                    isVisible={this.state.isAddPostModalVisible}
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