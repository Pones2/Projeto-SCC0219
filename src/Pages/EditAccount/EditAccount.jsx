import React from "react";

import { useNavigate } from "react-router-dom";

import './EditAccount.css';

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";

const EditAccount = ({GlobalState}) => {
    const { login, loggedUser, setLoggedUser } = GlobalState;

    const navigate = useNavigate();

    const [originalName, setOriginalName] = React.useState(loggedUser.name);
    const [originalEmail, setOriginalEmail] = React.useState(loggedUser.email);
    const [originalPassword, setOriginalPassword] = React.useState(loggedUser.password);
    const [originalAddress, setOriginalAddress] = React.useState(loggedUser.address);
    const [originalPhone, setOriginalPhone] = React.useState(loggedUser.phone);

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const [confirmMessage, setConfirmMessage] = React.useState("");

    // handle form changes

    const handleSubmit = async (event) => {
        const {setLogin} = GlobalState;
        event.preventDefault();

        if(name === '' && email === '' && password === '' && confirmPassword === '' && address === '' && phone === '')
        {
            window.alert("Nenhuma alteração foi feita.");
            return;
        }

        // check existence of password and if they match
        if(password !== '' && confirmPassword !== '' && password !== confirmPassword)
        {
            window.alert("As senhas não coincidem.");
            return;
        }

        const data = {
            name: name === '' ? originalName : name,
            email: email === '' ? originalEmail : email,
            password: password === '' ? originalPassword : password,
            address: address === '' ? originalAddress : address,
            phone: phone === '' ? originalPhone : phone
        }

        // console.log(data);

        // convert data to JSON
        //const jsonData = JSON.stringify(data);

        // // simulate POST
        

        let result = await fetch(
            `http://localhost:5000/updateUser?email=${encodeURIComponent(originalEmail)}`, {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
        result = await result.json();
        alert(result.message);

        setLogin("unlogged");
        navigate("/login");
        

        //localStorage.setItem("changeUser = " + email, jsonData);

        setName("");
        setAddress("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        setConfirmMessage("Alterações realizadas com sucesso!");
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

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    if (login === "unlogged") {
        return (
            <>
                <Header />
                <p> Vocẽ não está logado! </p>
                <Button onClick={() => navigate("/login")}> Ir para página de login </Button>
                <Footer />
            </> 
        );
    }
    else
    {
        return (
            <>
                <Header />
                <div id="backgroundEdit">
                    <form onSubmit={handleSubmit} id="formEdit">
                        <h1 id="textoEdit"> Editar conta: </h1>
                        <Label onChange={handleNameChange} id="nome" placeholder={originalName} type="text"> Nome: </Label>
                        <Label onChange={handleEmailChange} id="email" placeholder={originalEmail} type="email"> Email: </Label>
                        <Label onChange={handlePasswordChange} id="senha" placeholder="senha" type="password"> Senha: </Label>
                        <Label onChange={handleConfirmPasswordChange} id="confirmarSenha" placeholder="confirmar senha" type="password"> Confirmar senha: </Label>
                        <Label onChange={handleAddressChange} id="endereco" placeholder={originalAddress} type="text"> Endereço: </Label>
                        <Label onChange={handlePhoneChange} id="telefone" placeholder={originalPhone} type="tel"> Telefone: </Label>
                        <Button> Confirmar </Button>
                    </form>
                    </div>
                    {confirmMessage}
                <Footer />
            </>
        );
    }
}

export default EditAccount;