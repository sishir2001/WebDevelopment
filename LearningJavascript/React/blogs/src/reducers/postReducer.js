const fetchPostsReducer = (state=[],action)=>{
    console.log(action);
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};
export default fetchPostsReducer;