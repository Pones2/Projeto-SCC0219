import React from "react";

import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';

import './Account.css';

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

const Account = ({GlobalState}) => {
    const { login, setLogin, loggedUser, setLoggedUser} = GlobalState;

    const navigate = useNavigate();

    const handleLogout = () => {
        setLogin("unlogged");
        setLoggedUser({});
        navigate("/");
    }

    useEffect(() => {
        if(login === "unlogged"){
            navigate('/login')
        }
      });

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
    else if (login === "user")
    {
        return (
            <>
                
                <Header />
                <div id="divContaBg">
                    <div id="divConta"> 
                        <p> Bem vindo, usuário {loggedUser.name}! </p>
                        <Button onClick={() => navigate("/editarconta")}> Mudar dados da conta </Button> <br></br>
                        <Button onClick={ handleLogout }> Log out </Button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
    else if (login === "admin")
    {
        return (
            <>
                <Header />
                <div id="divContaBg">
                    <div id="divConta"> 
                            <p> Bem vindo, admin {loggedUser.name}! </p>
                            <Button onClick={() => navigate("/editarconta")}> Mudar dados da conta </Button> <br></br>
                            <Button onClick={() => navigate("/adicionarproduto")}> Adicionar Produto </Button> <br></br>
                            <Button onClick={() => navigate("/editarusuarios")}> Remover Usuários </Button> <br></br>
                            <Button onClick={() => navigate("/visualizarcontato")}> Visualizar Mensagens de Contato </Button> <br></br>
                            <Button onClick={ handleLogout }> Log out </Button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Account;