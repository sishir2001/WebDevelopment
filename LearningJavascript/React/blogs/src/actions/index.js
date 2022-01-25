import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
    // ? fetch posts from the api here and make the response as the payload of the object
    // return a function that will be handled by thunk middleware
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get("/posts");

        // call the dispatch function with the action object
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        });
    };
};

export const fetchUser = (userId)=>{
    // fetch the name of the user who has written the article
    return async (dispatch,getState)=>{
        const response = await jsonPlaceholder.get(`/users/${userId}`);
        console.log(response.data);
        // call dispatch 
        dispatch({
            type:'FETCH_USER',
            payload:response.data
        });
    };
};
