import React, { useEffect, useState } from 'react';
import './Header.css'; // Ensure you link to your CSS file
import sonyXb910Image from '../../Assets/images/products/sonyXb910n-1.png';
import boat131Image from '../../Assets/images/products/boat131-3.png';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: sonyXb910Image, text1: 'Over Ear', text2: 'Sony WH-XB910N', desc: 'Give Your Favourite Music A Boost.', price: '₹13,489', originalPrice: '₹19,990' },
    { img: boat131Image, text1: 'In Ear', text2: 'Boat Airdopes 131', desc: 'Featherweight For Comfort All-Day', price: '₹1,099', originalPrice: '₹2,990' }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="header">
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'show' : ''}`}
          >
            <div className="header-content">
              <h1 className="over-ear-text">{slide.text1}</h1>
              <h2 className="product-name">{slide.text2}</h2>
              <p className="product-description">{slide.desc}</p>
              <div className="pricing">
                <span className="current-price">{slide.price}</span>
                <span className="original-price">{slide.originalPrice}</span>
              </div>
              <button className="shop-now">Shop Now</button>
            </div>
            <div className="header-image">
              <img src={slide.img} alt={slide.text2} />
            </div>
          </div>
        ))}
        <div className="dots-container">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
