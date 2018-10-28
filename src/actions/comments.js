const fetchCommentsRequest = () => ({
    type: "FETCHING_COMMENTS_REQUEST"
});

const fetchCommentsSuccess = (comments) => ({
    type: "FETCHING_COMMENTS_SUCCESS",
    comments
});

const fecthCommentsFailure = (error) => ({
    type: "FETCHING_COMMENTS_FAILURE",
    error
});

export const fetchComments = () => {
    return async (dispatch) => {
        dispatch(fetchCommentsRequest());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const comments = await response.json();
            dispatch(fetchCommentsSuccess(comments));
        } catch (err) {
            dispatch(fecthCommentsFailure(err));
        }
    }
};

export const deleteComment = (id) => ({
    type: "DELETE_COMMENT",
    id
});

export const deleteComments = (id) => ({
    type: "DELETE_COMMENTS",
    id
});
