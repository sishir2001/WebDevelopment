import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos,onVideoSelect }) => {
    // TODO : return a VideoItem component
    // ? map all the elements of the array to VideoItem
    const renderedList = videos.map((video)=>{
        // TODO : mapping of video to different props of VideoItem
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId}/>
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;
