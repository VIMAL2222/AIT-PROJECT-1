import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Featuredproducts from './components/Featuredproducts/Featuredproducts'
import Topproducts from './components/Topproducts/Topproducts'
import App from '../src/App.css'; 


function Appi () {
  return (
    
    <boby className="body">
        <Header/>
        <Navbar/>
        <Featuredproducts/>
        <Topproducts/>
    </boby>
  );
}

export default Appi
