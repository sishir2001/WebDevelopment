import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//     // ? use of geolocation api
//     // ! it will take some time
//     // *first argument if the api is successful
//     // !second argument if the api is unsuccessful
//     return <div>Hi there!</div>;
// };

class App extends React.Component {
    // JS specific

    // ! there are two ways to initialize a state
    // constructor(props) {
    //     super(props); // by default we need this

    //     // state of react
    // ? first way
    //     // * direct assignment only when initialization
    //     this.state = {
    //         lat: null,
    //         errorMessage: null
    //     };
    // }

    // ? second way
    state = {
        lat: null,
        errorMessage: null
    };

    // for the first time on the screen
    componentDidMount() {
        console.log("App component was rendered on the screen");
        // call all the one-time loading code here
        // calling the geolocation api
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // ? when the location is granted
                // console.log(position);
                // ! use setState when state property need to be updated
                this.setState({ lat: position.coords.latitude });
            },
            // ? when the location is not granted
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }
    componentDidUpdate() {
        console.log("App component was re-rendered on the screen");
    }
    componentWillUnmount() {
        console.log("App component was unmounted on the screen");
    }

    // * helper method to avoid complexity in render method
    renderContent() {
        //conditional rendering
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>;
        }
        // both doesnt have values ... , api is still retrieving the data
        return <Spinner message={"Getting the season you live in .."} />;
    }

    // ! required method for every class component , Reacts specific
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
