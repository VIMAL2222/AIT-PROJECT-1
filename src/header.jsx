import React from 'react';
import './Header.css'; // Link to the corresponding CSS file

function Header() {
    return (
        <header className="header">
            <img src="/logo.png" alt="TechShop Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
