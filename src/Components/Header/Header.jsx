import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import Dropdown from "../Dropdown/Dropdown";

import "./Header.css";

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Button onClick={() => navigate("/")}> Home </Button>
                        <Button onClick={() => navigate("/contato")}> Contato </Button>

                        <Dropdown className="dropdown"> 
                            <Button className={"dropdownContent"}> Home </Button> <br></br>
                            <Button className={"dropdownContent"}> About </Button>
                        </Dropdown>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;