import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

import "./CreateAccount.css";
import Button from "../../Components/Button/Button";

import {useEffect} from 'react';

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        // password does not coincide
        if(password !== confirmPassword)
        {
            setPasswordError("As senhas não coincidem.");
            return;
        }

        // let resultGetUser = await fetch(
        //     `http://localhost:5000/getUser?email=${encodeURIComponent(email)}`, {
        //         method: "GET",
        //         headers: {
        //           "Content-Type": "application/json",}
        // })

        // resultGetUser = await resultGetUser.json();
		// console.warn(resultGetUser);

        let result = await fetch(
            'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email,password,phone,address }),
            headers: {
                "Content-Type": "application/json",
            }
        })

        result = await result.json();
		//console.warn(result);

		if (result == "Usuario Cadastrado Com Sucesso") {
			alert("Usuario Cadastrado Com Sucesso");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setPhone("");
            setAddress("");
    
            setPasswordError("");
            navigate("/login");
		}else{
            alert(result);
        }
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

    useEffect(() => {
        if(login !== "unlogged"){
            navigate('/conta')
        }
      });

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