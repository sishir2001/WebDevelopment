import React, { useState,useEffect,useRef} from "react";

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=>{
        const bodyClick = (event)=>{
            // console.log(event.target);
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click',bodyClick,{capture:true});

        // we can return a function that can contain cleanup recipe of the component 
        return ()=>{
            document.body.removeEventListener('click',bodyClick,{capture:true});
        };
    },[]);
    // need to make an array of components to display as dropdown
    const renderOptions = props.options.map((option) => {
        if (option.value === props.selected.value) {
            return null;
        }
        return (
            <div
                onClick={() => {
                    props.onSelectedChange(option);
                }}
                key={option.value}
                className="item"
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{props.label}</label>
                <div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    className={`ui selection dropdown ${
                        open ? "visible active" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dropdown;
