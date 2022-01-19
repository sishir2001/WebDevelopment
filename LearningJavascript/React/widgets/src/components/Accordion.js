import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [prevActiveIndex, setPrevActiveIndex] = useState(null);

    // ? helper function to handle onClick
    const onTitleClick = (index) => {
        setActiveIndex(index);
        if(index === prevActiveIndex){
            setPrevActiveIndex(null);
        }
        else
            setPrevActiveIndex(activeIndex);
    };

    const renderedItems = items.map((item, index) => {
        const active = (index === activeIndex && index !== prevActiveIndex) ? 'active' : '';
        // Mapping items to styles  components
        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p className="transition visible">{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;
