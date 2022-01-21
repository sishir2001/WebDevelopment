import React, { useState, useEffect } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

// ? props for the Accordion component
const items = [
    {
        title: "What is React?",
        content: "React is a front-end javascript frame-work",
    },
    {
        title: "Why use React ?",
        content: "React is a favourite library among engineers",
    },
    {
        title: "How do use React",
        content: "You use React by creating components",
    },
];

// ? props for the Dropdown component
const options = [
    {
        label: "Color Red",
        value: "red",
    },
    {
        label: "Color Blue",
        value: "blue",
    },
    {
        label: "Color Green",
        value: "green",
    },
];

const App = () => {
    // use of state in hooks
    // // function that updates the selected
    // const onSelect = (index)=>{
    //     console.log(index);
    //     setSelected(options[index].value);
    // };
    const [selected, setSelected] = useState(options[0]);
    // ! sending items as props
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    label={"Select a color"}
                />
            </Route>
            <Route path="/translate">
                <Translate />;
            </Route>
        </div>
    );
};
export default App;
