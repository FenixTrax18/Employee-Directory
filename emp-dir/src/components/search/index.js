import React from "react";

function Search(props) {
    return (
        <div>
            <input
                value={props.search}
                onInput={props.handleInputChange}
                type="text"
                className="form-control"
            />
            <button type="input" onClick={props.handleSearchClick} className="btn btn-success">
                Search
        </button>
        </div>
    );
}

export default Search;