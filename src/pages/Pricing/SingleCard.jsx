import React from 'react'
import { FaArrowRight, FaCode } from "react-icons/fa"

const SingleCard = ({ bg, fg, items }) => {
    // console.log(object)
    return (
        <>
            <div className={` ${bg} ${bg === "bg-[#202020]" ? "text-white lg:scale-110":"text-black font-semibold"} border border-black  py-8  px-10 rounded-2xl h-fit w-fit min-w-fit`}>
                <div className={`rounded-full border-[2.5px] border-dashed border-[#d4ff3f] ${bg === "bg-[#202020]" ? "text-[#d4ff3f]":"text-black"} flex items-center justify-center w-[4rem] h-[4rem] `}>
                    <FaCode className='text-2xl ' />
                </div>
                <div className='urban text-md mt-6 mb-4 border-4 max-w-full  min-w-fit h-fit p-1 px-4 rounded-full'><h1>{items.headline}</h1></div>

                <div className={`moment text-3xl ${bg === "bg-[#202020]" ? "text-[#d4ff3f]":"text-black"} text-[#d4ff3f] px-2 mb-12`}>{items.price}</div>


                <div className='urban my-2 mb-6'>
                    {items.para}
                </div>

                <div className=' flex gap-4 mb-4 urban'>
                    <div className='bg-[#d4ff3f] flex items-center justify-center rounded-full w-[1.5rem] h-[1.5rem]'><FaArrowRight className='text-black text-[0.8rem]' /></div>
                    <div>{items.p1}</div>
                </div>
                <div className=' flex gap-4 mb-4 urban'>
                    <div className='bg-[#d4ff3f] flex items-center justify-center rounded-full w-[1.5rem] h-[1.5rem]'><FaArrowRight className='text-black text-[0.8rem]' /></div>
                    <div className=''>{items.p2}</div>
                </div>
                <div className=' flex gap-4 mb-4 urban'>
                    <div className='bg-[#d4ff3f] flex items-center justify-center rounded-full w-[1.5rem] h-[1.5rem]'><FaArrowRight className='text-black text-[0.8rem]' /></div>
                    <div className=''>{items.p3}</div>
                </div>
                <div className=' flex gap-4 mb-4 urban'>
                    <div className='bg-[#d4ff3f] flex items-center justify-center rounded-full w-[1.5rem] h-[1.5rem]'><FaArrowRight className='text-black text-[0.8rem]' /></div>
                    <div className=''>{items.p4}</div>
                </div>
                <div className=' flex gap-4 mb-4 w-full urban'>
                    <div className='bg-[#d4ff3f] flex items-center justify-center rounded-full !w-[1.6rem] !h-[1.5rem]'><FaArrowRight className='text-black text-[0.8rem]' /></div>
                    <div className=' w-full'>{items.p5}</div>
                </div>



                {/* button */}

                <div className='mt-10  w-full h-fit py-4 px-4 rounded-full text-center bg-[#d4ff3f] text-black font-bold'>
                    <button>Click here to get started</button>
                </div>
            </div>
        </>
    )
}

export default SingleCard
