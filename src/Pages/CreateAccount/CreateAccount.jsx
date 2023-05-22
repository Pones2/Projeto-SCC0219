import React from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

import "./CreateAccount.css";

const CreateAccount = () => {
    return (
        <>
            <Header />
            <h1>Criar Conta</h1>
            <Label id="nome" type="text" required> Nome completo: </Label> <br></br>
            <Label id="email" type="email" required> Email: </Label> <br></br>
            <Label id="senha" type="password" required> Senha: </Label> <br></br>
            <Label id="confirmarSenha" type="password" required> Confirmar Senha: </Label> <br></br>
            <Label id="telefone" type="tel" required> Telefone: </Label> <br></br>
            <Label id="endereco" type="text" required> Endereço: </Label> <br></br>
            <Footer />
        </>
    );
}

export default CreateAccount;