import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import Dropdown from "../Dropdown/Dropdown";

import "./Header.css";

// header component

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <header>
                <nav>
                    
                        <div class="logo">
                            <a onClick={() => navigate("/")}><img src={require('./logo.png')} alt="Logo Pet Shop"></img></a>
                        </div>
                        {/* <a class="navLink" onClick={() => navigate("/")}> Home </a>
                        <a class="navLink" onClick={() => navigate("/contato")}> Contato </a>
                        <a class="navLink" onClick={() => navigate("/criarconta")}> Criar Conta </a>
                        <a class="navLink" onClick={() => navigate("/login")}> Login </a>
                        <a class="navLink" onClick={() => navigate("/produtos")}> Produtos </a>
                        <a class="navLink" onClick={() => navigate("/carrinho")}> Carrinho </a> */}

                        <Dropdown className="dropdown"> 
                            <Button className={"dropdownContent"} onClick={() => navigate("/contato")}> Contato </Button> <br></br>
                            <Button className={"dropdownContent"} onClick={() => navigate("/criarconta")}> Criar Conta </Button> <br></br>
                            <Button className={"dropdownContent"} onClick={() => navigate("/login")}> Login </Button> <br></br>
                            <Button className={"dropdownContent"} onClick={() => navigate("/produtos")}> Produtos </Button> <br></br>
                            <Button className={"dropdownContent"} onClick={() => navigate("/carrinho")}> Carrinho </Button> <br></br>
                            <Button className={"dropdownContent"} onClick={() => navigate("/conta")}> Conta </Button> <br></br>
                        </Dropdown>
                </nav>
            </header>
        </>
    );
}

export default Header;