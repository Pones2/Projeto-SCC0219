import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

import "./CreateAccount.css";
import Button from "../../Components/Button/Button";

const CreateAccount = () => {
    // account variables
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");

    const navigate = useNavigate();

    // password != confirmPassword error
    const [passwordError, setPasswordError] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // password does not coincide
        if(password !== confirmPassword)
        {
            setPasswordError("As senhas não coincidem.");
            return;
        }

        const data = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address
        }

        // converts the data to JSON
        const jsonData = JSON.stringify(data);

        console.log(jsonData);

        // note: there is no fetch because there is no backend to receive POST requests

        // resets the form
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        setAddress("");

        setPasswordError("");

        navigate("/login");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    return (
        <>
            <Header />
            <div id="backgroundCadastro">
            <form onSubmit={handleSubmit} id="formCadastro">
                <h1 id="textoCadastro">Cadastro</h1>
                <Label id="nome" type="text" required onChange={handleNameChange} placeholder="Nome Completo"> Nome completo: </Label> <br></br>
                <Label id="email" type="email" required onChange={handleEmailChange} placeholder="E-mail"> Email: </Label> <br></br>
                <Label id="senha" type="password" required onChange={handlePasswordChange} placeholder="Senha"> Senha: </Label> <br></br>
                <Label id="confirmarSenha" type="password" required onChange={handleConfirmPasswordChange} placeholder="Confirmar Senha"> Confirmar Senha: </Label> <br></br>
                <Label id="telefone" type="tel" required onChange={handlePhoneChange} placeholder="Telefone"> Telefone: </Label> <br></br>
                <Label id="endereco" type="text" required onChange={handleAddressChange} placeholder="Endereço"> Endereço: </Label> <br></br>
                <Button> Criar Conta </Button>
                {passwordError}
                <a href="/login" id="jaPossuiConta"> Já possui uma conta? </a>
            </form></div>
            
            <Footer />
        </>
    );
}

export default CreateAccount;