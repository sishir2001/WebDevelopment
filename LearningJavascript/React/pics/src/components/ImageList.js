import React from "react";
import ImageCard from "./ImageCard";
import './ImageList.css'

const ImageList = (props) => {
    // if (props.images.length === 0)
    //     return (
    //         <div className="ui segment">
    //             <div className="ui active inverted dimmer">
    //                 <div className="ui text loader">Loading</div>
    //             </div>
    //             <p></p>
    //         </div>
    //     );
    // ? unsplash api
    let images = props.images.map((image)=>{
        // console.log(image);
        return <ImageCard image={image} key={image.id} />
    });

    // // ? zencerp api
    // let images = props.images.map((image) => {
    //     // console.log(image);
    //     return <img src={image.thumbnail} alt={image.title} />;
    // });
    console.log(props.images);
    return (
        <div className="image-list">{images}</div>
    );
};

export default ImageList;
