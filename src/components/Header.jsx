import { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { trackBuyNowClick } from '../utils/analytics';
import './Header.css';

const Header = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`header ${scrolled ? 'glass scanned' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">XGIMI</span>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#products">Products</a>
          <a href="#accessories">In the Box</a>
          <a href="#support">Support</a>
        </nav>

        <div className="header-actions">
          <button className="cart-btn" aria-label="Shopping Cart">
            <FiShoppingCart size={20} />
          </button>
          <a href="https://eu.xgimi.com/products/mogo-4" target="_blank" rel="noopener noreferrer" className="btn btn-accent buy-btn" onClick={() => trackBuyNowClick('header')}>Buy Now</a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
