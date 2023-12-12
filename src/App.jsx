import React, { useEffect, useState } from 'react'
import './App.css'
import Landing from './pages/Landing/Landing'
import Lenis from '@studio-freight/lenis'
import Footer from './components/Footer/Footer';
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About/About';
import PricingPage from './pages/Pricing/PricingPage';
import Contact from './pages/Contact/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    let lastScrollTop = 0;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      // Check scroll position to determine when to show/hide bottom nav
      const currentScrollTop = window.scrollY;


      if (currentScrollTop > lastScrollTop || currentScrollTop < 100) {
        setShowBottomNav(false); // Hide bottom nav on scroll down
      } else {
        setShowBottomNav(true); // Show bottom nav on scroll up
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);



    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


return (
  <>
    <Toaster/>
    {/* nav-1 */}
    <div className={`nav`}>
      <Link to={'/'}>
        <div className="nav-logo">
          <img src='https://res.cloudinary.com/dylnk52kz/image/upload/v1702389289/vxl-typog-lightmode_loagw8.png' className="" />
        </div>
      </Link>
      <div className="nav-links">
        <Link to={"/about"}>About us</Link>
        <Link to={"/pricing"}>Pricing</Link>
        <Link to={"/"}>Portfolios</Link>
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
