import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import postsReducer from "../reducers/posts";
import usersReducer from "../reducers/users";
import commentsReducer from "../reducers/comments";

export default () => {
    const store = createStore(
        combineReducers({
            postsObject: postsReducer,
            usersObject: usersReducer,
            commentsObject: commentsReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}