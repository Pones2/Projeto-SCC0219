import React, {useState} from "react";

import "./AddProduct.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";

const AddProduct = ({GlobalState}) => {
    const {login} = GlobalState;

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const [confirmMessage, setConfirmMessage] = useState("");

    //handle form changes
    const handleSubmit = (event) => {
        event.preventDefault();

        const product = {
            id: id,
            name: name,
            description: description,
            type: type,
            imgSrc: imgSrc,
            price: price,
            quantity: quantity,
            sold: 0
        }

        // convert data to JSON
        const jsonData = JSON.stringify(product);

        // simulate POST
        localStorage.setItem("addProduct = " + id, jsonData);

        // clear form
        setId("");
        setName("");
        setDescription("");
        setType("");
        setImgSrc("");
        setPrice(0);
        setQuantity(0);

        setConfirmMessage("Produto adicionado com sucesso!");
    }

    const handleIdChange = (event) => {
        setId(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }

    const handleImgSrcChange = (event) => {
        setImgSrc(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    if(login !== "admin") {
        return (
            <>
                <Header />
                    <p> Você não tem permissão para acessar esta página! </p>
                <Footer />
            </>
        );
    }
    else 
    {
        return (
            <>
                <Header />
                    <h1> Adicionar produto </h1>
                    <form onSubmit={handleSubmit}>
                        <Label required onChange={handleIdChange}> Id: </Label>
                        <Label required onChange={handleNameChange}> Nome do produto: </Label>
                        <Label required onChange={handleDescriptionChange}> Descrição: </Label>
                        <Label required onChange={handleTypeChange}> Tipo: </Label>
                        <Label required onChange={handleImgSrcChange}> Fonte da imagem: </Label>
                        <Label required onChange={handlePriceChange}> Preço: </Label>
                        <Label required onChange={handleQuantityChange}> Quantidade: </Label>
                        <Button> Adicionar produto </Button>
                    </form>
                    {confirmMessage}
                <Footer />
            </>
        );
    }
}

export default AddProduct;