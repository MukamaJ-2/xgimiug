import { useEffect, useRef, useState } from 'react';
import { FiBatteryCharging, FiVideo, FiMaximize, FiMusic } from 'react-icons/fi';
import './Features.css';

const featuresList = [
  {
    icon: <FiMaximize size={32} />,
    title: '550 ISO Lumens',
    description: "Experience jaw-dropping visuals with exceptional brightness on the MoGo with an up to 120'' massive screen.",
    bg: '/assets/feature_lumens_bg_1772896660648.png'
  },
  {
    icon: <FiBatteryCharging size={32} />,
    title: '71Wh Built-in Battery',
    description: 'Up to 2.5h of video playtime. Attach the PowerBase Stand for up to 5H, or connect a 65W Power Bank.',
    bg: '/assets/feature_battery_bg_1772896677772.png'
  },
  {
    icon: <FiMusic size={32} />,
    title: '110% BT.2020 & 1000:1 Contrast',
    description: 'Breathtaking cinematic colors and deep blacks that bring your favorite movies and shows to life.',
    bg: '/assets/feature_contrast_bg_1772896694749.png'
  },
  {
    icon: <FiVideo size={32} />,
    title: 'Google TV Built-in',
    description: 'Stream the latest hits across 10,000+ apps. Licensed Netflix and 800+ free channels with zero setup required.',
    bg: '/assets/feature_googletv_bg_1772896745532.png'
  }
];

const showcases = [
  {
    title: 'Cinematic Brilliance',
    desc: 'Experience jaw-dropping visuals with 550 ISO Lumens, 110% BT.2020 Color Gamut, and 1000:1 Native Contrast.',
    img: '/assets/projector_vibrant_canyon_1772828808817.png',
    alt: 'Vibrant Canyon Projection'
  },
  {
    title: 'Limitless Play Outdoors',
    desc: 'Take big-screen entertainment anywhere with up to 2.5 hours of playtime—perfect for unforgettable camping trips under the stars.',
    img: '/assets/projector_camping_tent_lifestyle_1772893328237.png',
    alt: 'Camping Movie Night'
  },
  {
    title: 'Your Favorites, Built-in',
    desc: 'Bring the blockbusters to your bedroom with Google TV and Netflix built-into your projector. No installation, no hassle. Just point at the ceiling and tune in.',
    img: '/assets/projector_ceiling_bedroom_lifestyle_1772893344611.png',
    alt: 'Bedroom Ceiling Projection'
  },
  {
    title: 'Power Anywhere',
    desc: '71Wh built-in battery. Attach the PowerBase Stand for up to 5H movie time, or connect a 65W Power Bank to increase your charge anywhere.',
    img: '/assets/projector_powerbank_outdoor_1772828823991.png',
    alt: 'Power Bank outdoor setup'
  },
  {
    title: 'Click, Click, BOOM',
    desc: 'Transforming your space has never been simpler. Just snap the Magnetic Creative Filter onto the lens, and vibe out.',
    img: '/assets/mogo4_magnetic_filter.webp',
    alt: 'MoGo 4 Magnetic Filter'
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcases.length);
    }, 6000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section id="features" className="section features" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="h2 text-gradient">Redefine Portable</h2>
          <p className="subtitle">Compact size. Limitless possibilities.</p>
        </div>

        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card glass fade-up`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${feature.bg})` }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="h3 feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="video-showcase fade-up" style={{ marginTop: '4rem', marginBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 className="h2">See the MoGo 4 in <span className="text-gradient">Action</span></h2>
            <p className="subtitle">Real-world usage, breathtaking experiences.</p>
          </div>
          <div className="video-wrapper">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="action-video"
              poster="/assets/friends_watching_projector_1772828791935.png"
            >
              {/* Fallback to online video to demonstrate functionality */}
              <source src="https://videos.pexels.com/video-files/3205799/3205799-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
          </div>
        </div>

        <div className="slideshow-container fade-up" style={{ transitionDelay: '0.2s', marginTop: '2rem' }}>
          {showcases.map((showcase, index) => (
            <div 
              key={index} 
              className={`feature-showcase slide ${index === currentSlide ? 'active' : ''} ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="showcase-content">
                <h2 className="h2" dangerouslySetInnerHTML={{ __html: showcase.title.replace('Brilliance', '<span class="text-gradient">Brilliance</span>').replace('Anywhere', '<span class="text-gradient">Anywhere</span>').replace('BOOM', '<span class="text-gradient">BOOM</span>') }}></h2>
                <p className="showcase-desc">
                  {showcase.desc}
                </p>
                {index === 2 && <button className="btn btn-outline" style={{ marginTop: '2rem' }}>Learn More</button>}
              </div>
              <div className="showcase-image">
                 <div className="image-wrapper">
                   <img src={showcase.img} alt={showcase.alt} />
                 </div>
              </div>
            </div>
          ))}
          
          <div className="slideshow-controls">
            {showcases.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
