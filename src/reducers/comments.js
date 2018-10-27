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
        default:
            return state;
    }
}