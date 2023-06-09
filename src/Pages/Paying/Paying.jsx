import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Paying.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Label from "../../Components/Label/Label";
import Button from "../../Components/Button/Button";
import CartProduct from "../../Components/CartProduct/CartProduct";

const Paying = ({GlobalState}) => {

    const { login, cart, setCart , loggedUser} = GlobalState;

    const navigate = useNavigate();

    const [cartItems, setCartItems] = React.useState([]);

    const [totalPrice, setTotalPrice] = React.useState(0);

    const [address, setAddress] = React.useState("");

    useEffect(() => {
        // get the user address
        setAddress(loggedUser.address);

        // count repeated products
        const countProducts = () => {
            const counts = {};
            cart.forEach((product) => {
                counts[product.id] = (counts[product.id] || 0) + 1;
            });
            return counts;
        };
    
        const productCounts = countProducts();

        let updatedTotalPrice = 0;
        
        // creates a component for each item in the cart
        const newCartItems = Object.keys(productCounts).map((productId) => {
            const product = cart.find((item) => item.id === productId);
            const count = productCounts[productId];
            updatedTotalPrice += product.price * count;

            return (
                <CartProduct
                    key={productId}
                    product={product}
                    count={count}
                    GlobalState={GlobalState}
                />
            );
        });
        setCartItems(newCartItems);
        setTotalPrice(updatedTotalPrice);
    }, [GlobalState, cart]);

    const handlePaying = (event) => {
        event.preventDefault();
        // send data to server

        // clear carta
        setCart([]);

        navigate('/confirmacao');
    }

    // converts to brl currency
    function toCurrency(value)
    {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    if(login === "unlogged")
    {
        return (
            <>
                <Header/>
                <h2> Faça login para continuar </h2>
                <Button onClick={navigate("/login")}> Login: </Button>
                <Footer/>
            </>
        );
    }
    else if(cart.length === 0)
    {
        return (
            <>
                <Header/>
                <h2> Carrinho vazio! </h2>
                <Button onClick={navigate("/produtos")}> Voltar para a loja </Button>
                <Footer/>
            </>
        );
    }
    else 
    {
        return (
            <>
                <Header/>
                {toCurrency(totalPrice)}
                {cartItems}
                <form onSubmit={handlePaying}>
                    <Label id = "credit-card" required> Cartão de crédito: </Label>
                    <p> Entregar para: {address} </p>
                    <Button> Pagar </Button>
                </form>
                <Footer/>
            </>
        );
    }
}

export default Paying;