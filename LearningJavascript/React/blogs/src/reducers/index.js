import { combineReducers } from "redux";
import fetchPostsReducer from "./postReducer";
import fetchUserReducer from "./userReducer";


export default combineReducers({
    posts : fetchPostsReducer,
    users:fetchUserReducer
});