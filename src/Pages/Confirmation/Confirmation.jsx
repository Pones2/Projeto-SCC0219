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
            <h3> Pagamento confirmado! </h3>
            <Button onClick={() => navigate("/")}> Retornar para o menu principal </Button>
            <Footer />
        </>
    );
}

export default Confirmation;
