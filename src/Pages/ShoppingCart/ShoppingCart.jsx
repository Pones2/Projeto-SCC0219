import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./ShoppingCart.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import CartProduct from "../../Components/CartProduct/CartProduct";

const ShoppingCart = ({GlobalState}) => {
    const { cart, setCart } = GlobalState;

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const countProducts = () => {
            const counts = {};
            cart.forEach((product) => {
                counts[product.id] = (counts[product.id] || 0) + 1;
            });
            return counts;
        };
    
        const productCounts = countProducts();
    
        const newCartItems = Object.keys(productCounts).map((productId) => {
            const product = cart.find((item) => item.id === productId);
            const count = productCounts[productId];
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
    }, [GlobalState, cart]);

    const handlePaying = () => {
        if (cart.length === 0) {
            alert("Carrinho vazio!");
            return;
        }
        navigate('/pagamento');
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <>
            <Header />
            {cartItems}
            <Button onClick={handlePaying}> Pagar </Button>
            <Button onClick={clearCart}> Esvaziar carrinho </Button>
            <Footer />
        </>
    );
}

export default ShoppingCart;