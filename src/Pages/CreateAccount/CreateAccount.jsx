import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

import "./CreateAccount.css";
import Button from "../../Components/Button/Button";

const CreateAccount = ({GlobalState}) => {
    const { login, setLogin } = GlobalState;

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

        const timer = setTimeout(() => {
            fetch("/Users.json", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }).then(response => response.json()
            ).then((data) => {
                const user = data.find((user) => user.email === email);

                if(user)
                {
                    window.alert("Já existe uma conta com esse email.");
                    return;
                }
                else
                {
                    const data = {
                        name: name,
                        email: email,
                        password: password,
                        phone: phone,
                        address: address
                    }
            
                    // converts the data to JSON
                    const jsonData = JSON.stringify(data);
            
                    // simulate POST
            
                    localStorage.setItem(email, jsonData);
            
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
            }).catch(error => {
                window.alert("Erro ao tentar cadastrar uma conta. Erro = " + error);
                return;
            });
        }, 100);

        return () => clearTimeout(timer);
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

    const handleLogout = () => {
        setLogin("unlogged");
        navigate("/");
    }

    if(login === "unlogged")
    {
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
    else
    {
        return (
            <>
                <Header />
                <h3> Você já está logado </h3>
                <Button onClick={handleLogout}> Log Out </Button> <br></br>
                <Button onClick={() => navigate("/")}> Voltar ao menu principal </Button>
                <Footer />
            </>
        );
    }
}

export default CreateAccount;