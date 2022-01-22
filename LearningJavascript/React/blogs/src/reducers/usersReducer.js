
const fetchUserReducer = (user = [],action)=>{
    if(action.type === 'FETCH_USER'){
        return action.payload;
    }
    return user;
};
export default fetchUserReducer;