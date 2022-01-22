import React,{Component} from "react";
import {connect} from "react-redux";
import { SelectSong } from "../actions";

// ! why class-based components again 
// class SongList extends Component{
//     render(){
//         console.log(this.props.songs);
//         return (
//             <div>
//                 SongList
//             </div>
//         );
//     }
// };

const SongList = (props)=>{
    // renderedSongList
    const renderedSongs = props.songs.map((song)=>{
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button onClick={()=>props.SelectSong(song)} className="ui button primary">Select</button>
                </div>
                <div className="content">{song.title}</div>
            </div>
        );
    });
    return (
        <div className="ui divided list">
            {renderedSongs}
        </div>
    );
};
const mapStateToProps = (state)=>{
    // * any time the redux state object is changed , this function is rerun
    console.log(state);
    // Does same as the name 
    // ! this below state is somehow turned into props for SongList component
    return {songs:state.songs};
}
// connect will automatically take care of dispatch function
export default connect(mapStateToProps,{SelectSong})(SongList);