import React from "react";
import Button from "../../Components/Button/Button";

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
                
                <p id="prodNameCart"> {props.product.name} </p>
                <p> {toCurrency(props.product.price)} </p>
                <p> {props.count} </p>
                <p> {toCurrency(props.count * props.product.price)}</p>
                
            </div>
        </>
    );
}

export default CartProduct;