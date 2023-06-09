import React from "react";

import "./Contact.css";

import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";

const Contact = () => {
  // contact variables
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // confirmation message
  const [sentMessage, setSentMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message,
    };

    //POST
    let result = await fetch("http://localhost:5000/addContact", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result) {
      console.log(result);
      alert("Mensagem enviada com sucesso!");
    } else {
      alert("Erro ao enviar a mensagem");
    }

    // resets the form
    setName("");
    setEmail("");
    setMessage("");
    setSentMessage("Mensagem enviada com sucesso!");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit} id="formContato">
        <h2 id="textoContato">Entre em contato conosco</h2>
        <p>
          Preencha o formulário abaixo para entrar em contato com a nossa loja.
        </p>
        <Label
          id="nome"
          type="text"
          onChange={handleNameChange}
          placeholder="Nome"
          required
        >
          {" "}
          Nome:{" "}
        </Label>{" "}
        <br></br>
        <Label
          id="email"
          type="email"
          onChange={handleEmailChange}
          placeholder="E-mail"
          required
        >
          {" "}
          Email:{" "}
        </Label>{" "}
        <br></br>
        <Label
          id="mensagem"
          type="textarea"
          onChange={handleMessageChange}
          placeholder="Digite aqui sua mensagem"
          required
        >
          {" "}
          Mensagem:{" "}
        </Label>{" "}
        <br></br>
        <Button> Enviar mensagem </Button>
        {sentMessage}
      </form>
      <Footer />
    </>
  );
};

export default Contact;
