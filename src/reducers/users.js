const defaultState = {
    users: [],
    isFetching: false,
    errorMessage: ""
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "FETCHING_USERS_REQUEST":
            return {
                ...state,
                isFetching: true
            };
        case "FETCHING_USERS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case "FETCHING_USERS_SUCCESS":
            return {
                ...state,
                isFetching: false,
                users: action.users
            };
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.user]
            }
        default:
            return state;
    }
}