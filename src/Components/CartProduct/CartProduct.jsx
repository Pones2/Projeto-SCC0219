import React from "react";

import "./CartProduct.css";

const CartProduct = ( props ) => {
    // converts to brl currency
    function toCurrency(value)
    {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    return (
        <>
            <p> Quantidade: {props.count} </p>
            <img src={props.product.imgSrc}/>
            <p> {props.product.name} </p>
            <p> {toCurrency(props.product.price)} </p>
            <br></br>
        </>
    );
}

export default CartProduct;