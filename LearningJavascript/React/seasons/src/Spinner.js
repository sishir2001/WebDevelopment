import React from "react";

const Spinner = (props)=>{
    console.log(props);
    return (
        <div className="ui active inverted dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    );
};

// ! providing default props for the component 
Spinner.defaultProps = {
    message : 'Loading ...'
};

export default Spinner;