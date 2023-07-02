import React from "react";

import "./UserDisplay.css";

import Button from "../Button/Button";

const UserDisplay = (props) => {
    return (
        <>
                <div id="userDisplay">
                    <h3> Nome: {props.name} </h3>
                    <h4> Email: {props.email} </h4>
                    <p> Endereço: {props.address} </p>
                    <p> Telefone: {props.phone} </p>
                    <Button onClick={props.onClick} className = "button"> Deletar Usuario </Button>
                </div>
        </>
    );
}

export default UserDisplay;