import React, { useState, useEffect } from "react";
const Link = ({ href, className, children }) => {
    // ! for setting and unsetting of active tabs
    const [activeTab, setActiveTab] = useState("");
    const checkActiveTab = () => {
        if (window.location.pathname === href) {
            setActiveTab("active");
        } else {
            setActiveTab("");
        }
    };

    useEffect(() => {
        window.addEventListener("popstate", checkActiveTab, { capture: true });
        return () => {
            window.removeEventListener("popstate", checkActiveTab, {
                capture: true,
            });
        };
    }, []);

    return (
        <a
            onClick={(event) => {
                // CMD + clicking on link
                if (event.metaKey || event.ctrlKey) {
                    return;
                }
                event.preventDefault();
                window.history.pushState({}, "", href);
                // Navigation Event
                const navEvent = new PopStateEvent("popstate");
                window.dispatchEvent(navEvent);
            }}
            className={`${className} ${activeTab}`}
            href={href}
        >
            {children}
        </a>
    );
};
export default Link;
