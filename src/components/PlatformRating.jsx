import { useState, useRef, useEffect } from 'react';
import { FiStar, FiMail, FiSend } from 'react-icons/fi';
import './PlatformRating.css';

const PlatformRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [hasRated, setHasRated] = useState(false);
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

    const el = sectionRef.current?.querySelector('.fade-up');
    if (el) observer.observe(el);
    
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const handleRate = (index) => {
    setRating(index);
    setHasRated(true);
  };

  return (
    <section className="section rating-section" ref={sectionRef}>
      <div className="container">
        <div className="rating-container glass fade-up">
          <div className="rating-content">
            <h2 className="h2">Rate Our <span className="text-gradient">Platform</span></h2>
            <p className="rating-desc">
              How was your experience navigating the MoGo 4 landing page today? We'd love to hear your feedback.
            </p>
            
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={`star-btn ${ratingValue <= (hover || rating) ? 'active' : ''}`}
                    onClick={() => handleRate(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <FiStar size={32} className="star-icon" fill={ratingValue <= (hover || rating) ? "currentColor" : "none"} />
                  </button>
                );
              })}
            </div>
            {hasRated && <p className="success-text">Thank you for rating us {rating} out of 5 stars!</p>}
          </div>

          <div className="contact-divider"></div>

          <div className="contact-content">
            <div className="contact-header">
              <FiMail size={24} className="accent-icon" />
              <h3>Email Us Directly</h3>
            </div>
            <p className="rating-desc mb-4">
              Have specific questions or business inquiries? Send us an email directly, and our team will get back to you.
            </p>

            <form 
              action="mailto:mukamajoseph010@gmail.com" 
              method="POST" 
              enctype="text/plain"
              className="direct-email-form"
            >
              <div className="form-group-col">
                <input 
                  type="text" 
                  name="Name" 
                  placeholder="Your Name" 
                  required 
                  className="contact-input"
                />
              </div>
              <div className="form-group-col">
                <textarea 
                  name="Message" 
                  placeholder="How can we help you?" 
                  rows="4" 
                  required 
                  className="contact-input contact-textarea"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-accent btn-full">
                <FiSend size={18} /> Send via Email Client
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformRating;
