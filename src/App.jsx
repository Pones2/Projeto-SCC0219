import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Dropdown from './Components/Dropdown/Dropdown';

const App = () => {
  //const message = 'Hello World';
  const [message, setMessage] = React.useState('Hello World');

  return (
  <>
    <Header />
    <Dropdown>
      <Button> oi </Button> <br></br>
      <Button> oi </Button> <br></br>
      <Button> oi </Button> <br></br>
    </Dropdown>
    <div className='container'>
      {message}
    </div>
    <Button onClick = {() => setMessage("oi")}> oi </Button>
    <Footer />
  </>
  );
}

export default App;