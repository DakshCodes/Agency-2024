import React, { useEffect, useState } from 'react'
import './App.css'
import Landing from './pages/Landing/Landing'
import Lenis from '@studio-freight/lenis'
import Footer from './components/Footer/Footer';
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About/About';

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
          <div className="bottom-nav-link"><Link to={'/'}>Home</Link></div>
          <div className="bottom-nav-link"><Link to={'/about'}>About</Link></div>
          <div className="bottom-nav-link"><Link to={'/contact'}>Contact</Link></div>
        </div>
      </div>

      <Routes>

        <Route path='/' element={<Landing />} />

        <Route path='/about' element={<About />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
