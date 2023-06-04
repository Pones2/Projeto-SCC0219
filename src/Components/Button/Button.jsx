import React from 'react';

import './Button.css';

// button component.
// children is the text inside the button
// onClick is the function that will be called when the button is clicked
// className is the class that will be added to the button

const Button = (props) => {
    return (
    <button onClick={props.onClick} className={`button ${props.className}`} type={props.type}> 
        {props.children}
    </button>);
}
 
export default Button;