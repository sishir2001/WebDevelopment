import { combineReducers } from "redux";

const SongsReducer = ()=>{
    return [
        {
            title : 'Bom Diggy Diggy',
            duration:'4:05'
        },
        {
            title : 'Chori sadda ho gaya',
            duration:'3:05'
        },
        {
            title : 'Zara zara',
            duration:'5:05'
        },
        {
            title : 'Arcade',
            duration:'4:45'
        }
    ];
};

const SelectSongReducer = (selectedSong = null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:SongsReducer,
    selectedSong : SelectSongReducer
});