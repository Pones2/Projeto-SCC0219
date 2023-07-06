import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AddProduct.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";

const AddProduct = ({ GlobalState }) => {
  const { login } = GlobalState;

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [confirmMessage, setConfirmMessage] = useState("");

  const navigate = useNavigate();

  //handle form changes
  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      id: id,
      name: name,
      description: description,
      type: type,
      imgSrc: imgSrc,
      price: price,
      quantity: quantity,
      sold: 0,
    };

    let result = await fetch("http://localhost:5000/addProduct", {
      method: "post",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();

    console.log(result);

    if (result.name) {
      alert("Produto adicionado com Sucesso!");
      navigate("/conta");
    } else {
      alert("Erro ao Adicionar o Produto!");
    }

    // // convert data to JSON
    // const jsonData = JSON.stringify(product);

    // // simulate POST
    // localStorage.setItem("addProduct = " + id, jsonData);

    // clear form
    setId("");
    setName("");
    setDescription("");
    setType("");
    setImgSrc("");
    setPrice(0);
    setQuantity(0);

    setConfirmMessage("Produto adicionado com sucesso!");
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleImgSrcChange = (event) => {
    setImgSrc(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  if (login !== "admin") {
    return (
      <>
        <Header />
        <div id="acessDenied">
          <p> Você não tem permissão para acessar esta página! </p>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div id="backgroundAddProd">
          <form onSubmit={handleSubmit} id="formAddProd">
            <h1 id="textoAddProd"> Adicionar produto </h1>
            <Label
              required
              onChange={handleNameChange}
              placeholder="Nome do produto"
            >
              {" "}
              Nome do produto:{" "}
            </Label>
            <Label
              required
              onChange={handleDescriptionChange}
              placeholder="Descrição do produto"
            >
              {" "}
              Descrição:{" "}
            </Label>
            <Label
              required
              onChange={handleTypeChange}
              placeholder="Tipo do produto"
            >
              {" "}
              Tipo:{" "}
            </Label>
            <Label
              required
              onChange={handleImgSrcChange}
              placeholder="Imagem do produto"
            >
              {" "}
              Fonte da imagem:{" "}
            </Label>
            <Label
              required
              onChange={handlePriceChange}
              placeholder="Preço do produto"
            >
              {" "}
              Preço:{" "}
            </Label>
            <Label
              required
              onChange={handleQuantityChange}
              placeholder="Quantidade do Produto"
            >
              {" "}
              Quantidade:{" "}
            </Label>
            <Button> Adicionar produto </Button>
          </form>
        </div>
        {confirmMessage}
        <Footer />
      </>
    );
  }
};

export default AddProduct;
