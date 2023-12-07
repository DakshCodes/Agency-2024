import React from 'react'

import "../../App.css"
import SingleCard from './SingleCard'
import { motion } from 'framer-motion'

const data = [
    {
        headline: "Single Landing Page(with advanced animations) + VXL-107",
        price: "699",
        para: "Introducing our Single Landing Page—a powerful online debut, crafted to showcase your key message or product with compelling design.",
        p1: "Clear and Compelling Messaging",
        p2: "Engage Your Audience",
        p3: "Budget-Friendly Presence",
        p4: "Rapid Online Launch",
        p5: "Mobile-Optimized Design"
    },
    {
        headline: "Websit Improvment (Minor Changes) + VXL-108",
        price: "299",
        para: "Boost your online presence with our Website Improvement , a refining user experience, optimizing performance, and addressing glitches for a polished site",
        p1: "Enhanced User Experience",
        p2: "Performance Optimization",
        p3: "Bug Resolution",
        p4: "Subtle Aesthetic Updates",
        p5: "Efficient Functionality Tweaks"
    },
    {
        headline: "Website Redesign (With micro animations) + VXL-109",
        price: "999",
        para: "Revitalize your online presence with our Website Redesign , a transformative solution to elevate your website's visual appeal and functionality",
        p1: "Animated Visuals",
        p2: "User-Friendly Interactions",
        p3: "Smoother Functionality",
        p4: "Fresh Brand Image",
        p5: "Mobile responsive website"
    },

]

const Pricing = () => {
    return (
        <>
            <main className='h-fit'>

                <div className=' p-4 mt-[5rem] mb-[7rem] mx-auto max-w-[1290px]'>
                    <div className='text-black  mb-[5rem]'>
                        <h1 className=' flex items-center text-4xl moment'>Pricing
                            <motion.svg
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "backOut" }}
                                viewport={{ once: true }}
                                width="80"
                                height="50"
                                viewBox="0 0 21 17"
                                fill="none"
                                className='text-xl -rotate-45'
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.484 9.348h.618v-2h-.617l-.197-.051a17.401 17.401 0 0 1-3.5-1.377c-2.002-1.063-3.798-2.61-4.12-4.732l-.149-.99-1.977.3.15.988c.425 2.816 2.56 4.69 4.554 5.862H.069v2h13.943c-2.06 1.162-4.302 3.066-4.332 5.938l-.01 1 2 .021.01-1c.02-1.905 1.682-3.396 3.818-4.487a18.846 18.846 0 0 1 2.822-1.142 19.087 19.087 0 0 1 1.164-.33"
                                    test="grey"
                                    style={{ fill: 'black' }} // Set the color to white
                                ></path>
                            </motion.svg></h1>
                        <p className='text-lg urban'>That resonates with everyone.</p>
                    </div>
                    {/* Card Component */}
                    <div className='grid grid-cols-1  border-red-500 w-full lg:grid-cols-3 gap-4'>
                        
                        <div className='col-span-1'><SingleCard bg={"bg-[#fff]"} fg={"#202020"} items={data[0]} /></div>
                        <div className='col-span-1'><SingleCard bg={"bg-[#202020]"} fg={"#fff"} items={data[1]} /></div>
                        <div className='col-span-1'><SingleCard bg={"bg-[#fff]"} fg={"#202020"} items={data[2]} /></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Pricing
