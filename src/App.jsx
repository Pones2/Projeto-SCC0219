import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';


import Button from './Components/Button/Button';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  //const message = 'Hello World';
  const [message, setMessage] = React.useState('Hello World');

  return (
    <>
    <Routes>
      <Route path="/" exact element = {
        <>
          <Header />
          <div className='container'>
            {message}
          </div>

          <Button onClick = {() => setMessage("oi")}> oi </Button>
          <Footer />
        </>
      }></Route>

      <Route path="/about" element = {
        <>
        <Header />
        <div className='container'>
          {message}
        </div>

        <Button onClick = {() => setMessage("oi")}> oi mane </Button>
        <Footer />
      </>
      }/>
    </Routes>
    </>
  );
}

export default App;