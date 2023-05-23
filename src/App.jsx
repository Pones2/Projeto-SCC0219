import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import Login from './Pages/Login/Login';

const App = () => {
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
      <Route path="/criarconta" element = {
        <>
          <CreateAccount />
        </>
      }/>
      <Route path="/login" element = {
        <>
          <Login />
        </>
      }/>
    </Routes>
    </>
  );
}

export default App;