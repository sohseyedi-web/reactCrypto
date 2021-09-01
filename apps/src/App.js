import React from 'react';
import Navbar from './Components/Navbar';
import TableCoins from './Components/TableCoin';
import Home from './Components/HomePage';
import Footer from './Components/Footer';
// import './App.scss'

const App = () => {
  return (
    <>
        <Navbar />
        <Home/>
        <TableCoins/>
        <Footer/>
    </>
  );
}

export default App;
