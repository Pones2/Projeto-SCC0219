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
            <div id="cartOneItem">
                <img src={props.product.imgSrc}/>
                
                <p> {props.product.name} </p>
                <p> {toCurrency(props.product.price)} </p>
                <p> Quantidade : {props.count} </p>
                <p> Total : {toCurrency(props.count * props.product.price)}</p>
            </div>
        </>
    );
}

export default CartProduct;