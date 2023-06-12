import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

// NOTE: the home page is a placeholder, it will be replaced later

const Home = () => {
    //test variable, remove later
    const [message, setMessage] = React.useState('Hellao World');
    
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div id="homePage">
            <div id="homeBanner">
              <a onClick={() => navigate("/produtos")}><img src={require('../../Assets/20230602_orgulho_1900x300_2_9863f3e22b.webp')} id="bannerImg"></img></a>
            </div>

            <div id="homeButtons">
              <Button onClick = {() => navigate("/produtos")}>Produtos</Button>
              <Button onClick = {() => navigate("/contato")}>Contato</Button>
              <Button onClick = {() => navigate("/login")}>Login</Button>  
              <Button onClick = {() => navigate("/conta")}>Conta</Button>
            </div>

            <div id="homeContent">
              <p>Bem-vindo ao nosso pet shop online! Aqui, você encontrará tudo o que precisa para cuidar e mimar seu amado animal de estimação. Nossa ampla seleção de produtos de alta qualidade inclui alimentos saudáveis, brinquedos divertidos, acessórios elegantes e muito mais. Com a comodidade de fazer suas compras de casa, entregamos diretamente à sua porta, proporcionando praticidade e conforto. Conte com nossa equipe dedicada e experiente, pronta para auxiliá-lo e garantir a satisfação tanto do seu pet quanto de você. Venha explorar o mundo dos cuidados e do amor aos animais no nosso pet shop online!</p>
              <img src={require('../../Assets/bgLogCad.png')}></img>
            </div>
          </div>
          <Footer />
        </>
    );
}

export default Home;