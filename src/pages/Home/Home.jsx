import gsap from 'gsap'
import React, { useLayoutEffect } from 'react'
import './Home.css'
import hero from '../../assets/pic3.png'
import {easeInOut, motion} from 'framer-motion'

const Home = () => {


    useLayoutEffect(() => {

        // set effects
        gsap.set(".nav-logo", {
            x: -40,
            opacity: 0,
        })
        gsap.set(".nav-links a", {
            top: "30px",
            opacity: 0,
        })
        gsap.set(".item h1", {
            opacity: 0,
            y: 60,
        });

        gsap.set(".play-wrapper, .pattern, .copy", {
            scaleY: 0,
        });

        gsap.from(".hr", {
            width: 0,
        });

        gsap.set(".btns", {
            x: 50,
            opacity: 0,
        });


        gsap.set(".play-btn", {
            scale: 0,
        });

        gsap.set(".hero-wrapper", {
            width: "100%",
        });
        gsap.set(".hero-wrapper-2", {
            width: "100%",
        });

        gsap.set(".arrow", {
            scale: "0",
        });
        gsap.set(".marquee", {
            bottom: "-10rem",
        });
        // animate

        gsap.to(".nav-logo", 0.9, {
            x: 0,
            opacity: 1,
            ease: "power4.inOut",
        })
        gsap.to(".nav-links a", 0.9, {
            top: "0px",
            opacity: 1,
            ease: "power4.inOut",
            delay: 0.3,
            stagger: {
                amount: 0.4,
            }
        })

        gsap.to(".item h1", 2, {
            y: 0,
            opacity: 1,
            ease: "power4.inOut",
            delay: 0.5,
            stagger: {
                amount: 0.5,
            },
        });
        // gsap.to(".play-wrapper, .pattern, .copy", 2, {
        //     scaleY: 1,
        //     ease: "power3.inOut",
        //     stagger: {
        //         amount: 0.3,
        //     },
        //     delay: 2.5,
        // });

        gsap.to(".hr", 0.6, {
            width: "100%",
            ease: "power3.inOut",
            delay: 0.8,

        });

        gsap.to(".btns", 2, {
            x: 0,
            opacity: 1,
            ease: "power3.inOut",
            delay: 1,

        });

        gsap.to(".play-btn", 2, {
            scale: 1,
            ease: "power3.inOut",
            delay: 1.2,
        });

        gsap.to(".hero-wrapper-2", 0.9, {
            width: "0%",
            ease: "power3.inOut",
            delay: 1.4,
        });
        gsap.to(".hero-wrapper", 2, {
            width: "0%",
            ease: "power3.inOut",
            delay: 1.6,
        });

        gsap.to(".arrow", {
            scale: 1,
            ease: "power3.inOut",
            delay: 1.6,
        });
        gsap.to(".marquee", {
            bottom: "0rem",
            ease: "power3.inOut",
            delay: 1.6,
        });


    }, [])

    return (
        <>
            <div className="main-Home">
                <div className="header">
                    <div className="header-left col">
                        <div className="item">
                            <h1>
                                <div className='circle-head'></div>
                                <div className='circle-head'></div>
                            </h1>
                            <h1 data-lenis-prevent-wheel>Digitize</h1>
                            <h1> Ideas </h1>
                        </div>
                    </div>
                    <div className="header-right col">
                        <div className="team-picture">
                            <div className="hero-wrapper-2"></div>
                            <img src="https://i.pinimg.com/564x/b7/26/d5/b726d52e1446a238eb35edbe665f02bb.jpg" alt="" />
                        </div>
                        {/* <div className="play-wrapper">
                            <div className="play-btn">
                                <svg fill="#d5ff3f" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#d4ff3f"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>play</title> <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z" /> </g></svg>
                            </div>
                        </div> */}
                        {/* <div className="copy">
                            <p>
                                The art of visual communication, creatively impacting the world around us-one good design at a time, design like you mean it !
                            </p>
                        </div> */}
                    </div>
                </div>
                <div className="btn-container">
                    <div className="btns col">
                        <div className="btn">
                            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 297" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path d="M148.5,190.718c9.881,0,17.918-8.038,17.918-17.919c0-9.88-8.037-17.918-17.918-17.918 c-9.881,0-17.918,8.038-17.918,17.918C130.582,182.68,138.619,190.718,148.5,190.718z" /> <path d="M297,107.999c0-9.881-8.038-17.918-17.918-17.918c-9.881,0-17.919,8.037-17.919,17.918c0,3.205,0.856,6.209,2.337,8.815 l-16.17,16.17c-4.822-11.349-7.186-28.849-7.824-42.229c5.039-3.175,8.403-8.773,8.403-15.156c0-9.88-8.038-17.918-17.918-17.918 c-9.881,0-17.919,8.038-17.919,17.918c0,4.453,1.643,8.522,4.34,11.66c-10.464,18.023-25.075,35.371-34.143,45.427 c-7.97-16.629-16.955-49.719-22.527-75.554c4.067-3.287,6.676-8.309,6.676-13.933c0-9.881-8.037-17.918-17.918-17.918 c-9.881,0-17.918,8.037-17.918,17.918c0,5.624,2.609,10.646,6.676,13.933c-5.569,25.837-14.554,58.932-22.528,75.56 c-9.063-10.047-23.667-27.381-34.143-45.433c2.698-3.138,4.34-7.207,4.34-11.66c0-9.88-8.037-17.918-17.918-17.918 c-9.88,0-17.918,8.038-17.918,17.918c0,6.387,3.367,11.985,8.409,15.159c-0.629,13.379-2.99,30.878-7.824,42.232L33.5,116.815 c1.48-2.606,2.336-5.61,2.336-8.815c0-9.881-8.037-17.918-17.918-17.918C8.038,90.081,0,98.119,0,107.999 c0,7.24,4.324,13.475,10.519,16.3c6.352,32.257,14.764,78.529,14.764,89V261.9c0,5.422,4.396,9.818,9.817,9.818h226.8 c5.423,0,9.818-4.396,9.818-9.818v-48.601c0-10.469,8.41-56.742,14.766-89C292.676,121.474,297,115.24,297,107.999z M44.357,155.443c3.835,3.833,10.05,3.833,13.886,0c9.319-9.321,14.089-26.038,16.529-41.044 c15.884,22.439,33.386,40.044,34.385,41.044c3.835,3.833,10.05,3.833,13.886,0c9.89-9.891,18.954-36.98,25.457-61.117 c6.503,24.137,15.567,51.227,25.457,61.117c1.842,1.84,4.339,2.875,6.943,2.875c2.604,0,5.101-1.035,6.942-2.875 c0.999-1,18.501-18.605,34.385-41.044c2.441,15.006,7.21,31.723,16.529,41.044c3.836,3.833,10.051,3.833,13.886,0l9.743-9.744 c-3.645,19.507-7.85,43.309-9.541,57.783H44.155c-1.691-14.475-5.896-38.276-9.54-57.783L44.357,155.443z M252.082,252.081H44.918 v-28.964h207.164V252.081z" /> </g> </g></svg>
                            <span>2023 Best Agency </span>
                        </div>
                        <div className="btn">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <circle cx={12} cy={12} r={8} stroke="#222222" /> <path d="M18.2075 6.78485C17.4747 7.46088 16.5544 8.00912 15.5106 8.39144C14.4668 8.77376 13.3244 8.981 12.163 8.99875C11.0016 9.01651 9.84894 8.84434 8.7852 8.49423C7.72146 8.14412 6.77215 7.62447 6.00325 6.97139" stroke="#222222" /> <path d="M18.3222 17.3235C17.5826 16.608 16.6367 16.0274 15.5553 15.6251C14.474 15.2227 13.2853 15.0091 12.0783 15.0003C10.8713 14.9914 9.67723 15.1875 8.58561 15.5739C7.494 15.9603 6.53311 16.5269 5.77495 17.2314" stroke="#222222" /> <path d="M12 4V20" stroke="#222222" /> <path d="M20 12H4" stroke="#222222" /> </g></svg>
                            <span>World Class Agency</span>
                        </div>
                    </div>
                    <div className="divider col">
                        <div className="hr"></div>
                    </div>
                </div>
                <div className="hero">
                    <img
                        src='https://danishkhan.in/wp-content/uploads/2023/06/999-min.png'
                        // src={hero}
                        alt=""
                    />
                    <div className="hero-wrapper"></div>
                    <div className="arrow">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fill="#d5ff3f" d="M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z" /></g></svg>
                    </div>
                </div>
                <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.7,ease:easeInOut}}
                viewport={{once:true}}
                className="marquee">
                    <span>
                        Discuss Your Ideas
                        <svg height="90px" width="90px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path style={{ fill: '#d5ff3f' }} d="M333.435,318.269l-4.442-25.895l59.546-58.041c2.527-2.465,3.437-6.148,2.345-9.501 c-1.089-3.355-3.99-5.801-7.482-6.309l-82.291-11.958l-36.804-74.567c-1.559-3.166-4.78-5.169-8.308-5.169s-6.752,2.003-8.312,5.169 l-36.803,74.567l-82.291,11.958c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041 l-14.058,81.959c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705L256,345.407l73.6,38.695 c1.357,0.712,2.839,1.064,4.314,1.064c1.921,0,3.836-0.596,5.45-1.769c2.853-2.074,4.281-5.589,3.687-9.065l-5.277-30.767" /> <g style={{ opacity: '0.2' }}> <path style={{ fill: '#231F20' }} d="M193.023,367.477l13.371-77.961c0.547-3.188-0.467-4.978-1.137-5.775l-0.525-0.512l0,0l0,0 l-57.2-55.753c-2.527-2.465-3.436-6.148-2.348-9.501c0.234-0.716,0.563-1.379,0.949-2.001l-17.538,2.548 c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041l-14.058,81.959 c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705l14.346-7.541c-0.011-0.008-0.023-0.013-0.033-0.02 C193.855,374.467,192.426,370.953,193.023,367.477z" /> </g> <g> <path style={{ fill: '#231F20' }} d="M178.067,393.272c-3.583,0.001-7.143-1.123-10.185-3.335c-5.384-3.913-8.027-10.417-6.9-16.974 l13.339-77.767l-56.505-55.075c-4.763-4.65-6.445-11.464-4.392-17.786c2.06-6.332,7.428-10.855,14.01-11.812l78.084-11.347 l34.922-70.755c2.939-5.966,8.903-9.675,15.56-9.675c6.657,0,12.62,3.709,15.56,9.681l34.919,70.749l78.084,11.347 c6.587,0.956,11.957,5.483,14.009,11.814c2.057,6.316,0.376,13.133-4.389,17.782l-56.505,55.078l3.723,21.706 c0.756,4.4-2.2,8.58-6.601,9.335c-4.402,0.755-8.58-2.201-9.333-6.601l-4.442-25.895c-0.451-2.623,0.419-5.299,2.324-7.156 l59.546-58.041c0.32-0.312,0.439-0.787,0.301-1.209c-0.14-0.432-0.514-0.747-0.956-0.812l-82.292-11.958 c-2.633-0.383-4.91-2.036-6.087-4.423l-36.804-74.567c-0.203-0.411-0.607-0.662-1.058-0.662c-0.454,0-0.86,0.251-1.06,0.658 l-36.805,74.571c-1.178,2.386-3.454,4.04-6.088,4.423l-82.291,11.958c-0.443,0.065-0.819,0.383-0.958,0.81 c-0.137,0.421-0.017,0.9,0.305,1.215l59.545,58.038c1.906,1.857,2.775,4.533,2.324,7.156l-14.058,81.959 c-0.077,0.449,0.105,0.891,0.471,1.159c0.361,0.262,0.848,0.297,1.243,0.091l73.607-38.696c2.357-1.238,5.17-1.237,7.524,0 l73.6,38.694c0.323,0.169,0.711,0.302,1.248-0.089c0.361-0.262,0.548-0.72,0.472-1.164l-5.276-30.762 c-0.755-4.4,2.2-8.58,6.601-9.335c4.392-0.755,8.58,2.201,9.335,6.602l5.276,30.767c1.121,6.56-1.524,13.061-6.9,16.97 c-2.986,2.169-6.513,3.315-10.204,3.315c-2.801,0-5.593-0.689-8.072-1.991L256,354.541l-69.842,36.718 C183.597,392.606,180.825,393.272,178.067,393.272z" /> <path style={{ fill: '#231F20' }} d="M46.482,264.084H8.084C3.618,264.084,0,260.465,0,256c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.465,0,8.084,3.62,8.084,8.084C54.566,260.465,50.948,264.084,46.482,264.084z" /> <path style={{ fill: '#231F20' }} d="M503.916,264.084h-38.398c-4.466,0-8.084-3.62-8.084-8.084c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.466,0,8.084,3.62,8.084,8.084C512,260.465,508.382,264.084,503.916,264.084z" /> <path style={{ fill: '#231F20' }} d="M80.698,439.387c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.432 l27.151-27.15c3.156-3.157,8.275-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432L86.413,437.02 C84.836,438.598,82.766,439.387,80.698,439.387z" /> <path style={{ fill: '#231F20' }} d="M404.149,115.932c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.433 l27.152-27.15c3.157-3.158,8.276-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432l-27.152,27.15 C408.287,115.143,406.218,115.932,404.149,115.932z" /> <path style={{ fill: '#231F20' }} d="M256,511.999c-4.466,0-8.084-3.62-8.084-8.084v-38.397c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.397C264.084,508.379,260.466,511.999,256,511.999z" /> <path style={{ fill: '#231F20' }} d="M256,54.567c-4.466,0-8.084-3.62-8.084-8.084V8.085c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.398C264.084,50.948,260.466,54.567,256,54.567z" /> <path style={{ fill: '#231F20' }} d="M431.301,439.387c-2.068,0-4.138-0.789-5.716-2.368l-27.152-27.151 c-3.158-3.157-3.158-8.276-0.001-11.432c3.158-3.157,8.277-3.157,11.432,0l27.152,27.15c3.158,3.157,3.158,8.276,0.001,11.432 C435.439,438.598,433.37,439.387,431.301,439.387z" /> <path style={{ fill: '#231F20' }} d="M107.85,115.934c-2.07,0-4.138-0.789-5.717-2.368L74.982,86.415c-3.157-3.157-3.157-8.276,0-11.432 c3.159-3.157,8.277-3.157,11.433,0l27.151,27.152c3.157,3.157,3.157,8.276,0,11.433 C111.988,115.145,109.918,115.934,107.85,115.934z" /> </g> </g></svg>
                    </span>
                    <span>
                        Discuss Your Ideas
                        <svg height="90px" width="90px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path style={{ fill: '#d5ff3f' }} d="M333.435,318.269l-4.442-25.895l59.546-58.041c2.527-2.465,3.437-6.148,2.345-9.501 c-1.089-3.355-3.99-5.801-7.482-6.309l-82.291-11.958l-36.804-74.567c-1.559-3.166-4.78-5.169-8.308-5.169s-6.752,2.003-8.312,5.169 l-36.803,74.567l-82.291,11.958c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041 l-14.058,81.959c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705L256,345.407l73.6,38.695 c1.357,0.712,2.839,1.064,4.314,1.064c1.921,0,3.836-0.596,5.45-1.769c2.853-2.074,4.281-5.589,3.687-9.065l-5.277-30.767" /> <g style={{ opacity: '0.2' }}> <path style={{ fill: '#231F20' }} d="M193.023,367.477l13.371-77.961c0.547-3.188-0.467-4.978-1.137-5.775l-0.525-0.512l0,0l0,0 l-57.2-55.753c-2.527-2.465-3.436-6.148-2.348-9.501c0.234-0.716,0.563-1.379,0.949-2.001l-17.538,2.548 c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041l-14.058,81.959 c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705l14.346-7.541c-0.011-0.008-0.023-0.013-0.033-0.02 C193.855,374.467,192.426,370.953,193.023,367.477z" /> </g> <g> <path style={{ fill: '#231F20' }} d="M178.067,393.272c-3.583,0.001-7.143-1.123-10.185-3.335c-5.384-3.913-8.027-10.417-6.9-16.974 l13.339-77.767l-56.505-55.075c-4.763-4.65-6.445-11.464-4.392-17.786c2.06-6.332,7.428-10.855,14.01-11.812l78.084-11.347 l34.922-70.755c2.939-5.966,8.903-9.675,15.56-9.675c6.657,0,12.62,3.709,15.56,9.681l34.919,70.749l78.084,11.347 c6.587,0.956,11.957,5.483,14.009,11.814c2.057,6.316,0.376,13.133-4.389,17.782l-56.505,55.078l3.723,21.706 c0.756,4.4-2.2,8.58-6.601,9.335c-4.402,0.755-8.58-2.201-9.333-6.601l-4.442-25.895c-0.451-2.623,0.419-5.299,2.324-7.156 l59.546-58.041c0.32-0.312,0.439-0.787,0.301-1.209c-0.14-0.432-0.514-0.747-0.956-0.812l-82.292-11.958 c-2.633-0.383-4.91-2.036-6.087-4.423l-36.804-74.567c-0.203-0.411-0.607-0.662-1.058-0.662c-0.454,0-0.86,0.251-1.06,0.658 l-36.805,74.571c-1.178,2.386-3.454,4.04-6.088,4.423l-82.291,11.958c-0.443,0.065-0.819,0.383-0.958,0.81 c-0.137,0.421-0.017,0.9,0.305,1.215l59.545,58.038c1.906,1.857,2.775,4.533,2.324,7.156l-14.058,81.959 c-0.077,0.449,0.105,0.891,0.471,1.159c0.361,0.262,0.848,0.297,1.243,0.091l73.607-38.696c2.357-1.238,5.17-1.237,7.524,0 l73.6,38.694c0.323,0.169,0.711,0.302,1.248-0.089c0.361-0.262,0.548-0.72,0.472-1.164l-5.276-30.762 c-0.755-4.4,2.2-8.58,6.601-9.335c4.392-0.755,8.58,2.201,9.335,6.602l5.276,30.767c1.121,6.56-1.524,13.061-6.9,16.97 c-2.986,2.169-6.513,3.315-10.204,3.315c-2.801,0-5.593-0.689-8.072-1.991L256,354.541l-69.842,36.718 C183.597,392.606,180.825,393.272,178.067,393.272z" /> <path style={{ fill: '#231F20' }} d="M46.482,264.084H8.084C3.618,264.084,0,260.465,0,256c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.465,0,8.084,3.62,8.084,8.084C54.566,260.465,50.948,264.084,46.482,264.084z" /> <path style={{ fill: '#231F20' }} d="M503.916,264.084h-38.398c-4.466,0-8.084-3.62-8.084-8.084c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.466,0,8.084,3.62,8.084,8.084C512,260.465,508.382,264.084,503.916,264.084z" /> <path style={{ fill: '#231F20' }} d="M80.698,439.387c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.432 l27.151-27.15c3.156-3.157,8.275-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432L86.413,437.02 C84.836,438.598,82.766,439.387,80.698,439.387z" /> <path style={{ fill: '#231F20' }} d="M404.149,115.932c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.433 l27.152-27.15c3.157-3.158,8.276-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432l-27.152,27.15 C408.287,115.143,406.218,115.932,404.149,115.932z" /> <path style={{ fill: '#231F20' }} d="M256,511.999c-4.466,0-8.084-3.62-8.084-8.084v-38.397c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.397C264.084,508.379,260.466,511.999,256,511.999z" /> <path style={{ fill: '#231F20' }} d="M256,54.567c-4.466,0-8.084-3.62-8.084-8.084V8.085c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.398C264.084,50.948,260.466,54.567,256,54.567z" /> <path style={{ fill: '#231F20' }} d="M431.301,439.387c-2.068,0-4.138-0.789-5.716-2.368l-27.152-27.151 c-3.158-3.157-3.158-8.276-0.001-11.432c3.158-3.157,8.277-3.157,11.432,0l27.152,27.15c3.158,3.157,3.158,8.276,0.001,11.432 C435.439,438.598,433.37,439.387,431.301,439.387z" /> <path style={{ fill: '#231F20' }} d="M107.85,115.934c-2.07,0-4.138-0.789-5.717-2.368L74.982,86.415c-3.157-3.157-3.157-8.276,0-11.432 c3.159-3.157,8.277-3.157,11.433,0l27.151,27.152c3.157,3.157,3.157,8.276,0,11.433 C111.988,115.145,109.918,115.934,107.85,115.934z" /> </g> </g></svg>
                    </span>
                    <span>
                        Discuss Your Ideas
                        <svg height="90px" width="90px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path style={{ fill: '#d5ff3f' }} d="M333.435,318.269l-4.442-25.895l59.546-58.041c2.527-2.465,3.437-6.148,2.345-9.501 c-1.089-3.355-3.99-5.801-7.482-6.309l-82.291-11.958l-36.804-74.567c-1.559-3.166-4.78-5.169-8.308-5.169s-6.752,2.003-8.312,5.169 l-36.803,74.567l-82.291,11.958c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041 l-14.058,81.959c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705L256,345.407l73.6,38.695 c1.357,0.712,2.839,1.064,4.314,1.064c1.921,0,3.836-0.596,5.45-1.769c2.853-2.074,4.281-5.589,3.687-9.065l-5.277-30.767" /> <g style={{ opacity: '0.2' }}> <path style={{ fill: '#231F20' }} d="M193.023,367.477l13.371-77.961c0.547-3.188-0.467-4.978-1.137-5.775l-0.525-0.512l0,0l0,0 l-57.2-55.753c-2.527-2.465-3.436-6.148-2.348-9.501c0.234-0.716,0.563-1.379,0.949-2.001l-17.538,2.548 c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041l-14.058,81.959 c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705l14.346-7.541c-0.011-0.008-0.023-0.013-0.033-0.02 C193.855,374.467,192.426,370.953,193.023,367.477z" /> </g> <g> <path style={{ fill: '#231F20' }} d="M178.067,393.272c-3.583,0.001-7.143-1.123-10.185-3.335c-5.384-3.913-8.027-10.417-6.9-16.974 l13.339-77.767l-56.505-55.075c-4.763-4.65-6.445-11.464-4.392-17.786c2.06-6.332,7.428-10.855,14.01-11.812l78.084-11.347 l34.922-70.755c2.939-5.966,8.903-9.675,15.56-9.675c6.657,0,12.62,3.709,15.56,9.681l34.919,70.749l78.084,11.347 c6.587,0.956,11.957,5.483,14.009,11.814c2.057,6.316,0.376,13.133-4.389,17.782l-56.505,55.078l3.723,21.706 c0.756,4.4-2.2,8.58-6.601,9.335c-4.402,0.755-8.58-2.201-9.333-6.601l-4.442-25.895c-0.451-2.623,0.419-5.299,2.324-7.156 l59.546-58.041c0.32-0.312,0.439-0.787,0.301-1.209c-0.14-0.432-0.514-0.747-0.956-0.812l-82.292-11.958 c-2.633-0.383-4.91-2.036-6.087-4.423l-36.804-74.567c-0.203-0.411-0.607-0.662-1.058-0.662c-0.454,0-0.86,0.251-1.06,0.658 l-36.805,74.571c-1.178,2.386-3.454,4.04-6.088,4.423l-82.291,11.958c-0.443,0.065-0.819,0.383-0.958,0.81 c-0.137,0.421-0.017,0.9,0.305,1.215l59.545,58.038c1.906,1.857,2.775,4.533,2.324,7.156l-14.058,81.959 c-0.077,0.449,0.105,0.891,0.471,1.159c0.361,0.262,0.848,0.297,1.243,0.091l73.607-38.696c2.357-1.238,5.17-1.237,7.524,0 l73.6,38.694c0.323,0.169,0.711,0.302,1.248-0.089c0.361-0.262,0.548-0.72,0.472-1.164l-5.276-30.762 c-0.755-4.4,2.2-8.58,6.601-9.335c4.392-0.755,8.58,2.201,9.335,6.602l5.276,30.767c1.121,6.56-1.524,13.061-6.9,16.97 c-2.986,2.169-6.513,3.315-10.204,3.315c-2.801,0-5.593-0.689-8.072-1.991L256,354.541l-69.842,36.718 C183.597,392.606,180.825,393.272,178.067,393.272z" /> <path style={{ fill: '#231F20' }} d="M46.482,264.084H8.084C3.618,264.084,0,260.465,0,256c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.465,0,8.084,3.62,8.084,8.084C54.566,260.465,50.948,264.084,46.482,264.084z" /> <path style={{ fill: '#231F20' }} d="M503.916,264.084h-38.398c-4.466,0-8.084-3.62-8.084-8.084c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.466,0,8.084,3.62,8.084,8.084C512,260.465,508.382,264.084,503.916,264.084z" /> <path style={{ fill: '#231F20' }} d="M80.698,439.387c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.432 l27.151-27.15c3.156-3.157,8.275-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432L86.413,437.02 C84.836,438.598,82.766,439.387,80.698,439.387z" /> <path style={{ fill: '#231F20' }} d="M404.149,115.932c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.433 l27.152-27.15c3.157-3.158,8.276-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432l-27.152,27.15 C408.287,115.143,406.218,115.932,404.149,115.932z" /> <path style={{ fill: '#231F20' }} d="M256,511.999c-4.466,0-8.084-3.62-8.084-8.084v-38.397c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.397C264.084,508.379,260.466,511.999,256,511.999z" /> <path style={{ fill: '#231F20' }} d="M256,54.567c-4.466,0-8.084-3.62-8.084-8.084V8.085c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.398C264.084,50.948,260.466,54.567,256,54.567z" /> <path style={{ fill: '#231F20' }} d="M431.301,439.387c-2.068,0-4.138-0.789-5.716-2.368l-27.152-27.151 c-3.158-3.157-3.158-8.276-0.001-11.432c3.158-3.157,8.277-3.157,11.432,0l27.152,27.15c3.158,3.157,3.158,8.276,0.001,11.432 C435.439,438.598,433.37,439.387,431.301,439.387z" /> <path style={{ fill: '#231F20' }} d="M107.85,115.934c-2.07,0-4.138-0.789-5.717-2.368L74.982,86.415c-3.157-3.157-3.157-8.276,0-11.432 c3.159-3.157,8.277-3.157,11.433,0l27.151,27.152c3.157,3.157,3.157,8.276,0,11.433 C111.988,115.145,109.918,115.934,107.85,115.934z" /> </g> </g></svg>
                    </span>
                    <span>
                        Discuss Your Ideas
                        <svg height="90px" width="90px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path style={{ fill: '#d5ff3f' }} d="M333.435,318.269l-4.442-25.895l59.546-58.041c2.527-2.465,3.437-6.148,2.345-9.501 c-1.089-3.355-3.99-5.801-7.482-6.309l-82.291-11.958l-36.804-74.567c-1.559-3.166-4.78-5.169-8.308-5.169s-6.752,2.003-8.312,5.169 l-36.803,74.567l-82.291,11.958c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041 l-14.058,81.959c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705L256,345.407l73.6,38.695 c1.357,0.712,2.839,1.064,4.314,1.064c1.921,0,3.836-0.596,5.45-1.769c2.853-2.074,4.281-5.589,3.687-9.065l-5.277-30.767" /> <g style={{ opacity: '0.2' }}> <path style={{ fill: '#231F20' }} d="M193.023,367.477l13.371-77.961c0.547-3.188-0.467-4.978-1.137-5.775l-0.525-0.512l0,0l0,0 l-57.2-55.753c-2.527-2.465-3.436-6.148-2.348-9.501c0.234-0.716,0.563-1.379,0.949-2.001l-17.538,2.548 c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041l-14.058,81.959 c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705l14.346-7.541c-0.011-0.008-0.023-0.013-0.033-0.02 C193.855,374.467,192.426,370.953,193.023,367.477z" /> </g> <g> <path style={{ fill: '#231F20' }} d="M178.067,393.272c-3.583,0.001-7.143-1.123-10.185-3.335c-5.384-3.913-8.027-10.417-6.9-16.974 l13.339-77.767l-56.505-55.075c-4.763-4.65-6.445-11.464-4.392-17.786c2.06-6.332,7.428-10.855,14.01-11.812l78.084-11.347 l34.922-70.755c2.939-5.966,8.903-9.675,15.56-9.675c6.657,0,12.62,3.709,15.56,9.681l34.919,70.749l78.084,11.347 c6.587,0.956,11.957,5.483,14.009,11.814c2.057,6.316,0.376,13.133-4.389,17.782l-56.505,55.078l3.723,21.706 c0.756,4.4-2.2,8.58-6.601,9.335c-4.402,0.755-8.58-2.201-9.333-6.601l-4.442-25.895c-0.451-2.623,0.419-5.299,2.324-7.156 l59.546-58.041c0.32-0.312,0.439-0.787,0.301-1.209c-0.14-0.432-0.514-0.747-0.956-0.812l-82.292-11.958 c-2.633-0.383-4.91-2.036-6.087-4.423l-36.804-74.567c-0.203-0.411-0.607-0.662-1.058-0.662c-0.454,0-0.86,0.251-1.06,0.658 l-36.805,74.571c-1.178,2.386-3.454,4.04-6.088,4.423l-82.291,11.958c-0.443,0.065-0.819,0.383-0.958,0.81 c-0.137,0.421-0.017,0.9,0.305,1.215l59.545,58.038c1.906,1.857,2.775,4.533,2.324,7.156l-14.058,81.959 c-0.077,0.449,0.105,0.891,0.471,1.159c0.361,0.262,0.848,0.297,1.243,0.091l73.607-38.696c2.357-1.238,5.17-1.237,7.524,0 l73.6,38.694c0.323,0.169,0.711,0.302,1.248-0.089c0.361-0.262,0.548-0.72,0.472-1.164l-5.276-30.762 c-0.755-4.4,2.2-8.58,6.601-9.335c4.392-0.755,8.58,2.201,9.335,6.602l5.276,30.767c1.121,6.56-1.524,13.061-6.9,16.97 c-2.986,2.169-6.513,3.315-10.204,3.315c-2.801,0-5.593-0.689-8.072-1.991L256,354.541l-69.842,36.718 C183.597,392.606,180.825,393.272,178.067,393.272z" /> <path style={{ fill: '#231F20' }} d="M46.482,264.084H8.084C3.618,264.084,0,260.465,0,256c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.465,0,8.084,3.62,8.084,8.084C54.566,260.465,50.948,264.084,46.482,264.084z" /> <path style={{ fill: '#231F20' }} d="M503.916,264.084h-38.398c-4.466,0-8.084-3.62-8.084-8.084c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.466,0,8.084,3.62,8.084,8.084C512,260.465,508.382,264.084,503.916,264.084z" /> <path style={{ fill: '#231F20' }} d="M80.698,439.387c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.432 l27.151-27.15c3.156-3.157,8.275-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432L86.413,437.02 C84.836,438.598,82.766,439.387,80.698,439.387z" /> <path style={{ fill: '#231F20' }} d="M404.149,115.932c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.433 l27.152-27.15c3.157-3.158,8.276-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432l-27.152,27.15 C408.287,115.143,406.218,115.932,404.149,115.932z" /> <path style={{ fill: '#231F20' }} d="M256,511.999c-4.466,0-8.084-3.62-8.084-8.084v-38.397c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.397C264.084,508.379,260.466,511.999,256,511.999z" /> <path style={{ fill: '#231F20' }} d="M256,54.567c-4.466,0-8.084-3.62-8.084-8.084V8.085c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.398C264.084,50.948,260.466,54.567,256,54.567z" /> <path style={{ fill: '#231F20' }} d="M431.301,439.387c-2.068,0-4.138-0.789-5.716-2.368l-27.152-27.151 c-3.158-3.157-3.158-8.276-0.001-11.432c3.158-3.157,8.277-3.157,11.432,0l27.152,27.15c3.158,3.157,3.158,8.276,0.001,11.432 C435.439,438.598,433.37,439.387,431.301,439.387z" /> <path style={{ fill: '#231F20' }} d="M107.85,115.934c-2.07,0-4.138-0.789-5.717-2.368L74.982,86.415c-3.157-3.157-3.157-8.276,0-11.432 c3.159-3.157,8.277-3.157,11.433,0l27.151,27.152c3.157,3.157,3.157,8.276,0,11.433 C111.988,115.145,109.918,115.934,107.85,115.934z" /> </g> </g></svg>
                    </span>
                    <span>
                        Discuss Your Ideas
                        <svg height="90px" width="90px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path style={{ fill: '#d5ff3f' }} d="M333.435,318.269l-4.442-25.895l59.546-58.041c2.527-2.465,3.437-6.148,2.345-9.501 c-1.089-3.355-3.99-5.801-7.482-6.309l-82.291-11.958l-36.804-74.567c-1.559-3.166-4.78-5.169-8.308-5.169s-6.752,2.003-8.312,5.169 l-36.803,74.567l-82.291,11.958c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041 l-14.058,81.959c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705L256,345.407l73.6,38.695 c1.357,0.712,2.839,1.064,4.314,1.064c1.921,0,3.836-0.596,5.45-1.769c2.853-2.074,4.281-5.589,3.687-9.065l-5.277-30.767" /> <g style={{ opacity: '0.2' }}> <path style={{ fill: '#231F20' }} d="M193.023,367.477l13.371-77.961c0.547-3.188-0.467-4.978-1.137-5.775l-0.525-0.512l0,0l0,0 l-57.2-55.753c-2.527-2.465-3.436-6.148-2.348-9.501c0.234-0.716,0.563-1.379,0.949-2.001l-17.538,2.548 c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041l-14.058,81.959 c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705l14.346-7.541c-0.011-0.008-0.023-0.013-0.033-0.02 C193.855,374.467,192.426,370.953,193.023,367.477z" /> </g> <g> <path style={{ fill: '#231F20' }} d="M178.067,393.272c-3.583,0.001-7.143-1.123-10.185-3.335c-5.384-3.913-8.027-10.417-6.9-16.974 l13.339-77.767l-56.505-55.075c-4.763-4.65-6.445-11.464-4.392-17.786c2.06-6.332,7.428-10.855,14.01-11.812l78.084-11.347 l34.922-70.755c2.939-5.966,8.903-9.675,15.56-9.675c6.657,0,12.62,3.709,15.56,9.681l34.919,70.749l78.084,11.347 c6.587,0.956,11.957,5.483,14.009,11.814c2.057,6.316,0.376,13.133-4.389,17.782l-56.505,55.078l3.723,21.706 c0.756,4.4-2.2,8.58-6.601,9.335c-4.402,0.755-8.58-2.201-9.333-6.601l-4.442-25.895c-0.451-2.623,0.419-5.299,2.324-7.156 l59.546-58.041c0.32-0.312,0.439-0.787,0.301-1.209c-0.14-0.432-0.514-0.747-0.956-0.812l-82.292-11.958 c-2.633-0.383-4.91-2.036-6.087-4.423l-36.804-74.567c-0.203-0.411-0.607-0.662-1.058-0.662c-0.454,0-0.86,0.251-1.06,0.658 l-36.805,74.571c-1.178,2.386-3.454,4.04-6.088,4.423l-82.291,11.958c-0.443,0.065-0.819,0.383-0.958,0.81 c-0.137,0.421-0.017,0.9,0.305,1.215l59.545,58.038c1.906,1.857,2.775,4.533,2.324,7.156l-14.058,81.959 c-0.077,0.449,0.105,0.891,0.471,1.159c0.361,0.262,0.848,0.297,1.243,0.091l73.607-38.696c2.357-1.238,5.17-1.237,7.524,0 l73.6,38.694c0.323,0.169,0.711,0.302,1.248-0.089c0.361-0.262,0.548-0.72,0.472-1.164l-5.276-30.762 c-0.755-4.4,2.2-8.58,6.601-9.335c4.392-0.755,8.58,2.201,9.335,6.602l5.276,30.767c1.121,6.56-1.524,13.061-6.9,16.97 c-2.986,2.169-6.513,3.315-10.204,3.315c-2.801,0-5.593-0.689-8.072-1.991L256,354.541l-69.842,36.718 C183.597,392.606,180.825,393.272,178.067,393.272z" /> <path style={{ fill: '#231F20' }} d="M46.482,264.084H8.084C3.618,264.084,0,260.465,0,256c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.465,0,8.084,3.62,8.084,8.084C54.566,260.465,50.948,264.084,46.482,264.084z" /> <path style={{ fill: '#231F20' }} d="M503.916,264.084h-38.398c-4.466,0-8.084-3.62-8.084-8.084c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.466,0,8.084,3.62,8.084,8.084C512,260.465,508.382,264.084,503.916,264.084z" /> <path style={{ fill: '#231F20' }} d="M80.698,439.387c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.432 l27.151-27.15c3.156-3.157,8.275-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432L86.413,437.02 C84.836,438.598,82.766,439.387,80.698,439.387z" /> <path style={{ fill: '#231F20' }} d="M404.149,115.932c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.433 l27.152-27.15c3.157-3.158,8.276-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432l-27.152,27.15 C408.287,115.143,406.218,115.932,404.149,115.932z" /> <path style={{ fill: '#231F20' }} d="M256,511.999c-4.466,0-8.084-3.62-8.084-8.084v-38.397c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.397C264.084,508.379,260.466,511.999,256,511.999z" /> <path style={{ fill: '#231F20' }} d="M256,54.567c-4.466,0-8.084-3.62-8.084-8.084V8.085c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.398C264.084,50.948,260.466,54.567,256,54.567z" /> <path style={{ fill: '#231F20' }} d="M431.301,439.387c-2.068,0-4.138-0.789-5.716-2.368l-27.152-27.151 c-3.158-3.157-3.158-8.276-0.001-11.432c3.158-3.157,8.277-3.157,11.432,0l27.152,27.15c3.158,3.157,3.158,8.276,0.001,11.432 C435.439,438.598,433.37,439.387,431.301,439.387z" /> <path style={{ fill: '#231F20' }} d="M107.85,115.934c-2.07,0-4.138-0.789-5.717-2.368L74.982,86.415c-3.157-3.157-3.157-8.276,0-11.432 c3.159-3.157,8.277-3.157,11.433,0l27.151,27.152c3.157,3.157,3.157,8.276,0,11.433 C111.988,115.145,109.918,115.934,107.85,115.934z" /> </g> </g></svg>
                    </span>
                    <span>
                        Discuss Your Ideas
                        <svg height="90px" width="90px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path style={{ fill: '#d5ff3f' }} d="M333.435,318.269l-4.442-25.895l59.546-58.041c2.527-2.465,3.437-6.148,2.345-9.501 c-1.089-3.355-3.99-5.801-7.482-6.309l-82.291-11.958l-36.804-74.567c-1.559-3.166-4.78-5.169-8.308-5.169s-6.752,2.003-8.312,5.169 l-36.803,74.567l-82.291,11.958c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041 l-14.058,81.959c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705L256,345.407l73.6,38.695 c1.357,0.712,2.839,1.064,4.314,1.064c1.921,0,3.836-0.596,5.45-1.769c2.853-2.074,4.281-5.589,3.687-9.065l-5.277-30.767" /> <g style={{ opacity: '0.2' }}> <path style={{ fill: '#231F20' }} d="M193.023,367.477l13.371-77.961c0.547-3.188-0.467-4.978-1.137-5.775l-0.525-0.512l0,0l0,0 l-57.2-55.753c-2.527-2.465-3.436-6.148-2.348-9.501c0.234-0.716,0.563-1.379,0.949-2.001l-17.538,2.548 c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041l-14.058,81.959 c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705l14.346-7.541c-0.011-0.008-0.023-0.013-0.033-0.02 C193.855,374.467,192.426,370.953,193.023,367.477z" /> </g> <g> <path style={{ fill: '#231F20' }} d="M178.067,393.272c-3.583,0.001-7.143-1.123-10.185-3.335c-5.384-3.913-8.027-10.417-6.9-16.974 l13.339-77.767l-56.505-55.075c-4.763-4.65-6.445-11.464-4.392-17.786c2.06-6.332,7.428-10.855,14.01-11.812l78.084-11.347 l34.922-70.755c2.939-5.966,8.903-9.675,15.56-9.675c6.657,0,12.62,3.709,15.56,9.681l34.919,70.749l78.084,11.347 c6.587,0.956,11.957,5.483,14.009,11.814c2.057,6.316,0.376,13.133-4.389,17.782l-56.505,55.078l3.723,21.706 c0.756,4.4-2.2,8.58-6.601,9.335c-4.402,0.755-8.58-2.201-9.333-6.601l-4.442-25.895c-0.451-2.623,0.419-5.299,2.324-7.156 l59.546-58.041c0.32-0.312,0.439-0.787,0.301-1.209c-0.14-0.432-0.514-0.747-0.956-0.812l-82.292-11.958 c-2.633-0.383-4.91-2.036-6.087-4.423l-36.804-74.567c-0.203-0.411-0.607-0.662-1.058-0.662c-0.454,0-0.86,0.251-1.06,0.658 l-36.805,74.571c-1.178,2.386-3.454,4.04-6.088,4.423l-82.291,11.958c-0.443,0.065-0.819,0.383-0.958,0.81 c-0.137,0.421-0.017,0.9,0.305,1.215l59.545,58.038c1.906,1.857,2.775,4.533,2.324,7.156l-14.058,81.959 c-0.077,0.449,0.105,0.891,0.471,1.159c0.361,0.262,0.848,0.297,1.243,0.091l73.607-38.696c2.357-1.238,5.17-1.237,7.524,0 l73.6,38.694c0.323,0.169,0.711,0.302,1.248-0.089c0.361-0.262,0.548-0.72,0.472-1.164l-5.276-30.762 c-0.755-4.4,2.2-8.58,6.601-9.335c4.392-0.755,8.58,2.201,9.335,6.602l5.276,30.767c1.121,6.56-1.524,13.061-6.9,16.97 c-2.986,2.169-6.513,3.315-10.204,3.315c-2.801,0-5.593-0.689-8.072-1.991L256,354.541l-69.842,36.718 C183.597,392.606,180.825,393.272,178.067,393.272z" /> <path style={{ fill: '#231F20' }} d="M46.482,264.084H8.084C3.618,264.084,0,260.465,0,256c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.465,0,8.084,3.62,8.084,8.084C54.566,260.465,50.948,264.084,46.482,264.084z" /> <path style={{ fill: '#231F20' }} d="M503.916,264.084h-38.398c-4.466,0-8.084-3.62-8.084-8.084c0-4.465,3.618-8.084,8.084-8.084h38.398 c4.466,0,8.084,3.62,8.084,8.084C512,260.465,508.382,264.084,503.916,264.084z" /> <path style={{ fill: '#231F20' }} d="M80.698,439.387c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.432 l27.151-27.15c3.156-3.157,8.275-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432L86.413,437.02 C84.836,438.598,82.766,439.387,80.698,439.387z" /> <path style={{ fill: '#231F20' }} d="M404.149,115.932c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.433 l27.152-27.15c3.157-3.158,8.276-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432l-27.152,27.15 C408.287,115.143,406.218,115.932,404.149,115.932z" /> <path style={{ fill: '#231F20' }} d="M256,511.999c-4.466,0-8.084-3.62-8.084-8.084v-38.397c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.397C264.084,508.379,260.466,511.999,256,511.999z" /> <path style={{ fill: '#231F20' }} d="M256,54.567c-4.466,0-8.084-3.62-8.084-8.084V8.085c0-4.465,3.618-8.084,8.084-8.084 s8.084,3.62,8.084,8.084v38.398C264.084,50.948,260.466,54.567,256,54.567z" /> <path style={{ fill: '#231F20' }} d="M431.301,439.387c-2.068,0-4.138-0.789-5.716-2.368l-27.152-27.151 c-3.158-3.157-3.158-8.276-0.001-11.432c3.158-3.157,8.277-3.157,11.432,0l27.152,27.15c3.158,3.157,3.158,8.276,0.001,11.432 C435.439,438.598,433.37,439.387,431.301,439.387z" /> <path style={{ fill: '#231F20' }} d="M107.85,115.934c-2.07,0-4.138-0.789-5.717-2.368L74.982,86.415c-3.157-3.157-3.157-8.276,0-11.432 c3.159-3.157,8.277-3.157,11.433,0l27.151,27.152c3.157,3.157,3.157,8.276,0,11.433 C111.988,115.145,109.918,115.934,107.85,115.934z" /> </g> </g></svg>
                    </span>
                </motion.div>
            </div>
        </>
    )
}

export default Home
