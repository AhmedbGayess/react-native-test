const fetchPostsRequest = () => ({
    type: "FETCHING_POSTS_REQUEST"
})

const fetchPostsSuccess = (posts) => ({
    type: "FETCHING_POSTS_SUCCESS",
    posts
});

const fecthPostsFailure = (error) => ({
    type: "FETCHING_POSTS_FAILURE",
    error
});

export const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostsRequest());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await response.json();
            dispatch(fetchPostsSuccess(posts));
        } catch (err) {
            dispatch(fecthPostsFailure(err));
        }
    }
};

export const deletePost = (id) => ({
    type: "DELETE_POST",
    id
});
