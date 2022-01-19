import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title:"What is React?",
        content : "React is a front-end javascript frame-work"
    },
    {
        title:"Why use React ?",
        content : "React is a favourite library among engineers"
    },
    {
        title:"How do use React",
        content : "You use React by creating components"
    }
];


const App = () => {
    // ! sending items as props
    return (
        <div>
            <br/>
            <Accordion items = {items}/>
        </div>
    );
};
export default App;
