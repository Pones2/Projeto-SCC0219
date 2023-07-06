import React, { useEffect } from "react";

import './ContactComponent.css';

const ContactComponent = (props) => {
    return (
        <>
            <div id="divContact">
                <h3> User: {props.name} </h3> <br></br>
                <h4> Email: {props.email} </h4> <br></br>
                <p> Mensagem: {props.message} </p>
            </div>
        </>
    );
}

export default ContactComponent;