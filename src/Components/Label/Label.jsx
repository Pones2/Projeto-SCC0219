import React from "react";

import "./Label.css";

// label component. The name inside it is determined by the child.

const Label = (props) => {
    return (
        <>
        <label for={props.id}> {props.children} </label> <br></br>
        <input type="text" id={props.id} name={props.id}></input>
        </>
    );
}

export default Label;