import React from "react";

function Search(props) {
    return (
        <div className="search">
            <input
                placeholder="Search for a name"
                value={props.search}
                onInput={props.handleInputChange}
                type="text"
                className="form-control"
            />
        </div>
    );
}

export default Search;