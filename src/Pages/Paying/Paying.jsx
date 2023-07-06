import React, { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";

import "./Paying.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Label from "../../Components/Label/Label";
import Button from "../../Components/Button/Button";
import CartProduct from "../../Components/CartProduct/CartProduct";

const Paying = ({ GlobalState }) => {
  const { login, cart, setCart, loggedUser } = GlobalState;

  const navigate = useNavigate();

  const [cartItems, setCartItems] = React.useState([]);

  const [totalPrice, setTotalPrice] = React.useState(0);

  const [address, setAddress] = React.useState("");

  let quantities = [];

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

  const handlePaying = async (event) => {
    event.preventDefault();

    let products = structuredClone(cart);
    let removeProducts = [];
    let indexProduct = 0;

    const countProducts = () => {
      const counts = {};
      cart.forEach((product) => {
        counts[product.id] = (counts[product.id] || 0) + 1;
      });
      return counts;
    };

    const productCounts = countProducts();

    console.log(cart);

    for (let productCart of products) {
      delete productCart.imgSrc;
      // console.log(productCart);
      let resultProduct = await fetch(
        `http://localhost:5000/getOneProduct?id=${encodeURIComponent(
          productCart.id
        )}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((resultProduct) => {
          console.log(productCounts[resultProduct._id]);
          quantities[resultProduct._id] = resultProduct;
          if (resultProduct.quantity - productCounts[resultProduct._id] < 0) {
            removeProducts.push(indexProduct);
          }
        })
        .catch((error) => {
          window.alert("Erro ao carregar o produto. Erro = " + error);
        });
      indexProduct += 1;
    }

    if (removeProducts.length > 0) {
      alert(
        "Um ou mais produtos foram removidos do carrinho, pois estao sem estoque!"
      );
      setCart([]);
      navigate("/carrinho");
      return;
    } else {
      // send data to server
      const data = {
        name: loggedUser.name,
        email: loggedUser.email,
        products: products,
        totalPrice: totalPrice,
        address: address,
      };

      //POST
      let result = await fetch("http://localhost:5000/addSold", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result) {
        result = await result.json();

        console.log(result);

        for (let productsSold of cart) {
          const product = {
            name: productsSold.name,
            price: productsSold.price,
            type: productsSold.type,
            description: productsSold.description,
            imgSrc: "",
            quantity:
              quantities[productsSold.id].quantity -
              productCounts[productsSold.id],
          };

          let result = await fetch(
            `http://localhost:5000/updateProduct?id=${encodeURIComponent(
              productsSold.id
            )}`,
            {
              method: "put",
              body: JSON.stringify(product),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          result = await result.json();
          console.log(result);
          alert(result.message);
        }
      } else {
        alert("Erro ao realizar Compra");
        navigate("/carrinho");
        return;
      }

      //localStorage.setItem(loggedUser.email + cart, jsonData);

      // clear carta
      setCart([]);

      navigate("/confirmacao");
    }
  };

  // converts to brl currency
  function toCurrency(value) {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (login === "unlogged") {
    return (
      <>
        <Header />
        <h2> Faça login para continuar </h2>
        <Button onClick={navigate("/login")}> Login: </Button>
        <Footer />
      </>
    );
  } else if (cart.length === 0) {
    return (
      <>
        <Header />
        <h2> Carrinho vazio! </h2>
        <Button onClick={navigate("/produtos")}> Voltar para a loja </Button>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div id="paymentPage">
          {cartItems}
          <form onSubmit={handlePaying} id="paymentForm">
            <p id="precoTotalPayment">Preço Total : {toCurrency(totalPrice)}</p>
            <Label id="credit-card" required>
              {" "}
              Cartão de crédito:{" "}
            </Label>
            <p> Entregar para: {address} </p>
            <Button> Pagar </Button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
};

export default Paying;
