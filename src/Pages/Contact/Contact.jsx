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
            <h2>Entre em contato conosco</h2>
            <p>Preencha o formulário abaixo para entrar em contato com a nossa loja.</p>
            <Label id="nome" type="text"> Nome: </Label> <br></br>
            <Label id="email" type="email"> Email: </Label> <br></br>
            <Label id="mensagem" type="text"> Mensagem: </Label> <br></br>
            <Button> Enviar mensagem </Button>
            <Footer />
        </>
    );
}

export default Contact;