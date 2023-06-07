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
            <h1>Criar Conta</h1>
            <form onSubmit={handleSubmit} id="formCadastro">
                <Label id="nome" type="text" required onChange={handleNameChange} > Nome completo: </Label> <br></br>
                <Label id="email" type="email" required onChange={handleEmailChange}> Email: </Label> <br></br>
                <Label id="senha" type="password" required onChange={handlePasswordChange}> Senha: </Label> <br></br>
                <Label id="confirmarSenha" type="password" required onChange={handleConfirmPasswordChange}> Confirmar Senha: </Label> <br></br>
                <Label id="telefone" type="tel" required onChange={handlePhoneChange}> Telefone: </Label> <br></br>
                <Label id="endereco" type="text" required onChange={handleAddressChange}> Endereço: </Label> <br></br>
                <Button> Criar Conta </Button>
                {passwordError}
                <a href="/login"> Já possui uma conta? </a>
            </form>
            
            <Footer />
        </>
    );
}

export default CreateAccount;