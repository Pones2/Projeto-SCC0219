import React from 'react';
import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';

import Button from './Components/Button/Button';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  //const message = 'Hello World';
  const [message, setMessage] = React.useState('Hello World');
  const navigate = useNavigate();

  return (
    <>
    <Routes>
      <Route path="/" exact element = {
        <>
          <Home />
        </>
      }></Route>

      <Route path="/contato" element = {
        <>
          <Contact />
      </>
      }/>
    </Routes>
    </>
  );
}

export default App;