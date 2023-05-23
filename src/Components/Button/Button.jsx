import React from 'react';

import './Button.css';

// button component.
// children is the text inside the button
// onClick is the function that will be called when the button is clicked
// className is the class that will be added to the button

const Button = ({children, onClick, className}) => {
    return (
    <button onClick={onClick} className={`button ${className}`}> 
        {children}
    </button>);
}
 
export default Button;