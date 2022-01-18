import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    // creating a state object
    state = {
        videos: [],
        selectedVideo: null,
    };
    onVideoSelect = (video) => {
        // updating the state
        this.setState({ selectedVideo: video });
    };

    // TODO : create a function that will search the keyword
    // ? takes time for the data to arrive
    // !asynchronous function
    onSearchSubmit = async (term) => {
        let response = await Youtube.get("/search", {
            params: {
                q: term,
            },
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: null,
        });
        console.log(this.state.videos);
    };

    render() {
        // ! conditional rendering
        if (this.state.selectedVideo === null) {
            return (
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <VideoList
                        onVideoSelect={this.onVideoSelect}
                        videos={this.state.videos}
                    />
                </div>
            );
        }
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div >
                        <div className="six wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
