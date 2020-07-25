import React from "react";

function Employee(props) {
    return (
        <div className="tableRow">
                <div>
                    <img src={props.empData.picture.thumbnail}/>
                </div>
                <div>
                    {props.empData.name.last}
                </div>
                <div>
                    {props.empData.name.first}
                </div>
                <div>
                    {props.empData.phone}
                </div>
                <div>
                    {props.empData.email}
                </div>
        </div>
    );
}

export default Employee;