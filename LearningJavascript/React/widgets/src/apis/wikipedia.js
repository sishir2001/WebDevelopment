import axios from "axios";

export default axios.create({
    // headers: {
    //     Accept: "*/*",
    //     "User-Agent": "Axios 0.21.1"
    // },
    baseURL: "https://www.mediawiki.org",
    params: {
        action: "query",
        list: "search",
        origin:'*',
        format: "json",
    },
});
