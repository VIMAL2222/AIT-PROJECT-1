import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div>
       <footer className="footer">
        <div className="footer-section">
          <h3>Tech-Shop</h3>
          <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
          <input type="email" placeholder="Email Address*" />
          <button>Subscribe</button>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>FAQs</li>
            <li>Track Order</li>
            <li>Cancel Order</li>
            <li>Return Order</li>
            <li>Warranty Info</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li>Return Policy</li>
            <li>Security</li>
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Service Centres</li>
            <li>Careers</li>
            <li>Affiliates</li>
          </ul>
        </div>
      </footer>
      <hr className='oahr'></hr>
      <div className="footer-bottom">
        <p>2023 | All Rights Reserved. Built by | VIMAL KUMAR</p>
        <div className="social-links">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  )
}

export default Footer
