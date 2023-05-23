import React from "react";

import "./ProductDisplay.css";

const ProductDisplay = (props) => {
    //changes number to currency format
    let brazilianReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const price = brazilianReal.format(props.price);

    return (
    <>
    <   img src={props.imgSrc} alt={props.name} /> <br></br>
        <p> {props.name} </p> <br></br>
        <p> {props.description} </p> <br></br>
        <p> {price} </p> <br></br>
    </>
    );
}

export default ProductDisplay;