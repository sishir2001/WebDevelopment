import React,{useEffect, useState} from "react";
import axios from "axios";

const Convert = ({language,text})=>{

    const [translated,setTranslated] = useState('');
    // ! for efficient api requests 
    const [debouncedText,setDebouncedText] = useState(text);

    useEffect(()=>{
        const timeroutId = setInterval(()=>{
            // change the debouncedText
            setDebouncedText(text);
        },1000);

        return ()=>{
            clearInterval(timeroutId);
        }

    },[text]);

    useEffect(()=>{
        // helper function 
        const doTranslate = async ()=>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q:debouncedText,
                    target:language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        if(debouncedText !== ''){
            doTranslate();
        }
    },[debouncedText,language]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};
export default Convert;