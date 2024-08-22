import React from 'react';
import { FaTruck, FaShieldAlt, FaTag, FaCreditCard, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../Ouradvantages/Ouradvantages.css'

const Ouradvantages = () => {
  return (
    <div>
      <section className="advantages">
        <h2>Our Advantages</h2>
        <div className="advantage-list">
          <div className="advantage-item">
            <FaTruck className="advantage-icon" />
            <div>
              <p>Express Delivery</p>
              <span>Ships in 24 Hours</span>
            </div>
          </div>
          <div className="advantage-item">
            <FaShieldAlt className="advantage-icon" />
            <div>
              <p>Brand Warranty</p>
              <span>100% Original products</span>
            </div>
          </div>
          <div className="advantage-item">
            <FaTag className="advantage-icon" />
            <div>
              <p>Exciting Deals</p>
              <span>On all prepaid orders</span>
            </div>
          </div>
          <div className="advantage-item">
            <FaCreditCard className="advantage-icon" />
            <div>
              <p>Secure Payments</p>
              <span>SSL / Secure certificate</span>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Ouradvantages;
