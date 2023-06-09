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
            <h1>404</h1>
            <h2> Nenhuma página aqui </h2>
            <Button onClick={() => navifate("/")}> Retornar para o menu principal </Button>
            <Footer />
        </>
    );
};

export default NotFound;