import { useEffect, useRef } from 'react';
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
              <img src="/assets/projector_orange_accent_lifestyle_1772827669194.png" alt="XGIMI MoGo 4" />
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
                <button className="btn btn-outline">Buy Now</button>
              </div>
            </div>
          </div>

          {/* MoGo 4 Pro */}
          <div className="product-card fade-up delay-2 pro-card glass">
            <div className="pro-badge">Pro Excellence</div>
            <div className="product-image">
              <img src="/assets/projector_closeup_orange_1772827740620.png" alt="XGIMI MoGo 4 Pro" />
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
                <button className="btn btn-accent">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
