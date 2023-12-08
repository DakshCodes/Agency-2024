import React from 'react'
import { CgWebsite } from "react-icons/cg"
import { FaCheck } from "react-icons/fa"


const SingleServiceCard = ({ items }) => {
    return (
        <>
            <div className='bg-[#202020] rounded-3xl flex flex-col text-white h-full max-w-full min-w-fit p-8 px-8  z-[60] '>

                <div className='bg-[#3e3e3e] w-fit p-4 rounded-xl flex items-center my-4 justify-center'>

                    <items.icon className='text-3xl' />
                </div>

                <div className='flex flex-auto items-center  w-fit break-words my-4 justify-center'>
                    <h3 className='urban font-semibold text-xl'>{items.name}</h3>
                </div>

                <div className='text-[#b3b3b3] flex-1 w-full font-semibold urban text-base'>
                    <div className=' flex items-start justify-center flex-1 mt-3'>
                        <FaCheck className='text-[#d4ff3f] mr-2  text-xl w-fit' />
                        <p className='text-justify w-auto'>{items.p1}</p>
                    </div>
                    <div className=' flex items-start justify-between flex-1 mt-3'>
                        <FaCheck className='text-[#d4ff3f] mr-2  text-xl w-fit' />
                        <p className='text-justify w-auto'>{items.p2}</p>
                    </div>
                    <div className=' flex items-start justify-between flex-1 mt-3 mb-4    '>
                        <FaCheck className='text-[#d4ff3f] mr-2  text-xl w-fit' />
                        <p className='text-justify w-auto'>{items.p3}</p>
                    </div>
                </div>

                {/* <button className='flex items-center justify-center gap-4 border mt-8 px-8 h-fit w-fit py-4 rounded-xl hover:bg-[#d4ff3f] hover:text-black font-semibold border-[#7c7c7c]'>Explore More3
                    <svg
                        width="21"
                        height="17"
                        viewBox="0 0 21 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.484 9.348h.618v-2h-.617l-.197-.051a17.401 17.401 0 0 1-3.5-1.377c-2.002-1.063-3.798-2.61-4.12-4.732l-.149-.99-1.977.3.15.988c.425 2.816 2.56 4.69 4.554 5.862H.069v2h13.943c-2.06 1.162-4.302 3.066-4.332 5.938l-.01 1 2 .021.01-1c.02-1.905 1.682-3.396 3.818-4.487a18.846 18.846 0 0 1 2.822-1.142 19.087 19.087 0 0 1 1.164-.33"
                            test="grey"
                            style={{ fill: 'white' }} // Set the color to white
                        ></path>
                    </svg>

                </button> */}
            </div>
        </>
    )
}

export default SingleServiceCard
