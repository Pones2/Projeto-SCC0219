import React from "react";

import "./Login.css";

import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

const Login = () => {
    return (
        <>
            <Header />
            <h1>Login</h1>
            <Label id="email" type="email" required> Email: </Label> <br></br>
            <Label id="senha" type="password" required> Senha: </Label> <br></br>
            <Button> Entrar </Button>
            <Footer />
        </>
    );
}

export default Login;