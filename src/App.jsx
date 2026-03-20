import { useState, useEffect } from 'react';
import { trackScrollDepth } from './utils/analytics';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Products from './components/Products';
import Accessories from './components/Accessories';
import Newsletter from './components/Newsletter';
import PlatformRating from './components/PlatformRating';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll depth tracking (25%, 50%, 75%, 100%)
  useEffect(() => {
    const depths = [25, 50, 75, 100];
    const fired = new Set();

    const handleScrollDepth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      depths.forEach((d) => {
        if (scrollPercent >= d && !fired.has(d)) {
          fired.add(d);
          trackScrollDepth(d);
        }
      });
    };

    window.addEventListener('scroll', handleScrollDepth, { passive: true });
    handleScrollDepth(); // Check on load (e.g. short page)
    return () => window.removeEventListener('scroll', handleScrollDepth);
  }, []);

  return (
    <div className="app-container">
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <Features />
        <Accessories />
        <Products />
        <PlatformRating />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
