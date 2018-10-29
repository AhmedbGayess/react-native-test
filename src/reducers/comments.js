const defaultState = {
    comments: [],
    isFetching: false,
    errorMessage: ""
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "FETCHING_COMMENTS_REQUEST":
            return {
                ...state,
                isFetching: true
            };
        case "FETCHING_COMMENTS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case "FETCHING_COMMENTS_SUCCESS":
            return {
                ...state,
                isFetching: false,
                comments: action.comments
            };
        case "ADD_COMMENT":
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.comment
                ]
            };
        case "DELETE_COMMENTS":
            return {
                ...state,
                comments: state.comments.filter((comment) => comment.postId !== action.id)
            };
        default:
            return state;
    }
}

