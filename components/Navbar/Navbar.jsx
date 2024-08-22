import React, { useState } from 'react';
import './Navbar.css';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import Modal from 'react-bootstrap/Modal';
import LoginForm from "../Navbar/LoginForm";
import productsData from '../../productsData'; // Import the product data

function Navbar() {
  const [showAccount, setShowAccount] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(false); // State to toggle search bar visibility

  const handleLoginClick = () => {
    setShowAccount(false); // Hide the account modal
    setShowLoginForm(true); // Show the login form modal
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setShowAccount(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      if (!document.querySelector('.account-modal-wrapper:hover')) {
        setShowAccount(false);
      }
    }, 10000);
    setTimeoutId(id); // Store the timeout ID to clear if needed
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = productsData.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch); // Toggle the search bar visibility
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="./">Tech-shop</a>
            <span className='nav-right'>
              <ul className='nav-list'>
                <li className='nav-item'>
                  <IoMdSearch className='nav-icon' onClick={handleSearchIconClick} />
                  {/* Search Input */}
                  {showSearch && (
                    <input
                      type="text"
                      placeholder="Search for products..."
                      value={searchTerm}
                      onChange={handleSearch} className='IoMDSearch-input'
                      style={{ padding: '10px', width: '300px', marginLeft: '10px' }}
                    />
                  )}
                  {/* Search Results Dropdown */}
                  {showSearch && filteredProducts.length > 0 && (
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '10px', backgroundColor: '#fff', position: 'absolute', zIndex: 1000, width: '300px', border: '1px solid #ccc' }}>
                      {filteredProducts.map(product => (
                        <li key={product.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                          <img src={product.images[0]} alt={product.title} style={{ width: '50px', marginRight: '10px' }} />
                          {product.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className='nav-item'>
                  <FaCartShopping className='nav-icon' />
                </li>
                <li
                  className='nav-item'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <RiAccountCircleFill className='nav-icon' />
                </li>
              </ul>
            </span>
          </div>
        </nav>
      </div>

      {/* Account Modal Wrapper */}
      {showAccount && (
        <div
          className="account-modal-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Modal
            show={showAccount}
            onHide={() => setShowAccount(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            className="account-modal"
            backdrop={false} // Allow background interaction
          >
            <Modal.Header closeButton className="account-modal-header">
              <Modal.Title id="example-custom-modal-styling-title" className="account-modal-title">
                Hello!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="account-modal-body">
              <p>Access account and manage orders</p>
              <button className="btn" onClick={handleLoginClick}>Login / Signup</button>
              <ul>
                <li>Orders</li>
                <li>Wishlist</li>
                <li>Gift Cards</li>
                <li>Saved Cards</li>
                <li>Saved Addresses</li>
              </ul>
            </Modal.Body>
          </Modal>
        </div>
      )}

      {/* Login Form Modal */}
      <Modal
        show={showLoginForm}
        onHide={handleCloseLoginForm}
        dialogClassName="modal-50w"
        aria-labelledby="login-form-modal-title"
        className="login-form-modal"
        backdrop={false} // Allow background interaction
      >
        <Modal.Header closeButton className="login-form-modal-header">
          <Modal.Title id="login-form-modal-title" className="login-form-modal-title">
            Login / Signup
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="login-form-modal-body">
          <LoginForm onClose={handleCloseLoginForm} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
