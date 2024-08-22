import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Featuredproducts from './components/Featuredproducts/Featuredproducts'
import Topproducts from './components/Topproducts/Topproducts'
import Ouradvantages from './components/Ouradvantages/Ouradvantages'
import Footer from './components/Footer/Footer'
import App from '../src/App.css'; 

function Appi() {
  return (
    <body className="body">
      <Header />
      <Navbar />
      <Featuredproducts />
      <Topproducts />
      <Ouradvantages />
      <Footer />
    </body>
  );
}

export default Appi;