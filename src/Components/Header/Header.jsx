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

                        <Dropdown> 
                            <Button> Home </Button>
                            <Button> About </Button>
                        </Dropdown>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;