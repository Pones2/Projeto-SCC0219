import React from "react";

import "./Label.css";

// label component. The name inside it is determined by the child.
// id is the id of the input that will be linked to the label
// type is the type of the input that will be linked to the label
// required is a boolean that determines if the input is required or not (optional)
// children is the text inside the label

const Label = (props) => {
    let isRequired = false;
    let InputTag;

    if(props.required !== undefined) {
        isRequired = true;
    }

    if(props.type === "textarea"){
        InputTag = "textarea";
    }else{
        InputTag = "input";
    }

    const handleOnChange = (event) => {
        if (props.onChange) {
            props.onChange(event);
        }
    }

    return(
        <>
            <label htmlFor={props.id}> {props.children} </label> <br></br>
            <InputTag type={props.type} id={props.id} name={props.id} required={isRequired} onChange={handleOnChange} placeholder={props.placeholder}></InputTag>
        </>


    );
}

export default Label;