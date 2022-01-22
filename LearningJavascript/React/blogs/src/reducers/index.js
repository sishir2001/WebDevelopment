import { combineReducers } from "redux";
import fetchPostsReducer from "./postReducer";
import fetchUserReducer from "./usersReducer";


export default combineReducers({
    posts : fetchPostsReducer,
    users:fetchUserReducer
});