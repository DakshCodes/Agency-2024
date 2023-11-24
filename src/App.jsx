import React, { useEffect, useState } from 'react'
import './App.css'
import Landing from './pages/Landing/Landing'
import Lenis from '@studio-freight/lenis'
import Footer from './components/Footer/Footer';

function App() {
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      // Check scroll position to determine when to show/hide bottom nav
      const scrolled = window.scrollY;

      if (scrolled > 100) {
        setShowBottomNav(true); // Show bottom nav when scrolled more than 200px
      } else {
        setShowBottomNav(false); // Hide bottom nav when scrolled back to top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* nav-1 */}
      <div className={`nav ${showBottomNav ? 'hide' : ''}`}>
        <div className="nav-logo">ValueX</div>
        <div className="nav-links">
          <a href="#about">About us</a>
          <a href="#talk">Contact</a>
        </div>
      </div>
      {/* nav-2 */}
      <div className={`bottom-nav ${showBottomNav ? 'active' : ''}`}>
        <div className="section-links">
          <div className="bottom-nav-link">Home</div>
          <div className="bottom-nav-link">About</div>
          <div className="bottom-nav-link">Contact</div>
        </div>
      </div>
      <Landing />
      <Footer />
    </>
  )
}

export default App
