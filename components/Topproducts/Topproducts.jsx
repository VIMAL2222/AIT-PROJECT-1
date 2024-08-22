import React from 'react';
import '../Topproducts/Topproducts.css'
import boat131Image from '../../Assets/images/products/boat255r-1.png';
import boat101Image from '../../Assets/images/products/boat255r-1.png';
import boat410Image from '../../Assets/images/products/boat255r-2.png';
import jbl200btImage from '../../Assets/images/products/jbl200bt-1.png';
import sonyXb910nImage from '../../Assets/images/products/sonyXb910n-1.png';
import jbl760ncImage from '../../Assets/images/products/jbl760nc-1.png';
import boat255rImage from '../../Assets/images/products/boat255r-1.png';
import jbl100Image from '../../Assets/images/products/jbl100-1.png';
import sony1000xm4Image from '../../Assets/images/products/sony1000xm4-1.png';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FaArrowRight } from "react-icons/fa6";


const ProductCard = ({ product }) => {
  return (
      <div className="top-product-card">
      <img src={product.image} alt={product.name} className="top-product-image" />
      {/* Directly using the Rating component */}
      <div className="top-product-rating red-rating">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={5} readOnly /> {/* Adjust the value accordingly */}
      </div>
      <div className="top-product-details">
        <h3 className="top-product-name">{product.name}</h3>
        <p className="top-product-description">{product.description}</p>
        <hr></hr>
        <div className="top-product-price">
          <span className="top-product-current-price">{product.price}</span>
          {product.originalPrice && (
            <span className="top-product-original-price">{product.originalPrice}</span>
          )}
        </div>
        <button className="top-add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};


const Topproducts = () => {
  const products = [
    {
      name: 'JBL Live 660NC',
      description: 'Wireless Over-Ear NC Headphones',
      price: '₹9,999',
      originalPrice: '₹14,999',
      image: boat131Image,
    },
    {
      name: 'boAt Rockerz 518',
      description: 'On-Ear Wireless Headphones',
      price: '₹1,299',
      originalPrice: '₹3,990',
      image: boat101Image,
    },
    {
      name: 'boAt Airdopes 131',
      description: 'Wireless In-Ear Earbuds',
      price: '₹1,099',
      originalPrice: '₹2,990',
      image: boat410Image,
    },
    {
      name: 'boAt BassHeads 110',
      description: 'In-Ear Wired Earphones',
      price: '₹449',
      originalPrice: '₹999',
      image: jbl200btImage,
    },
    {
      name: 'boAt Rockerz 410',
      description: 'Bluetooth & Wired On-Ear Headphones',
      price: '₹1,599',
      originalPrice: '₹2,990',
      image: sonyXb910nImage,
    },
    {
      name: 'JBL Live 200BT',
      description: 'In-Ear Wireless Neckbands',
      price: '₹3,699',
      originalPrice: '₹5,299',
      image: boat255rImage,
    },
    {
      name: 'Sony WH-XB910N',
      description: 'Wireless Over-Ear Headphones',
      price: '₹13,489',
      originalPrice: '₹19,990',
      image: boat255rImage,
    },
    {
      name: 'JBL Tune 760NC',
      description: 'Wireless Over-Ear NC Headphones',
      price: '₹5,999',
      originalPrice: '₹7,999',
      image: jbl760ncImage,
    },
    {
      name: 'boAt Rockerz 255',
      description: 'In-Ear Wireless Neckbands',
      price: '₹899',
      originalPrice: '₹2,990',
      image: sony1000xm4Image,
    },
   
    {
      name: 'JBL Tune 500BT',
      description: 'On-Ear Wireless Headphones',
      price: '₹3,282',
      originalPrice: '₹3,999',
      image: boat255rImage,
    },
    {
      name: 'boAt Airdopes 381',
      description: 'In-Ear Wireless Earbuds',
      price: '₹1,699',
      originalPrice: '₹4,990',
      image: boat255rImage,
    },
  
  ];

  return (
    
    <div className="top-products-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
       <div className="browse-all-products">
        <div><h3 className="browse-all-products-text">Browse All Products <FaArrowRight /></h3></div>
      </div>
    </div>
    
  );
};

export default Topproducts;