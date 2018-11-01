import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import postsReducer from "../reducers/posts";
import usersReducer from "../reducers/users";
import authReducer from "../reducers/auth";

export default () => {
    const store = createStore(
        combineReducers({
            postsObject: postsReducer,
            usersObject: usersReducer,auth: authReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}