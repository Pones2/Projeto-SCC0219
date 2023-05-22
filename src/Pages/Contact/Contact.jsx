import React from "react";

import "./Contact.css";

import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

const Contact = () => {
    return (
        <>
            <Header />
            <Label for="nome"> Nome: </Label> <br></br>
            <Label for="email"> Email: </Label> <br></br>
            <Label for="mensagem"> Mensagem: </Label> <br></br>
            <Button> Enviar mensagem </Button>
            <Footer />
        </>
    );
}

export default Contact;