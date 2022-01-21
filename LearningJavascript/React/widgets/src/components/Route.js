import { useEffect, useState } from "react";
// returning components according to the route
const Route = ({ path, children }) => {

    const [pathname,setPathname] = useState(window.location.pathname);
    const onLocationChange = ()=>{
        console.log("Location Changed");
        setPathname(window.location.pathname);
    };

    useEffect(()=>{
        window.addEventListener('popstate',onLocationChange,{capture:true});

        return ()=>{
            window.removeEventListener('popstate',onLocationChange,{capture:true});
        }
    },[])
    return pathname === path ? children : null;
};
export default Route;
