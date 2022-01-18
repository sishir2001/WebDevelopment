import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            className="video-item item"
            onClick={() => {
                // !when clicked informing App component that which video is clicked
                onVideoSelect(video);
            }} >

            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
