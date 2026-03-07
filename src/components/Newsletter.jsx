import { useEffect, useRef, useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

    const el = sectionRef.current.querySelector('.fade-up');
    if (el) observer.observe(el);
    
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="section newsletter-section" ref={sectionRef}>
      <div className="container">
        <div id="mc_embed_signup" className="newsletter-box glass fade-up">
          <div className="newsletter-content">
            <h2 className="h2">Join the <span className="text-gradient">Community</span></h2>
            <p className="newsletter-desc">
              Subscribe to the exclusive XGIMI marketing list. Get the latest tips, tricks, and offers for your portable cinema straight to your inbox.
            </p>
          </div>
          
          <div className="newsletter-form-container">
            {subscribed ? (
              <div className="success-message">
                <span className="check-circle">✓</span>
                <p>Thanks for subscribing! Check your inbox to confirm.</p>
              </div>
            ) : (
              <form 
                action="https://xgimi.us1.list-manage.com/subscribe/post" 
                method="POST" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="newsletter-form validate" 
                target="_blank" 
                onSubmit={handleSubmit}
                noValidate
              >
                <div id="mc_embed_signup_scroll" className="form-group">
                  <input 
                    type="email" 
                    name="EMAIL"
                    className="email"
                    id="mce-EMAIL"
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_xgimi_marketing" tabIndex="-1" value="" readOnly />
                  </div>
                  <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="btn btn-accent button">Subscribe</button>
                </div>
              </form>
            )}
            <p className="privacy-note">No spam. Unsubscribe anytime. View <a href="#privacy">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
