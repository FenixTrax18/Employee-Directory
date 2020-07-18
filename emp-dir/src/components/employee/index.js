import React from "react";

function Employee(props) {
    return (
        <div>
            {props.empData.picture.thumbnail}
            {props.empData.name.last}
            {props.empData.name.first}
            {props.empData.phone}
            {props.empData.email}
        </div>
    );
}

export default Employee;