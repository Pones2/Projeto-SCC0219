import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import Login from './Pages/Login/Login';
import ProductsPageWrapper from './Pages/Products/Products';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';

const App = () => {
  // global variables
  const [login, setLogin] = React.useState("unlogged");
  const [cart, setCart] = React.useState([]);

  // global state
  const GlobalState = {
    login, setLogin,
    cart, setCart
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
          <SingleProduct GlobalState={GlobalState}/>
        </>
      }/>
      <Route path="/carrinho" element = {
        <>
          <ShoppingCart GlobalState={GlobalState}/>
        </>
      }/>
    </Routes>
    </>
  );
}

export default App;