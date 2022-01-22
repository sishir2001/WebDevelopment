const fetchPostsReducer = (postsList=[],action)=>{
    if(action.type === 'FETCH_POSTS'){
        return action.payload;
    }
    return postsList;
};
export default fetchPostsReducer;