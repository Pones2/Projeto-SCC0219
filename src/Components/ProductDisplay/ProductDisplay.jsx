import React from "react";

import "./ProductDisplay.css";

const ProductDisplay = (props) => {
    //changes number to currency format
    let brazilianReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const price = brazilianReal.format(props.price);

    return (
    <>
    <   img src={props.imgSrc} alt={props.name} id={props.name} class="productImage"/>
        <div id="productList">
            <div id="productNameDesc">
                <p id="productName"> {props.name} </p>
                <p id="productDescription"> {props.description} </p>
            </div>
            <div id="productListPrice">
                <p id="productPrice"> {price} </p>
            </div>
        </div>
    </>
    );
}

export default ProductDisplay;