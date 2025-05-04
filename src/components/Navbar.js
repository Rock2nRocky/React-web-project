import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'; // Import Cart Context
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useContext(CartContext); // Access total items in the cart
  const totalItems = getTotalItems(); // Calculate the total count

  return (
    <nav className="navbar">
      {/* Logo with Title */}
      <h1 className="navbar-title">
        <span className="title-primary">FLY HIGH</span>
        <span className="title-secondary">Men's Spot</span>
      </h1>

      {/* Desktop Menu */}
      <div className="navbar-menu">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>
          Shop
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
        <Link to="/cart" className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}>
          Cart
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          Cart
        </Link>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? 'show' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
