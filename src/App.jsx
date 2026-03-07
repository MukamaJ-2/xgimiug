import { useState, useEffect } from 'react';
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
