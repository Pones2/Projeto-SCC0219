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
import Payment from './Pages/Paying/Paying';
import Confirmation from './Pages/Confirmation/Confirmation';
import NotFound from './Pages/NotFound/NotFound';
import Account from './Pages/Account/Account';
import EditAccount from './Pages/EditAccount/EditAccount';
import AddProduct from './Pages/AddProduct/AddProduct';

const App = () => {
  // global variables
  const [login, setLogin] = React.useState("unlogged");
  const [cart, setCart] = React.useState([]);
  const [loggedUser, setLoggedUser] = React.useState({});

  // global state
  const GlobalState = {
    login, setLogin,
    cart, setCart,
    loggedUser, setLoggedUser
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
          <CreateAccount GlobalState={GlobalState}/>
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
      <Route path="/pagamento" element = {
        <>
          <Payment GlobalState={GlobalState}/>
        </>
      }/>
      <Route path="/confirmacao" element = {
        <>
          <Confirmation/>
        </>
      }/>
      <Route path="/conta" element = {
        <>
          <Account GlobalState={GlobalState}/>
        </>
      }/>
      <Route path="/conta" element = {
        <>
          <Account GlobalState={GlobalState}/>
        </>
      }/>
      <Route path="/editarconta" element = {
        <>
          <EditAccount GlobalState={GlobalState}/>
        </>
      }/>
      <Route path="/adicionarproduto" element = {
        <>
          <AddProduct GlobalState={GlobalState}/>
        </>
      }/>
      <Route path="*" element = {
        <>
          <NotFound/>
        </>
      }/>
    </Routes>
    </>
  );
}

export default App;