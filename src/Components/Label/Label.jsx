import React from "react";

import "./Label.css";

// label component. The name inside it is determined by the child.
// props: id, type, required (optional)
const Label = (props) => {
    let isRequired = false;

    if(props.required !== undefined) {
        isRequired = true;
    }

    if(isRequired) {
        return (
            <>
            <label for={props.id}> {props.children} </label> <br></br>
            <input type={props.type} id={props.id} name={props.id} required></input>
            </>
        );
    } else {
        return (
            <>
            <label for={props.id}> {props.children} </label> <br></br>
            <input type={props.type} id={props.id} name={props.id}></input>
            </>
        );
    }
}

export default Label;