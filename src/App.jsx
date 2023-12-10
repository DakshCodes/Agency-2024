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
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

    // Set the launch date (in milliseconds)
    const launchDate = new Date('2023-12-12T20:00:00+05:30').getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);


return (
  <>
    <main className='bg-[#0b0b0b] text-white md:h-screen h-fit'>
      <section className='mx-auto max-w-[540px] p-4'>
        <div className='border border-[#202020] rounded-xl moment text-center p-6 mt-16'>
          <p className='text-xl lg:text-3xl'>ValueXLabs</p>
          <p className='text-xl mt-6 michroma'>Launching on <span className='border-b-2 border-[#d4ff3f]'>12 December 2023</span></p>
          <p className='michroma mt-4 font-semibold'>At 8 PM</p>
          
          <h1 className='mt-10 text-xl'>Countdown</h1>

          <div className='flex my-8 gap-4 flex-wrap items-center justify-evenly p-4'>
            <div className='flex flex-col items-center gap-2'>
              <div className=' h-[4rem] w-[4rem] bg-[#202020] rounded-md flex items-center justify-center'>0{countdown.days}</div>
              <div className='michroma text-xs'>Days</div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className=' h-[4rem] w-[4rem] bg-[#202020] rounded-md flex items-center justify-center'>0{countdown.hours}</div>
              <div className='michroma text-xs'>Hours</div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className=' h-[4rem] w-[4rem] bg-[#202020] rounded-md flex items-center justify-center'>0{countdown.minutes}</div>
              <div className='michroma text-xs'>Minutes</div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className=' h-[4rem] w-[4rem] bg-[#202020] rounded-md flex items-center justify-center'>{countdown.seconds}</div>
              <div className='michroma text-xs'>Seconds</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  // <>
  //   <Toaster/>
  //   {/* nav-1 */}
  //   <div className={`nav`}>
  //     <Link to={'/'}>
  //       <div className="nav-logo">ValueX</div>
  //     </Link>
  //     <div className="nav-links">
  //       <Link to={"/about"}>About us</Link>
  //       <Link to={"/pricing"}>Pricing</Link>
  //       <Link to={"/"}>Portfolios</Link>
  //       <Link to={"/contact"}>Contact</Link>
  //     </div>
  //   </div>
  //   {/* nav-2 */}
  //   <div className={`bottom-nav ${showBottomNav ? 'active' : ''}`}>
  //     <div className="section-links">
  //       <Link className="bottom-nav-link" to={'/'}><div>Home</div></Link>
  //       <Link className="bottom-nav-link" to={'/about'}><div>About</div></Link>
  //       <Link className="bottom-nav-link" to={'/pricing'}><div>Pricing</div></Link>
  //       <Link className="bottom-nav-link" to={'/contact'}><div>Contact</div></Link>
  //     </div>
  //   </div>

  //   <Routes>

  //     <Route path='/' element={<Landing />} />

  //     <Route path='/about' element={<About />} />

  //     <Route path='/pricing' element={<PricingPage />} />

  //     <Route path='/contact' element={<Contact />} />


  //   </Routes>
  //   <Footer />
  // </>
)
}

export default App
