// Action creator: returns an simple object(Action)
export const SelectSong=(song)=>{
    // return an action
    // type is compulsory for every action, payload isnt
    return {
        type:"SONG_SELECTED",
        payload : song
    }
};