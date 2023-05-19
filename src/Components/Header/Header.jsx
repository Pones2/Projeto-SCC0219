import React from "react";

import Button from "../Button/Button";

import Dropdown from "../Dropdown/Dropdown";

import "./Header.css";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Button> Home </Button>
                        <Button> About </Button>

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