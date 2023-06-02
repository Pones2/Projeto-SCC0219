import React, {useState, useEffect} from "react";
import { Link , useParams } from "react-router-dom";

import "./SingleProduct.css";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";


const SingleProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("todos");
    const [description, setDescription] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [quantity, setQuantity] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        fetch('/ProductsData.json',
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }).then(response => response.json())
        .then((data) => {
            const product = data.find((product) => product.id === id);
            setName(product.name);
            setPrice(product.price);
            setType(product.type);
            setDescription(product.description);
            setImgSrc(product.imgSrc);
            setQuantity(product.quantity);
        }).catch(error => {
            window.alert("Erro ao carregar o produto. Erro = " + error)
        });
    }, []);

    function toCurrency(value)
    {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    return (
        <>
            <Header />
            <img src={imgSrc} />
            <h1> {name} </h1>
            <h2> {toCurrency(price)} </h2>
            <h3> {type} </h3>
            <p> {description} </p>
            <p> Quantidade: {quantity} </p>
            <Footer />
        </>
    );
}

export default SingleProduct;