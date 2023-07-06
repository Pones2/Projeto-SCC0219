import React, { useEffect } from "react";

import './ContactComponent.css';

const ContactComponent = ({props}) => {
    return (
        <>
            <div id="divContact">
                <h3> {props.name} </h3> <br></br>
                <h4> {props.email} </h4> <br></br>
                <p> {props.message} </p>
            </div>
        </>
    );
}

export default ContactComponent;