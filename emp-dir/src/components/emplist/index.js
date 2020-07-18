import React from "react";
import Employee from "../employee";


function EmpList(props) {
    return (
        <div>
            <ul>
                {props.attrEmpsArr.map(emp => (
                    <Employee empData={emp}>
                    </Employee>
                ))}
            </ul>
        </div>
    );
}

export default EmpList;