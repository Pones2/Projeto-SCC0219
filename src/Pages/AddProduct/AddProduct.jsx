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
                    <div id="acessDenied">
                        <p> Você não tem permissão para acessar esta página! </p>
                    </div>
                <Footer />
            </>
        );
    }
    else 
    {
        return (
            <>
                <Header />
                <div id="backgroundAddProd">
                    
                    <form onSubmit={handleSubmit} id="formAddProd">
                        <h1 id="textoAddProd"> Adicionar produto </h1>
                        <Label required onChange={handleIdChange} placeholder="ID do produto"> ID: </Label>
                        <Label required onChange={handleNameChange} placeholder="Nome do produto"> Nome do produto: </Label>
                        <Label required onChange={handleDescriptionChange} placeholder="Descrição do produto"> Descrição: </Label>
                        <Label required onChange={handleTypeChange} placeholder="Tipo do produto"> Tipo: </Label>
                        <Label required onChange={handleImgSrcChange} placeholder="Imagem do produto"> Fonte da imagem: </Label>
                        <Label required onChange={handlePriceChange} placeholder="Preço do produto"> Preço: </Label>
                        <Label required onChange={handleQuantityChange} placeholder="Quantidade do Produto"> Quantidade: </Label>
                        <Button> Adicionar produto </Button>
                    </form>
                </div>
                    {confirmMessage}
                <Footer />
            </>
        );
    }
}

export default AddProduct;