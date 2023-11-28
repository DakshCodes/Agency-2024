import React from 'react'

import "./Testimonial.css"
import { testimonialData } from './testimonialData'
import { FaQuoteLeft } from 'react-icons/fa'



const Testimonial = () => {
    return (
        <>
            <article className=' bg-[#000] text-white max-h-fit py-8 px-4 min-h-screen'>
                <div className='flex flex-col max-w-[1290px]  mx-auto'>

                    <div className='moment text-3xl'>

                        <div>
                            <h1>HERE'S WHAT OUR</h1>
                            <h1>CLIENT HAS TO SAY</h1>
                        </div>

                    </div>

                    {/* Testimonial Card */}
                    <div className=' mt-24 grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3'>


                        {
                            testimonialData && testimonialData.map((item, index) => {
                                return (
                                    <>
                                        <div className='relative  flex items-center justify-center '>

                                            <div className='quote absolute left-8 -top-8 z-[30]'><FaQuoteLeft className=' quote text-4xl hover:-rotate-12 hover:transition-all hover:duration-400 hover:ease-in-out text-[#d4ff3f]' /></div>

                                            <div className='testimonial-card flex flex-col'>
                                                <p className='flex-1 urban'>{item.quote}</p>

                                                <div className='w-full mt-8 flex gap-4 items-center'>

                                                    <div className='rounded-full w-[5rem] h-[5rem] border-2 border-[#d4ff3f] flex items-center justify-self-center p-1 '><img src={item.img} className='w-full object-cover rounded-full' alt="" /></div>

                                                    <div className='flex-auto'>
                                                        <h1 className='text-left urban font-semibold'>{item.name}</h1>
                                                        <p className='urban text-[#a2a2a2]'>{item.prof}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>


                </div>
            </article>
        </>
    )
}

export default Testimonial
