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
                            <a onClick={() => navigate("/")}><img src="https://files.catbox.moe/cjmq4l.png" alt="Logo Pet Shop"></img></a>
                        </div>
                        <ul>
                        <a onClick={() => navigate("/")}> Home </a>
                        <a onClick={() => navigate("/contato")}> Contato </a>
                        <a onClick={() => navigate("/criarconta")}> Criar Conta </a>
                        <a onClick={() => navigate("/login")}> Login </a>
                        <a onClick={() => navigate("/produtos")}> Produtos </a>
                        <a onClick={() => navigate("/carrinho")}> Carrinho </a>

                        {/* <Dropdown className="dropdown"> 
                            <Button className={"dropdownContent"}> Home </Button> <br></br>
                            <Button className={"dropdownContent"}> About </Button>
                        </Dropdown> */}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;