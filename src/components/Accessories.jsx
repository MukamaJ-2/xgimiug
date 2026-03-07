import { useEffect, useRef } from 'react';
import './Accessories.css';

const Accessories = () => {
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
    <section id="accessories" className="section accessories" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="h2 text-gradient">Ready For Anywhere</h2>
          <p className="subtitle">Everything you need, beautifully packed and ready to go.</p>
        </div>

        <div className="accessories-content">
          <div className="accessory-showcase fade-up delay-1">
            <div className="image-wrapper glass">
              <img src="/assets/projector_accessories_setup_1772827682339.png" alt="MoGo 4 full ecosystem setup" />
              <div className="overlay-text">
                <h3>The Complete Ecosystem</h3>
                <p>From the minimalist tripod stand to the sleek portable screen and carrying case, every detail is considered.</p>
              </div>
            </div>
          </div>

          <div className="accessory-details fade-up delay-2">
            <div className="glass details-card">
              <h3 className="h3">In The Box</h3>
              <p className="details-desc">Minimalist design meets maximum functionality. Your MoGo comes with essential premium accessories.</p>
              
              <ul className="box-items">
                <li>
                  <div className="item-details">
                    <span className="item-name">MoGo Series Projector</span>
                    <span className="item-desc">Your portable cinema.</span>
                  </div>
                </li>
                <li>
                  <div className="item-details">
                    <span className="item-name">Bluetooth Remote</span>
                    <span className="item-desc">Sleek, intuitive control with Google Assistant.</span>
                  </div>
                </li>
                <li>
                  <div className="item-details">
                    <span className="item-name">Power Adapter</span>
                    <span className="item-desc">Compact fast-charging adapter.</span>
                  </div>
                </li>
                <li>
                  <div className="item-details">
                    <span className="item-name">Quick Start Guide</span>
                    <span className="item-desc">Get set up in minutes.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="image-wrapper small-image glass">
              <img src="/assets/projector_accessories_1772826398152.png" alt="MoGo 4 Accessories" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
