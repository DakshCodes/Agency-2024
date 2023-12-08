import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import './Contact.css'
import { motion } from 'framer-motion'
import contact1 from '../../assets/conatact.svg'
import toast from 'react-hot-toast';
import { useLocation } from 'react-router';
import { pricingData, selectedPricing } from '../../pricingData';


const Contact = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const code = searchParams.get('code');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Function to send data to the backend
    const sendDataToBackend = async (values) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/sendMail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data sent successfully:', data);
            // Additional logic if needed
        } catch (error) {
            console.error('Error sending data to the backend:', error);
            throw new Error("Something is wrong")

        }
    };

    // Event handler for the "Send Request" button
    const handleSendRequest = async (event) => {
        event.preventDefault(); // Prevents the form from submitting in the default way
        // Use toast.promise with the sendDataToBackend function
        const promise = toast.promise(
            sendDataToBackend(formData),
            {
                loading: 'Hold on , Compiling your message into 0s and 1s... ',
                success: 'Congrats! Your message just successfully completed its journey through the API of communication.',
                error: "'Oh-no' ,Your message didn't quite make it. Mind giving it another shot",
                duration: 4000,
            },
        );

        try {
            // Wait for the promise to resolve
            await promise;
        } catch (error) {
            // The error will be caught by the promise, so this block may not be reached
            console.error('Error handling promise:', error);
        }
        // console.log(formData)
    };

    // Event handler for form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

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
                            <h2>Let us Help You! {code}</h2>
                        </div>
                        <div className="form-wrapper">
                            <form action="">
                                {/* dropdown */}
                                <select name="project-type" onChange={handleInputChange} className='select-project'>
                                    <option className="select-item" value="0">
                                        Select project type
                                    </option>
                                    {pricingData.map((card,index) => (
                                        <option key={index} className="select-item" value={card.name}>
                                            {card.name}
                                        </option>
                                    ))}
                                    {selectedPricing.map((card,index) => (
                                        <option key={index} className="select-item" value={card.headline === name}>
                                            {card.headline}
                                        </option>
                                    ))}
                                </select>
                                <input onChange={handleInputChange} type="text" name="name" placeholder='name' />
                                <input onChange={handleInputChange} type="text" name="email" placeholder='email' />
                                <textarea onChange={handleInputChange} type="text" name="message" placeholder='project details' />

                                {/* button */}
                                <button onClick={handleSendRequest} class="m-auto group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-[#fff] hover:before:[box-shadow:_20px_20px_20px_30px_#000] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-1 hover:before:right-1 hover:before:bottom-0 hover:before:blur hover:underline hover:underline-offset-4 origin-left  relative bg-neutral-800 h-16 w-[15rem] border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#d4ff3f] before:rounded-full before:blur-lg  after:absolute after:z-[0] after:w-10 after:h-20 after:content['']  after:bg-[#d4ff3f] after:right-0 after:top-1 after:rounded-full after:blur-lg">
                                    <span className='conatact-btn z-50'>Send Request</span>
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
