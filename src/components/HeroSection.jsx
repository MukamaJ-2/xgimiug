import { useState, useEffect } from 'react';
import './HeroSection.css';

const heroImages = [
  '/assets/friends_watching_projector_1772828791935.png',
  '/assets/projector_pinterest_lifestyle_1772826369175.png',
  '/assets/projector_lifestyle_sunset_1772825568228.png',
  '/assets/projector_camping_tent_lifestyle_1772893328237.png'
];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="overview" className="hero">
      {heroImages.map((img, index) => (
        <div 
          key={index}
          className={`hero-background ${index === currentBg ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <div className="gradient-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text animate-up">
          <p className="hero-badge">2025 New Arrival</p>
          <h1 className="h1">
            XGIMI MoGo 4 <br />
            <span className="text-gradient">Limitless Play.</span>
          </h1>
          <p className="hero-subtitle delay-1">
            Google TV 1080p Portable Projector with Battery. 
            Experience jaw-dropping visuals with exceptional brightness up to 120''.
          </p>
          
          <div className="hero-features delay-2">
            <div className="feature-item">
              <span className="feature-value">550</span>
              <span className="feature-label">ISO Lumens</span>
            </div>
            <div className="feature-item">
              <span className="feature-value">1080p</span>
              <span className="feature-label">Resolution</span>
            </div>
            <div className="feature-item">
              <span className="feature-value">5H</span>
              <span className="feature-label">Movie Time</span>
            </div>
          </div>

          <div className="hero-actions delay-3">
            <a href="https://eu.xgimi.com/products/mogo-4" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-large">Buy Now - $499</a>
            <button className="btn btn-outline btn-large">Watch Video</button>
          </div>

          <div className="visitor-rating delay-3">
            <div className="stars">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="star">{star}</span>
              ))}
            </div>
            <div className="rating-text">
              <span className="rating-score">4.9/5</span>
              <span className="visitor-count">Join 1.2M+ Satisfied Global Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
