import React from "react";
import { useNavigate } from "react-router-dom";

import "./NotFound.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

const NotFound = () => {
    const navifate = useNavigate();

    return (
        <>  
            <Header />
            <div id="background404">
                <div id="div404">
                    <h1>404</h1>
                    <h3> Nenhuma página aqui </h3>
                    <Button onClick={() => navifate("/")}> Retornar para o menu principal </Button>
                </div>
                <div></div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;