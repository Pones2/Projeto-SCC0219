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
          <div className='container'>
            {message}
          </div>
          <Button onClick = {() => navigate("/contato")}> oi </Button>
          <Footer />
        </>
    );
}

export default Home;