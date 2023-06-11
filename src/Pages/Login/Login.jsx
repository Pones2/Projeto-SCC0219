import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';

import "./Login.css";

import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

const Login = ( {GlobalState} ) => {


    // global login variable
    const {login, setLogin, setLoggedUser} = GlobalState;

    const navigate = useNavigate();

    //email and password variables
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    //error message for when the login fails
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const timer = setTimeout(() => {
            fetch('/Users.json',{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }).then(response => response.json())
        .then((data) => {
            // finds user by email
            const user = data.find((user) => user.email === email);
            // if the email exists and the password matches
            if (user && user.password === password)
            {
                if(user.admin)
                {
                    setLogin("admin");
                    setLoggedUser(user);
                    navigate("/");
                }
                else
                {
                    setLogin("user");
                    setLoggedUser(user);
                    navigate("/");
                }

                setErrorMessage("");
            }
            else
            {
                setLogin("unlogged");
                setErrorMessage("Email ou senha incorretos.");
            }
        }).catch(error => {
            window.alert("Erro ao carregar o usuário. Erro = " + error)
        })}, 100);

        return () => clearTimeout(timer);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogout = () => {
        setLogin("unlogged");
    }

    useEffect(() => {
        if(login !== "unlogged"){
            navigate('/conta')
        }
      });



    if(login !== "unlogged"){
        // window.location.replace('/conta');
    }

    if(login === "unlogged")
    {
        return (
            <>
                <Header />
                <div id="backgroundLogin">
                <form onSubmit={handleSubmit} id ="formLogin">
                    <h1 id="textoLogin">Login</h1>
                    <Label id="email" type="email" required onChange = {handleEmailChange} placeholder="E-mail"> Email: </Label> <br></br>
                    <Label id="senha" type="password" required onChange = {handlePasswordChange} placeholder="Senha">  Senha: </Label> <br></br>
                    <Button type={'submit'}> Entrar </Button>
                    <p>{errorMessage}</p>
                </form>
                
                </div>
                <Footer />
            </>
        );
    }
    else
    {
        return ( //<><p>Redirecionando...</p> </>
            <>
                <Header />
                <h1>Login</h1>
                <p>Você já está logado.</p>
                <Button onClick={handleLogout}> Logout </Button>
                <Footer />
            </>
        );
    }
}

export default Login;