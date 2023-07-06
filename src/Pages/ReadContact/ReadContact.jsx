import React, { useEffect } from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";

import "./ReadContact.css";

const ReadContact = () => {
  const [contactData, setContactData] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getContact", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((data) => {
        //aqui ta chegando um array de mensagens
        const contactData = data.map((contact) => (
          <div className="readContactComponent">
            <ContactComponent
              name={contact.name}
              email={contact.email}
              message={contact.message}
            />{" "}
            <br></br>
          </div>
        ));

        setContactData(contactData);
      })
      .catch((error) => {
        window.alert(
          "ERROR: Failed to fetch the contacts list. Error = " + error
        );
      });
  });

  return (
    <>
      <Header />
      {contactData}
      <Footer />
    </>
  );
};

export default ReadContact;
