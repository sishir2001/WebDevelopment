import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
    {
        label: "Dutch",
        value: "nl",
    },
    {
        label: "French",
        value: "fr",
    },
    {
        label: "German",
        value: "de",
    },
    {
        label: "Greek",
        value: "el",
    },
    {
        label: "Gujarati",
        value: "gu",
    },
    {
        label: "Hebrew",
        value: "he",
    },
    {
        label: "Irish",
        value: "ga",
    },
    {
        label: "Italian",
        value: "it",
    },
    {
        label: "Japanese",
        value: "ja",
    },
    {
        label: "Kannada",
        value: "kn",
    },
    {
        label: "Korean",
        value: "ko",
    },
    {
        label: "Malayalam",
        value: "ml",
    },
    {
        label: "Marathi",
        value: "mr",
    },
    {
        label: "Punjabi",
        value: "pa",
    },
    {
        label: "Spanish",
        value: "es",
    },
    {
        label: "Telugu",
        value: "te",
    }
];
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <Dropdown
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
                label={"Select a language"}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    );
};
export default Translate;
