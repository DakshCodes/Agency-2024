import React from 'react'
import "../../App.css";
import "./Services.css"

import SingleServiceCard from './SingleServiceCard';
import { motion } from 'framer-motion'
import { serviceData } from './serviceData';
const Services = () => {
  return (
    <main className=' lg:h-fit lg:pb-[20rem]  bg-[#000] py-16 my-20 '>
      <div className=' mx-auto relative h-fit w-fit max-w-[1290px]'>
        <div className=' relative  flex flex-col lg:flex-row  item-center lg:items-end gap-4 lg:gap-0  border-red-400'>
          <div className="triangle"></div>
          {/* left div */}
          <div className='w-fit h-fit z-50 lg:w-[40%] lg:h-[22rem] p-8 left-side flex flex-col'>
            <div className='text-5xl flex flex-wrap items-center gap-4 break-words font-semibold moment'>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "backOut" }}
                viewport={{ once: true }}
              >Services</motion.p>
              <div className='rotate-45'>
                <motion.svg
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  viewport={{ once: true }}
                  width="80"
                  height="50"
                  viewBox="0 0 21 17"
                  fill="none"
                  className='text-3xl'
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.484 9.348h.618v-2h-.617l-.197-.051a17.401 17.401 0 0 1-3.5-1.377c-2.002-1.063-3.798-2.61-4.12-4.732l-.149-.99-1.977.3.15.988c.425 2.816 2.56 4.69 4.554 5.862H.069v2h13.943c-2.06 1.162-4.302 3.066-4.332 5.938l-.01 1 2 .021.01-1c.02-1.905 1.682-3.396 3.818-4.487a18.846 18.846 0 0 1 2.822-1.142 19.087 19.087 0 0 1 1.164-.33"
                    test="grey"
                    style={{ fill: 'black' }} // Set the color to white
                  ></path>
                </motion.svg>
              </div>
            </div>

            <p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
              viewport={{ once: true }}
              className='michroma break-words block font-semibold lg:hidden mt-4'>At ValueXLabs, we specialize in custom web development solutions for businesses and enterprises. Elevate your online presence with our tailored services. Experience innovation that goes beyond expectations. Here is how we can assist you</p>
          </div>

          {/* right div */}

          <div className='w-full  p-12 pt-24 hidden lg:block lg:w-[60%] h-[25rem] right-side '>
            <div className='flex items-center justify-center  gap-8 border-black'>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "backOut" }}
                viewport={{ once: true }}
                className='urban font-semibold text-justify '>
                At ValueXLabs, we specialize in custom web development solutions for businesses and enterprises. Elevate your online presence with our tailored services. Experience innovation that goes beyond expectations. Here is how we can assist you
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "backOut" }}
                viewport={{ once: true }}
                className='my-4 urban border-[1.8px] px-4 py-1  border-black w-[4rem] rounded-full min-w-fit h-fit'>Get Started</motion.button>
            </div>
          </div>




        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
          className='text-white  lg:absolute p-4 top-[25rem] md:top-[14rem] grid grid-cols-1 z-[500] lg:grid-cols-3 gap-4  border-red-500'>

          {
            serviceData.map((item, index) => {
              return (
                <>
                  <SingleServiceCard items = {item} />
                </>
              )
            })
          }
        </motion.div>
      </div>
    </main>
  )
}

export default Services
