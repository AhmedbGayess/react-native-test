const fetchUsersRequest = () => ({
    type: "FETCHING_USERS_REQUEST"
});

const fetchUsersSuccess = (users) => ({
    type: "FETCHING_USERS_SUCCESS",
    users
});

const fecthUsersFailure = (error) => ({
    type: "FETCHING_USERS_FAILURE",
    error
});

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            dispatch(fetchUsersSuccess(users));
        } catch (err) {
            dispatch(fecthUsersFailure(err));
        }
    }
};

export const addUser = (user) => ({
    type: "ADD_USER",
    user
})
