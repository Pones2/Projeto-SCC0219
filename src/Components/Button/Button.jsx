import React from 'react';

import './Button.css';

const Button = ({children, onClick, className}) => {
    return (
    <button onClick={onClick} className={`button ${className}`}> 
        {children}
    </button>);
}
 
export default Button;