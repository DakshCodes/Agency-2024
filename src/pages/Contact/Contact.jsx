import gsap from 'gsap';
import React, { useEffect } from 'react'
import './Contact.css'
import { motion } from 'framer-motion'
import contact1 from '../../assets/conatact.svg'


const Contact = () => {

    useEffect(() => {
        gsap.set(".container img", {
            scale: 2,
        });
      



        gsap.to(".hero-image-wrapper,.content-wrapper,.front-img", 2, {
            clipPath: "inset(0 0% 0 0)",
            ease: "power4.inOut",
            stagger: {
                amount: 0.5,
            },
        });



        gsap.to(".container img", 3, {
            delay: 0.5,
            scale: 1,
            ease: "power4.inOut",
            stagger: {
                amount: 0.25,
            }
        });


        gsap.set("#header h2", {
            y: 40,
            opacity: 0,
        });

        gsap.set(".form-wrapper form input,.form-wrapper form textarea, .form-wrapper form .select-project", {
            y: 20,
            opacity: 0,
        });

        gsap.to("#header h2", 0.8, {
            y: 0,
            opacity: 1,
            delay: 1,
            ease: "power4.inOut",
        });

        gsap.to(".form-wrapper form input,.form-wrapper form textarea,.form-wrapper form .select-project", {
            delay: 2,
            opacity: 1,
            y: 0,
            ease: "power4.inOut",
            stagger: {
                amount: 0.25,
            }
        });


    }, [])

    return (
        <div className='contact-main'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'backOut' }}
                viewport={{ once: true }}
                className="marquee-3">
                <span>
                    <svg viewBox="20 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" stroke-width="0.912" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#fffCCCCCC" stroke-width="0.24000000000000005" ></g><g id="SVGRepo_iconCarrier"><path d="M0 12H50" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                    Have a <span className='text-[#ff7c7c]'>Project?</span>
                </span>
            </motion.div>
            <div class="container">
                <div className="hero-image-wrapper wrapper">
                    <div className="bg-img">
                        <img src="https://i.pinimg.com/564x/d2/dd/2e/d2dd2e95cbe8e0f9ee880faaf11fa470.jpg" alt="" />
                    </div>
                    <div className="front-img">
                        <img src={contact1} alt="" />
                    </div>
                </div>
                <div class="content-wrapper wrapper">
                    <header id='header'>
                        <div class="h2">
                            <h2>Let us Help You!</h2>
                        </div>
                        <div className="form-wrapper">
                            <form action="">
                                {/* dropdown */}
                                <select className='select-project'>
                                    <option className='select-item' value="0">Select car</option>
                                    <option className='select-item' value="1">Landing-Page</option>
                                </select>
                                <input type="text" placeholder='name' />
                                <input type="text" placeholder='email' />
                                <textarea type="text" placeholder='project details' />

                                {/* button */}
                                <button class="m-auto     group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-[#fff] hover:before:[box-shadow:_20px_20px_20px_30px_#000] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-1 hover:before:right-1 hover:before:bottom-0 hover:before:blur hover:underline hover:underline-offset-4 origin-left  relative bg-neutral-800 h-16 w-[15rem] border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-[0] after:w-10 after:h-20 after:content['']  after:bg-rose-300 after:right-0 after:top-1 after:rounded-full after:blur-lg">
                                   <span className='conatact-btn z-50  '>Send Request</span>
                                </button>

                            </form>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Contact
