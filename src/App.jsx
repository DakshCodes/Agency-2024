import React, { useEffect, useState } from 'react'
import './App.css'
import Landing from './pages/Landing/Landing'
import Lenis from '@studio-freight/lenis'
import Footer from './components/Footer/Footer';
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About/About';
import PricingPage from './pages/Pricing/PricingPage';
import Contact from './pages/Contact/Contact';

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
        <Link to={'/'}>
          <div className="nav-logo">ValueX</div>
        </Link>
        <div className="nav-links">
          <Link to={"/about"}>About us</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
      {/* nav-2 */}
      <div className={`bottom-nav ${showBottomNav ? 'active' : ''}`}>
        <div className="section-links">
          <Link className="bottom-nav-link" to={'/'}><div>Home</div></Link>
          <Link className="bottom-nav-link" to={'/about'}><div>About</div></Link>
          <Link className="bottom-nav-link" to={'/pricing'}><div>Pricing</div></Link>
          <Link className="bottom-nav-link" to={'/contact'}><div>Contact</div></Link>
        </div>
      </div>

      <Routes>

        <Route path='/' element={<Landing />} />

        <Route path='/about' element={<About />} />

        <Route path='/pricing' element={<PricingPage />} />

        <Route path='/contact' element={<Contact />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
