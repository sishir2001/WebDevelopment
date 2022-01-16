import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        // DOM ref
        this.imageRef = React.createRef();
        this.state = {
            spans : 0
        }
    }

    // Lifecycle method
    componentDidMount(){
        // ? called only after the first rendering 

        // adding an event listener called load
        this.imageRef.current.addEventListener('load',this.setSpan);
    }
    setSpan = ()=>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        // give space accordingly
        // TODO : change the state to rerender
        this.setState({spans});
    }

    render(){
        const {alt_description,urls} = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
            </div>
        );
    }
}

export default ImageCard;