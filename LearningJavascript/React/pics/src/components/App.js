import React from "react";
import unsplash from "../api/unsplash";
import serpapi from "../api/serpapi";
import zencerp from "../api/zencerp";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {
        images: [],
    };

    // onSearchSubmit = async (term) => {
    //     // this function specifies procedure for fetching images
    //     // ? Asynchronous request
    //     // * axios returns a promise

    //     // ? getting images
    //     // * serpapi
    //     const response = await serpapi.get("/search.json", {
    //         params: {
    //             api_key:'141696ddf3b37034a3d615f809fdae3929de09a6cb40de15c91c28bf7709fe98',
    //             q: term,
    //             origin:'*',
    //             tbm: 'isch',
    //             ijn: 0
    //         },
    //     });

    //     // // * zencerp api
    //     // const response = await zencerp.get("/api/v2/search", {
    //     //     params: {
    //     //         apikey:'df4df990-76f8-11ec-a7d2-f9e01d22dc39',
    //     //         q: term,
    //     //         tbm: 'isch',
    //     //         device: 'desktop'
    //     //     },
    //     // });
    //     // console.log(this);
    //     console.log(response);

    //     // ? zencerp api
    //     this.setState({
    //         images: response.data.image_results,
    //     });
    // };

    // ! use of arrow function to fix the this .
    // ? unsplash api
    onSearchSubmit = async (term) => {
        // this function specifies procedure for fetching images
        // ? Asynchronous request
        // * axios returns a promise

        // ? getting images
        const response = await unsplash.get("/search/photos", {
            params: {
                query: term,
            },
        });
        // console.log(this);
        this.setState({
            images: response.data.results,
        });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found : {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
