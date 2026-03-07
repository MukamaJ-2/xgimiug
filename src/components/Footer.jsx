import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="support">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">XGIMI</h2>
            <p className="footer-desc">
              Redefining home entertainment with smart, portable projectors designed to bring the cinema everywhere.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>Products</h3>
              <ul>
                <li><a href="#">MoGo 4 Pro</a></li>
                <li><a href="#">MoGo 4</a></li>
                <li><a href="#">Halo+</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>Support</h3>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Downloads</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} XGIMI. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
