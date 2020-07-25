import React from "react";
import Employee from "../employee";


function EmpList(props) {
    return (
        <div className="table">
            <div className="tableHeader">
                <div>Photo</div>
                <div id="lastName" sorter="true" column="last" onClick={props.handleSort}>Lastname</div>
                <div id="firstName" sorter="true" column="first" onClick={props.handleSort}>Firstname</div>
                <div>Phone</div>
                <div>Email</div>
            </div>

            {props.attrEmpsArr.map(emp => (
                <Employee empData={emp}>
                </Employee>
            ))}
        </div>

    );
}

export default EmpList;