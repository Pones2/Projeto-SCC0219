import React from "react";
import { useNavigate } from "react-router-dom";

import "./Confirmation.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

const Confirmation = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div id="bgSuccess">
                <h1> Pagamento confirmado! </h1>
                <Button onClick={() => navigate("/")}> Retornar para o menu principal </Button>
            </div>
            <Footer />
        </>
    );
}

export default Confirmation;
