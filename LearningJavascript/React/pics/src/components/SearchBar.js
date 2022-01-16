import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    // ! fixing the broken this , arrow functions fix them
    onFormSubmit = (event)=>{
        // ! the default behaviour of form when pressed enter is to refresh
        event.preventDefault();// ? prevents the default
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term); // passed to the JSX
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
