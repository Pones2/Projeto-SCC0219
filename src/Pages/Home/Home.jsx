import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

import Products from '../../Data/Products';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';

const Home = () => {
    //test variable, remove later
    const [message, setMessage] = React.useState('Hello World');
    
    const navigate = useNavigate();


    // array of all the products
    const productList = Products().map((element) => (
      <ProductDisplay
          imgSrc={element.imgSrc}
          name={element.name}
          description={element.description}
          price={element.price}
      />
  ));

    return (
        <>
          <Header />
          <div className='container'>
            {message}
          </div>

          <ProductDisplay imgSrc={Products()[0].imgSrc} name={Products()[0].name} description={Products()[0].description} price={Products()[0].price} />
          {productList}

          <Button onClick = {() => navigate("/contato")}> oi </Button>
          <Footer />
        </>
    );
}

export default Home;