// ! a special file

// TODO : import React and ReactDOM components
import React from "react";
import ReactDOM from "react-dom";
// TODO : create a react component


// * a function based component
const App = () => {
    const buttonText = {text : "click me !"};
    return (
        <div>
            <label htmlFor="name" className="label">
                Enter a name :
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
                {buttonText.text}
            </button>
        </div>
    );
    // ? the outer {} for referencing a javascript variable and the inner is for object
};

// TODO : take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
