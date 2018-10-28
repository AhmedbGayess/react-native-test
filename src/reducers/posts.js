const defaultState = {
    posts: [],
    isFetching: false,
    errorMessage: ""
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "FETCHING_POSTS_REQUEST":
            return {
                ...state,
                isFetching: true
            };
        case "FETCHING_POSTS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case "FETCHING_POSTS_SUCCESS":
            return {
                ...state,
                isFetching: false,
                posts: action.posts
            };
        case "ADD_POST":
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.post
                ]
            };
        case "DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id)
            };
        default:
            return state;
    }
}