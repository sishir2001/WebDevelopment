import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization:"Client-ID NXndq-0-uKxfiJITNFNh6kuo_fhDrRaiQwYzIGbmBvc"
    }
});