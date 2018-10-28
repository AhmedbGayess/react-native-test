import React from "react";
import { ScrollView, Text, Button, FlatList } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Comment from "./Comment";
import { deletePost } from "../actions/posts";
import { deleteComments } from "../actions/comments";

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postComments: []
        };
        this.deletePostAndComments = this.deletePostAndComments.bind(this);
        this.renderComments = this.renderComments.bind(this)
    }

    renderComments() {
        const postComments = this.props.comments.filter((comment) => comment.postId === this.props.post.id);
        this.setState({ postComments });
    }

    componentDidMount() {
        this.renderComments()
    }

    deletePostAndComments(id) {
        this.props.deletePost(id);
        this.props.deleteComments(id);
        Actions.pop();
    }
    
    render() {
        return (
            <ScrollView>
                <Text>{this.props.post.title}</Text>
                <Text>{this.props.post.body}</Text>
                <FlatList
                    data={this.state.postComments}
                    renderItem={({ item }) => <Comment comment={item} renderComments={this.renderComments}/>}
                    keyExtractor={(comment) => comment.id.toString()}
                />
                <Button title="DeletePost" onPress={() => {
                    this.deletePostAndComments(this.props.post.id)
                }}/>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.commentsObject.comments
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (id) => dispatch(deletePost(id)),
    deleteComments: (id) => dispatch(deleteComments(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);