import React, {useState, useEffect} from "react";
import { Link , useParams } from "react-router-dom";

import "./SingleProduct.css";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";

const SingleProduct = ({GlobalState}) => {
    const { cart, setCart } = GlobalState;

    // product variables
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("todos");
    const [description, setDescription] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [quantity, setQuantity] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        // fetch data
        const timer = setTimeout(() => {
            fetch('/ProductsData.json', {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            })
            .then(response => response.json())
            .then((data) => {
                const product = data.find((product) => product.id === id);
                setName(product.name);
                setPrice(product.price);
                setType(product.type);
                setDescription(product.description);
                setImgSrc(product.imgSrc);
                setQuantity(product.quantity);
            })
            .catch(error => {
                window.alert("Erro ao carregar o produto. Erro = " + error)
            });
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const addToCart = () => {
        const product = {
            name: name,
            price: price,
            type: type,
            imgSrc: imgSrc,
            id: id
        }

        setCart([...cart, product]);
        console.log(cart);
    }

    // converts to brl currency
    function toCurrency(value)
    {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    return (
        <>
            <Header />
            <div id="product">
                <div id="productImage">
                    <img src={imgSrc} />
                
                </div>
                <div id="productInfo">
                    <div id="productInfoValues">
                        <div id="productInfoValuesPrice">
                            <h1 id="productInfoName"> {name} </h1>
                            <p> Quantidade: {quantity} </p>
                            <h3> {type} </h3>
                        </div>
                        <div id="productInfoValuesButton">
                            <h2 id="productInfoPrice"> {toCurrency(price)} </h2>
                            <Button onClick={addToCart} id="productButton"> Adicionar ao Carrinho </Button>
                        </div>
                    </div>
                    <div id="productInfoDesc">
                        <p> {description} </p>
                    </div>
                    
                </div>
            
            </div>
            <Footer />
        </>
    );
}

export default SingleProduct;