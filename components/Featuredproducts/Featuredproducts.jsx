import React, { useState } from 'react';
import './CustomFeaturedProducts.css';
import boat255rImage from '../../Assets/images/products/boat255r-1.png';
import jblenduImage from '../../Assets/images/products/jbl-endu-1.png';
import boat203Image from '../../Assets/images/products/boat203-1.png';
import jbl760ncImage from '../../Assets/images/products/jbl760nc-1.png';
import boat518Image from '../../Assets/images/products/boat518-1.png';

const ProductData = [
  {
    title: 'boAt Rockerz 518',
    price: '₹1,299',
    mrp: '₹3,990',
    imageUrl: boat518Image,
  },
  {
    title: 'JBL Tune 760NC',
    price: '₹5,999',
    mrp: '₹7,999',
    imageUrl: jbl760ncImage,
  },
  {
    title: 'boAt Rockerz 255',
    price: '₹899',
    mrp: '₹2,990',
    imageUrl: boat255rImage,
  },
  {
    title: 'JBL Endurance Run Sports',
    price: '₹999',
    mrp: '₹1,599',
    imageUrl: jblenduImage,
  },
  {
    title: 'boAt Airdopes',
    price: '₹1,074',
    mrp: '₹3,999',
    imageUrl: boat203Image,
  },
];

const CustomFeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="custom-featured-products">
      <h2 className="custom-featured-products-title">Featured Products</h2>
      <div className="custom-carousel-container">
        {ProductData.map((product, index) => (
          <div
            key={index}
            className={`custom-carousel-item ${index === activeIndex ? 'custom-active' : ''}`}
            onClick={() => handleDotClick(index)}
          >
            <img src={product.imageUrl} alt={product.title} className="custom-carousel-image" />
            <div className="custom-product-details">
              <h3 className="custom-product-title">{product.title}</h3>
              <p className="custom-price">{product.price}</p>
              {product.mrp && <p className="custom-mrp">{product.mrp}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="custom-dots">
        {ProductData.map((_, index) => (
          <div
            key={index}
            className={`custom-dot ${index === activeIndex ? 'custom-dot-active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomFeaturedProducts;
