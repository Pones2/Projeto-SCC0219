import React, {useState} from 'react';

import Button from '../Button/Button';

import dropdownImg from "./Dropdown.png";

import './Dropdown.css';

const Dropdown = ({ children }) => {
    const [ display, setDisplay ] = useState( 'none' )

    function handleClick() {

        if ( display === 'none' ) {

            setDisplay( 'block' )

        } else {

            setDisplay( 'none' )

        }

    }

    return (

        <div>

            <Button className="dropdownMenu" onClick={() => handleClick()}>

                <img className = "dropdownIcon" src = {dropdownImg}></img>

            </Button>

            <div style={{display:display}}>

                { children }

            </div>

        </div>

    )
}

export default Dropdown;