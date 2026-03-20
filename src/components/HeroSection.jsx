import { useState, useEffect } from 'react';
import { trackBuyNowClick, trackWatchVideoClick } from '../utils/analytics';
import './HeroSection.css';

const heroImages = [
  '/assets/xgimi-mogo-4-20250612-09.jpg',
  '/assets/mogo4_official.webp',
  '/assets/mogo4_laser_official.webp',
  '/assets/d527292c5d5997aee493071f1d5f16ed69cd2f2a_WK08K_prod_01-high.jpeg',
  '/assets/Magnetic_Filter.webp',
  '/assets/mogo4_outdoor_adventure.jpg',
  '/assets/xgimi4.webp',
  '/assets/Xgimi-Vibe-One-projector.jpg',
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
          <p className="hero-badge">2026 New Arrival</p>
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
            <a href="https://eu.xgimi.com/products/mogo-4" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-large" onClick={() => trackBuyNowClick('hero')}>Buy Now - $499</a>
            <button className="btn btn-outline btn-large" onClick={() => trackWatchVideoClick()}>Watch Video</button>
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
