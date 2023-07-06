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

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const countProducts = () => {
            const counts = {};
            cart.forEach((product) => {
                counts[product.id] = (counts[product.id] || 0) + 1;
            });
            return counts;
        };
    
        const productCounts = countProducts();

        let updatedTotalPrice = 0;
    
        const newCartItems = Object.keys(productCounts).map((productId) => {
            const product = cart.find((item) => item.id === productId);
            const count = productCounts[productId];
            updatedTotalPrice += product.price * count;

            return (
                <div className="productShoppingCart">
                    <CartProduct
                        key={productId}
                        product={product}
                        count={count}
                        GlobalState={GlobalState}
                    />
                    <Button onClick={() => deleteProduct(productId)}> Remover </Button>
                </div>
            );
        });
        setCartItems(newCartItems);
        setTotalPrice(updatedTotalPrice);
    }, [GlobalState, cart]);

    const deleteProduct = (productId) => {
        const newCart = cart.filter((product) => product.id !== productId);

        setCart(newCart);

        const countProducts = () => {
            const counts = {};
            newCart.forEach((product) => {
                counts[product.id] = (counts[product.id] || 0) + 1;
            });
            return counts;
        };
    
        const productCounts = countProducts();

        let updatedTotalPrice = 0;
    
        const newCartItems = Object.keys(productCounts).map((productId) => {
            const product = newCart.find((item) => item.id === productId);
            const count = productCounts[productId];
            updatedTotalPrice += product.price * count;

            return (
                <>
                    <CartProduct
                        key={productId}
                        product={product}
                        count={count}
                        GlobalState={GlobalState}
                    />
                    <Button onClick={() => deleteProduct(productId)}> Remover </Button>
                </>
            );
        });
        
        setCartItems(newCartItems);
        setTotalPrice(updatedTotalPrice);
    }

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

    function toCurrency(value)
    {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    return (
        <>
            <Header />
            <div id="wholeCart">

                <div id="cartItems">
                    <div id="cartHeader">
                        <p id="imgProdutoHeader">Imagem</p>
                        <p id="nomeProdutoHeader">Produto</p>
                        <p>Preço Unitario</p>
                        <p>Quantidade</p>
                        <p>Total</p>

                    </div>

                    {cartItems}
                    <div id="cartTotalPrice">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p>{toCurrency(totalPrice)}</p>
                    </div>
                    
                </div>

                

                <div id="cartButtons">
                    <Button onClick={clearCart}> Esvaziar carrinho </Button>
                    <Button onClick={handlePaying}> Pagar </Button>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default ShoppingCart;