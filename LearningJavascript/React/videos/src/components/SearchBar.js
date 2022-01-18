import React from "react";
class SearchBar extends React.Component {

    state = {
        term: "",
    };

    onSubmitForm = (event)=>{
        event.preventDefault();// to do nothing when clicked enter

        if(this.state.term !== ""){
            // TODO : call a callback function from parent component
            this.props.onSubmit(this.state.term);
        }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
