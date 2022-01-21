import React, { useState, useEffect } from "react";
import wikipedia from "../apis/wikipedia";

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [resultList, setResultList] = useState([]);

    // ! useEffect is like lifecycle methods for hooks
    useEffect(()=>{

        const timeoutId = setTimeout(()=>{
            setDebouncedTerm(term);
        },1000);

        return ()=>{
            // cancelling the timoutId
            clearTimeout(timeoutId);
        };

    },[term]);

    useEffect(()=>{
        // search for the debouncedTerm in the wikipedia api
        // @  Call for the API for the results
        // ! Defining and calling the function there itself
        const search = async () => {
            if (debouncedTerm !== "" || debouncedTerm !== " ") {
                const resultJson = await wikipedia.get("/w/api.php", {
                    params: {
                        srsearch: debouncedTerm,
                    },
                });
                console.log(resultJson);
                setResultList(resultJson.data.query.search);
            }
        };
        search();
    },[debouncedTerm])

    // * mapping the list items to UI components
    // ! using dangerouslySetInnerHTML is prone to XXS attacks(cross-site scripting)
    const renderedList = resultList.map((result, index) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="content">
                    <a
                        className="header"
                        target="_blank"
                        href={`https://en.wikipedia.org?curid=${result.pageid}}`}
                        rel="noreferrer"
                    >
                        {result.title}
                    </a>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <form
                className="ui form segment"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="ui field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}
                        className="input"
                    />
                </div>
            </form>
            <div className="ui celled list">{renderedList}</div>
        </div>
    );
};

export default Search;
