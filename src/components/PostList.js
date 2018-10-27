import React from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import PostItem from "./PostItem";

class PostList extends React.Component {
    render() {
        return (
            <View>
                <FlatList 
                    data={this.props.posts}
                    renderItem={({item}) => <PostItem post={item}/>}
                    keyExtractor={(post) => post.id.toString()}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.postsObject.posts
});

export default connect(mapStateToProps)(PostList);