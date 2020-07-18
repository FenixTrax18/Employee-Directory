import React from "react";

function Sort(props) {
    return (
        <div>
            <input //replace
                value={props.search}
                onChange={props.handleInputChange}
                type="text"
                className="form-control"
            />
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                Search
        </button>
        </div>
    );
}

export default Sort;