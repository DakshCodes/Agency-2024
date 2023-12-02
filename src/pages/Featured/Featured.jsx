import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import { Animation } from './Animation';
import './Featured.css';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Featured = () => {
    useEffect(() => {
        Animation();

    }, []);

    return (
        <div className="featured-main">
            <div id="main-featured">
                <div id="featured-top">
                    <h1 id="top-h1">WhyValueX</h1>
                </div>
                <div id="featured-center">
                    <div className="featured-content">
                        <div className="why-choose">
                            <div className="choose-head">
                                <motion.p
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.3 }}
                                >Why You Choose Us ?</motion.p>
                            </div>
                            <div className="choose-para">
                                <motion.p
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.3 }}
                                >
                                    we strive to  deliver the best out of us to make your business grow and reach heights!
                                    find out all you need to know about our creativity
                                </motion.p>
                            </div>
                            <div className="choose-btn">
                                <Link to={'/about'}>
                                    <motion.p
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.3 }}
                                    >
                                        About More
                                        <svg
                                            height="30"
                                            viewBox="0 0 21 17"
                                            fill="none"
                                            className='text-xl '
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.484 9.348h.618v-2h-.617l-.197-.051a17.401 17.401 0 0 1-3.5-1.377c-2.002-1.063-3.798-2.61-4.12-4.732l-.149-.99-1.977.3.15.988c.425 2.816 2.56 4.69 4.554 5.862H.069v2h13.943c-2.06 1.162-4.302 3.066-4.332 5.938l-.01 1 2 .021.01-1c.02-1.905 1.682-3.396 3.818-4.487a18.846 18.846 0 0 1 2.822-1.142 19.087 19.087 0 0 1 1.164-.33"
                                                test="grey"
                                                style={{ fill: 'black' }} // Set the color to white
                                            ></path>
                                        </svg>
                                    </motion.p>
                                </Link>
                            </div>
                        </div>
                        <div className="why-points">
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3 }}
                                className="points-circle">
                                <div className="points-box">
                                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#acacff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31.74,7.19,13.36,14.85a1,1,0,0,0-.62.93V32.11h0A22.89,22.89,0,0,0,23.93,51.78l8.18,4.86,8.06-4.85a22.87,22.87,0,0,0,11.09-19.6V14.84a1,1,0,0,0-.65-.94L32.48,7.18A1,1,0,0,0,31.74,7.19Z"></path><polyline points="22.01 33.5 29.44 39.12 42.56 20.69"></polyline></g></svg>
                                    <p>Fully Secured</p>
                                </div>
                                <div className="points-box">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#d5ff3f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#d5ff3f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    <p>Easy To Edit</p>
                                </div>
                                <div className="points-box">
                                    <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <style type="text/css" dangerouslySetInnerHTML={{ __html: " .linesandangles_een{fill:#ff7c7c;} " }} /> <path className="linesandangles_een" d="M20,20.854c0-1.136,0.642-2.175,1.658-2.683L24,17L17,3h-2L8,17l2.342,1.171 C11.358,18.679,12,19.718,12,20.854V21h-2v8h12v-8h-2V20.854z M11.236,16.382l-0.553-0.276L15,7.472V15h2V7.472l4.317,8.633 l-0.553,0.276C19.059,17.234,18,18.948,18,20.854V21h-4v-0.146C14,18.948,12.941,17.234,11.236,16.382z M20,27h-8v-4h8V27z" /> </g></svg>
                                    <p>Design & Branding</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3 }}
                                className="points-circle">
                                <div className="points-box">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#acacff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V12" stroke="#acacff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.24 16.24L12 12" stroke="#acacff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    <p>Save Hours</p>
                                </div>
                                <div className="points-box">
                                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#d5ff3f" d="M18,12.382V17a1,1,0,0,1-1,1H12.277c.142-.125.278-.252.407-.379L14.329,16H16V14.353Zm0-6.17a3.129,3.129,0,0,0-3.328.685L13.553,8H2v8H6.3a3.49,3.49,0,0,0-.283,2H1a1,1,0,0,1-1-1V4A1,1,0,0,1,1,3H4V1A1,1,0,0,1,6,1V3h6V1a1,1,0,0,1,2,0V3h3a1,1,0,0,1,1,1V6.212Z"></path> <path fill="#d5ff3f" d="M17.675,9.9l-6.4,6.3c-.437.431-2.762,2.005-3.2,1.571s1.169-2.714,1.6-3.145l6.4-6.3a1.135,1.135,0,0,1,1.59.008A1.1,1.1,0,0,1,17.675,9.9Z"></path></g></svg>
                                    <p>Easy To Manage</p>
                                </div>
                                <div className="points-box">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.38 12L10.79 14.42L15.62 9.57996" stroke="#ff7c7c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.75 2.44995C11.44 1.85995 12.57 1.85995 13.27 2.44995L14.85 3.80995C15.15 4.06995 15.71 4.27995 16.11 4.27995H17.81C18.87 4.27995 19.74 5.14995 19.74 6.20995V7.90995C19.74 8.29995 19.95 8.86995 20.21 9.16995L21.57 10.7499C22.16 11.4399 22.16 12.5699 21.57 13.2699L20.21 14.8499C19.95 15.1499 19.74 15.7099 19.74 16.1099V17.8099C19.74 18.8699 18.87 19.7399 17.81 19.7399H16.11C15.72 19.7399 15.15 19.9499 14.85 20.2099L13.27 21.5699C12.58 22.1599 11.45 22.1599 10.75 21.5699L9.17 20.2099C8.87 19.9499 8.31 19.7399 7.91 19.7399H6.18C5.12 19.7399 4.25 18.8699 4.25 17.8099V16.0999C4.25 15.7099 4.04 15.1499 3.79 14.8499L2.44 13.2599C1.86 12.5699 1.86 11.4499 2.44 10.7599L3.79 9.16995C4.04 8.86995 4.25 8.30995 4.25 7.91995V6.19995C4.25 5.13995 5.12 4.26995 6.18 4.26995H7.91C8.3 4.26995 8.87 4.05995 9.17 3.79995L10.75 2.44995Z" stroke="#ff7c7c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    <p>Buget Freindly</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3 }}
                                className="points-circle">
                                <div className="points-box">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 12C23 12.3545 22.9832 12.7051 22.9504 13.051C22.3838 12.4841 21.7204 12.014 20.9871 11.6675C20.8122 6.85477 16.8555 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12C3.00683 16.8555 6.85477 20.8122 11.6675 20.9871C12.014 21.7204 12.4841 22.3838 13.051 22.9504C12.7051 22.9832 12.3545 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="#acacff"></path> <path d="M13 11.8812L13.8426 12.3677C13.2847 12.7802 12.7902 13.2737 12.3766 13.8307L11.5174 13.3346C11.3437 13.2343 11.2115 13.0898 11.1267 12.9235C11 12.7274 11 12.4667 11 12.4667V6C11 5.44771 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11.8812Z" fill="#acacff"></path> <path d="M15.2929 17.7071C15.6834 17.3166 16.3166 17.3166 16.7071 17.7071L17.3482 18.3482L19.2473 16.4491C19.6379 16.0586 20.271 16.0586 20.6615 16.4491C21.0521 16.8397 21.0521 17.4728 20.6615 17.8634L18.1213 20.4036C18.0349 20.49 17.9367 20.5573 17.8318 20.6054C17.4488 20.8294 16.9487 20.7772 16.6203 20.4487L15.2929 19.1213C14.9024 18.7308 14.9024 18.0976 15.2929 17.7071Z" fill="#acacff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24ZM18 22.0181C15.7809 22.0181 13.9819 20.2191 13.9819 18C13.9819 15.7809 15.7809 13.9819 18 13.9819C20.2191 13.9819 22.0181 15.7809 22.0181 18C22.0181 20.2191 20.2191 22.0181 18 22.0181Z" fill="#acacff"></path> </g></svg>
                                    <p>Time Convinient</p>
                                </div>
                                <div className="points-box">
                                    <svg fill="#d5ff3f" height="200px" width="200px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 1.3 256 256" xml:space="preserve" stroke="#d5ff3f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M127.4,102c15.3,0,27.5-12.2,27.5-27.5S142.7,47,127.4,47S99.9,59.3,99.9,74.5S112.2,102,127.4,102z M12.4,108.2h41.9v41.9 H12.4V108.2z M224.1,108.2l-20.8,41.9h41.9L224.1,108.2z M240.8,157.3h-43.1L173,121.2c-7.2-10.3-15.6-14.7-27.2-14.7h-36.7 c-11.7,0-20,4.7-27.2,14.7l-24.7,36.1H14.4c-17.2,0-16.4,24.4-0.3,24.4h49.4c3.9,0,8.6-1.4,11.4-5.6l18.9-26.9v63.9h67.5v-63.9 l18.9,26.9c2.8,4.2,7.5,5.6,11.4,5.6H241C256.9,181.8,258,157.3,240.8,157.3z"></path> </g></svg>
                                    <p>Multiple Option</p>
                                </div>
                                <div className="points-box">
                                    <svg viewBox="0 0 1024 1024" fill="#ff7c7c" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ff7c7c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M678.584675 765.172506v157.995691l75.697852 31.505938V723.768586a429.379161 429.379161 0 0 1-75.697852 41.40392zM269.717473 723.768586V953.098138l75.697852-31.505938v-156.419694a429.309162 429.309162 0 0 1-75.697852-41.40392zM511.999 798.78444a428.955162 428.955162 0 0 1-105.993793-13.241974v238.457534L511.999 979.886086 617.992793 1023.998V785.542466A429.025162 429.025162 0 0 1 511.999 798.78444zM511.999 0C308.479398 0 142.903721 165.575677 142.903721 369.097279S308.479398 738.192558 511.999 738.192558s369.097279-165.575677 369.097279-369.097279S715.520602 0 511.999 0z m0 660.198711c-161.345685 0-292.611428-131.265744-292.611428-292.611429 0-161.347685 131.265744-292.613428 292.611428-292.613428s292.611428 131.265744 292.611428 292.613428c0 161.347685-131.263744 292.611428-292.611428 292.611429zM511.999 135.563735c-127.93575 0-232.021547 104.083797-232.021547 232.023547S384.06325 599.606829 511.999 599.606829s232.021547-104.083797 232.021547-232.021547c0-127.93775-104.083797-232.021547-232.021547-232.021547zM607.360814 502.999018L511.999 452.865115 416.639186 502.999018l18.211965-106.183793-77.14785-75.199853 106.617792-15.49397L511.999 209.509591l47.679907 96.611811 106.617792 15.49397-77.14785 75.199853 18.211965 106.183793z"></path></g></svg>
                                    <p>High Quality</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3 }}
                                className="points-circle">
                                <div className="points-box">
                                    <svg fill="#acacff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve" stroke="#acacff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M424.569,148.582c-7.12-15.664-15.64-30.37-25.328-43.711c-2.577-3.548-7.542-4.332-11.087-1.759 c-3.548,2.577-4.336,7.539-1.76,11.087c9.062,12.48,17.044,26.259,23.722,40.953c1.33,2.926,4.213,4.654,7.231,4.654 c1.097,0,2.214-0.23,3.28-0.713C424.618,157.279,426.383,152.573,424.569,148.582z"></path> </g> </g> <g> <g> <path d="M441.222,196.502c-2.216-8.86-4.862-17.648-7.865-26.122c-1.466-4.129-6-6.29-10.133-4.829 c-4.133,1.464-6.295,6.002-4.83,10.133c2.835,7.999,5.334,16.298,7.429,24.671c0.902,3.606,4.137,6.013,7.694,6.013 c0.637,0,1.286-0.077,1.932-0.24C439.701,205.065,442.287,200.755,441.222,196.502z"></path> </g> </g> <g> <g> <path d="M429.237,97.156C384.84,52.759,326.402,27.516,263.938,25.54V7.937c0-4.384-3.553-7.937-7.937-7.937 c-4.383,0-7.937,3.553-7.937,7.937V25.54C185.599,27.516,127.16,52.759,82.764,97.156 C36.49,143.429,11.007,204.952,11.007,270.393c0,4.385,3.554,7.937,7.937,7.937h1.975c3.511,0,6.606-2.307,7.607-5.672 c4.941-16.599,20.498-28.193,37.83-28.193c17.332,0,32.888,11.594,37.831,28.193c1.002,3.366,4.096,5.672,7.607,5.672h3.948 c0.073,0,0.143-0.016,0.216-0.018c0.116,0.005,0.232,0.018,0.349,0.018h1.164c4.383,0,7.937-3.553,7.937-7.937 c0-0.819-0.13-1.606-0.361-2.35c6.251-14.229,20.376-23.578,36.131-23.578c15.775,0,29.776,9.213,36.093,23.57 c-0.002,0.785-0.005,1.569-0.005,2.358c0,4.385,3.554,7.937,7.937,7.937h0.423c0.206,0,0.409-0.015,0.611-0.031 c0.127,0.006,0.25,0.031,0.378,0.031h3.95c3.511,0,6.605-2.307,7.607-5.672c4.173-14.013,15.909-24.458,29.892-27.373v211.79 v3.811c0,0.819,0.125,1.61,0.355,2.353c3.074,27.395,26.368,48.763,54.571,48.763c30.285,0,54.924-24.639,54.924-54.925 c0-4.385-3.553-7.937-7.937-7.937c-4.385,0-7.937,3.553-7.937,7.937c0,21.533-17.518,39.051-39.05,39.051 c-21.532,0-39.051-17.519-39.051-39.051V245.284c13.983,2.915,25.721,13.36,29.892,27.373c1.002,3.366,4.097,5.672,7.608,5.672 h3.948c0.192,0,0.377-0.033,0.566-0.047c0.278,0.03,0.56,0.047,0.846,0.047c4.385,0,7.937-3.553,7.937-7.937 c0-0.788-0.003-1.573-0.006-2.357c6.317-14.357,20.318-23.57,36.094-23.57c16.468,0,31.154,10.217,36.931,25.544l0.003,0.384 c0,4.385,3.553,7.937,7.937,7.937c0.119,0,0.233-0.013,0.349-0.018c0.073,0.002,0.143,0.018,0.216,0.018h3.948 c3.511,0,6.605-2.307,7.608-5.672c4.942-16.598,20.498-28.193,37.83-28.193c17.332,0,32.887,11.594,37.83,28.193 c1.002,3.366,4.097,5.672,7.608,5.672h1.974c4.385,0,7.937-3.553,7.937-7.937C500.994,204.952,475.511,143.429,429.237,97.156z M108.952,248.69c-10.328-12.393-25.871-20.1-42.597-20.1c-14.367,0-27.866,5.683-37.932,15.142 C39.069,152.244,103.832,77.048,189.757,51.05c-14.312,11.857-27.479,27.654-39.005,47.077 C126.515,138.971,111.923,191.838,108.952,248.69z M197.623,242.23c-9.855-8.632-22.672-13.639-36.445-13.639 c-13.476,0-26.1,4.884-35.889,13.218c7.099-98.212,50.254-177.446,105.454-196.268c-6.905,12.403-12.966,30.494-18.132,54.229 C204.192,138.458,198.976,188.348,197.623,242.23z M256.001,228.59c-16.754,0-32.32,7.731-42.647,20.159 c1.073-55.236,6.237-106.405,14.768-145.605c10.652-48.941,22.893-61.872,27.878-61.872s17.227,12.931,27.878,61.872 c8.531,39.201,13.694,90.368,14.767,145.605C288.32,236.321,272.754,228.59,256.001,228.59z M350.823,228.59 c-13.775,0-26.592,5.007-36.445,13.64c-1.352-53.882-6.569-103.773-14.989-142.461c-5.166-23.735-11.226-41.826-18.132-54.229 c55.199,18.823,98.354,98.056,105.454,196.268C376.923,233.474,364.301,228.59,350.823,228.59z M445.646,228.59 c-16.726,0-32.27,7.708-42.597,20.1c-2.971-56.852-17.563-109.72-41.8-150.565c-11.526-19.424-24.693-35.22-39.005-47.078 c85.925,25.998,150.689,101.195,161.335,192.682C473.512,234.273,460.013,228.59,445.646,228.59z"></path> </g> </g> </g></svg>
                                    <p>Quick Support</p>
                                </div>
                                <div className="points-box">
                                    <svg fill="#d5ff3f" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#d5ff3f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect height="4" width="19" x="35" y="58"></rect><path d="M54,20.276a7.733,7.733,0,0,0-7.724-7.724h-.484a1,1,0,0,1-.943-.666A7.317,7.317,0,0,0,31.3,11.272a1,1,0,0,1-1.62.286,7.272,7.272,0,0,0-5.21-2.179,7.351,7.351,0,0,0-7.175,5.839.993.993,0,0,1-1.022.8L16,16a6,6,0,0,0,0,12H46.276A7.733,7.733,0,0,0,54,20.276ZM41,18V16a6.006,6.006,0,0,1,6,6H45A4,4,0,0,0,41,18Zm4,6h2v2H45Z"></path><path d="M58,13a2,2,0,0,0-2,2V30a1,1,0,0,1-.341.752l-7.977,6.98-4.975,4.975-1.414-1.414,6.5-6.5a1.829,1.829,0,0,0-2.586-2.586l-8.036,8.036A3.974,3.974,0,0,0,36,43.071v7.117a3.99,3.99,0,0,0,.2,1.265L37.721,56H52V47.415a6,6,0,0,1,.89-3.144l6.517-10.59a4,4,0,0,0,.593-2.1V15A2,2,0,0,0,58,13Z"></path><path d="M16.207,32.207a1.831,1.831,0,0,0,0,2.586l6.5,6.5-1.414,1.414-4.975-4.975-7.977-6.98A1,1,0,0,1,8,30V15a2,2,0,0,0-4,0V31.585a4,4,0,0,0,.593,2.1l6.517,10.59A6,6,0,0,1,12,47.415V56H26.279L27.8,51.453a3.99,3.99,0,0,0,.2-1.265V43.071a3.974,3.974,0,0,0-1.171-2.828l-8.036-8.036A1.831,1.831,0,0,0,16.207,32.207Z"></path><rect height="4" width="19" x="10" y="58"></rect></g></svg>
                                    <p>Mantaining <br /> Low Fees</p>
                                </div>
                                <div className="points-box">
                                <svg fill="#acacff" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xml:space="preserve" stroke="#acacff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect id="XMLID_2_" x="92.8" y="134.1" width="133.5" height="11.2"></rect> <circle cx="79.9" cy="29.4" r="24.6"></circle> <path d="M117.2,151H75.7v-30.8L54.5,83.7c-0.8-1.5-0.2-3.3,1-4.2c1.5-0.8,3.3-0.2,4.2,1l24.6,42.3c1.9,3.1,5.2,5.4,9.2,5.4h42.3 c6,0,10.8-5,10.8-10.8c0-6-5-10.8-10.8-10.8l-35.4,0.4L72.2,59.6c-2.1-3.7-6.2-5.8-11.2-5.8c-0.6,0-2.3,0.2-2.9,0.4 c-0.6,0.2-1.7,0.4-2.3,0.6c-20.6,6.9-36.9,39.6-36.9,73.3c-0.2,10.2,0,18.7,0.6,26.9c-0.8,9.8,5,19.4,14.6,22.9 c2.5,0.8,5,1.5,7.5,1.5h61.7V237c0,7.9,6.2,14,14,14c7.9,0,14-6.2,14-14v-71.9c0-3.5-1.5-7.3-4.2-9.8 C124.1,152.5,120.5,151,117.2,151z"></path> <polygon points="212,126 212.2,126.2 238,62.9 229.7,59.4 205.9,117.7 152.4,117.7 152.4,126.9 212,126.9 "></polygon> </g> </g></svg>
                                    <p>Modern Solution</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div id="bottom">
                    <h1 id="bottom-h1">WhyValueX</h1>
                </div>
            </div>
        </div>

    )
}

export default Featured
