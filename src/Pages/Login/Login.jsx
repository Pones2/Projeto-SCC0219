import React from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

const Login = ( {GlobalState} ) => {
    // global login variable
    const {login, setLogin} = GlobalState;

    const navigate = useNavigate();

    //email and password variables
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    //error message for when the login fails
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

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
                    navigate("/");
                }
                else
                {
                    setLogin("user");
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
        });
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

    if(login === "unlogged")
    {
        return (
            <>
                <Header />
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <Label id="email" type="email" required onChange = {handleEmailChange}> Email: </Label> <br></br>
                    <Label id="senha" type="password" required onChange = {handlePasswordChange}> Senha: </Label> <br></br>
                    <Button type={'submit'}> Entrar </Button>
                </form>
                <p>{errorMessage}</p>
                <Footer />
            </>
        );
    }
    else
    {
        return (
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