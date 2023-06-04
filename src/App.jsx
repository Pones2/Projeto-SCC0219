import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import Login from './Pages/Login/Login';
import ProductsPageWrapper from './Pages/Products/Products';
import SingleProduct from './Pages/SingleProduct/SingleProduct';

const App = () => {
  const [login, setLogin] = React.useState("unlogged");

  const GlobalState = {
    login, setLogin
  }

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
          <Login GlobalState={GlobalState}/>
        </>
      }/>
      <Route path="/produtos" element = {
        <>
          <ProductsPageWrapper />
        </>
      }/>
      <Route path="/produtos/:id" element = {
        <>
          <SingleProduct />
        </>
      }/>
    </Routes>
    </>
  );
}

export default App;