import { useEffect, useRef } from 'react';
import { trackBuyNowClick } from '../utils/analytics';
import './Products.css';

const Products = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="products" className="section products" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="h2 text-gradient">Choose Your MoGo</h2>
          <p className="subtitle">Discover the perfect portable projector for your lifestyle.</p>
        </div>

        <div className="products-grid">
          {/* MoGo 4 */}
          <div className="product-card fade-up delay-1 glass">
            <div className="product-image">
              <img src="/assets/xgimi-mogo-4-20250612-09.jpg" alt="XGIMI MoGo 4" />
            </div>
            <div className="product-info">
              <h3>MoGo 4</h3>
              <p className="product-desc">The essential 1080p portable projector. Compact, sleek, and perfect for cozy movie nights anywhere.</p>
              <ul className="product-features">
                <li>1080p Resolution</li>
                <li>450 ISO Lumens</li>
                <li>Up to 2.5h Battery Life</li>
                <li>Dual 6W Harman/Kardon Speakers</li>
              </ul>
              <div className="product-action">
                <span className="price">$499</span>
                <a href="https://eu.xgimi.com/products/mogo-4" target="_blank" rel="noopener noreferrer" className="btn btn-outline" onClick={() => trackBuyNowClick('products_mogo4')}>Buy Now</a>
              </div>
            </div>
          </div>

          {/* MoGo 4 Pro */}
          <div className="product-card fade-up delay-2 pro-card glass">
            <div className="pro-badge">Pro Excellence</div>
            <div className="product-image">
              <img src="/assets/mogo4_movies_streaming.jpg" alt="XGIMI MoGo 4 Pro" />
            </div>
            <div className="product-info">
              <h3>MoGo 4 Pro</h3>
              <p className="product-desc">Elevated brightness and a premium advanced stand for those who demand the ultimate portable cinema experience.</p>
              <ul className="product-features">
                <li>1080p Resolution</li>
                <li>500 ISO Lumens</li>
                <li>Up to 2.5h Battery Life</li>
                <li>Advanced Integrated Stand</li>
              </ul>
              <div className="product-action">
                <span className="price">$599</span>
                <a href="https://eu.xgimi.com/products/mogo-4-pro" target="_blank" rel="noopener noreferrer" className="btn btn-accent" onClick={() => trackBuyNowClick('products_mogo4_pro')}>Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
