import React from "react";
import Employee from "../employee";


function EmpList(props) {
    return (

            <div className="table">
                <div className="tableHeader">
                    <div>Photo</div>
                    <div>Lastname</div>
                    <div>Firstname</div>
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