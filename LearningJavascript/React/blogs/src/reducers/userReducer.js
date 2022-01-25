
const fetchUserReducer = (state = [],action)=>{
    // @param action : action object of the redux system
    switch(action.type){
        case 'FETCH_USER':
            return [...state,action.payload];
        default:
            return state;
    }
};
export default fetchUserReducer;