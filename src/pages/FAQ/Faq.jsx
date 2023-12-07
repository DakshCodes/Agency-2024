import React from 'react'
import './Faq.css'



const Faq = () => {
    return (
        <div className='h-[max-content] w-full bg-[#fff]'>
            <section className="!bg-[#fff] h-full w-full p-10">
                <div className=" w-full px-6 py-20 mx-auto bg-[#fff]">
                    <h1 className="text-2xl font-semibold text-center text-[#000] lg:text-4xl ">Frequently asked questions</h1>
                    <div className="mt-12 space-y-8">
                        <div className="border-2 border-gray-600 rounded-lg">
                            <button className="flex items-center justify-between w-full p-8">
                                <h1 className="font-semibold text-gray-700 ">How i can play for my appoinment ?</h1>
                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                    </svg>
                                </span>
                            </button>
                            <hr className="border-gray-600" />
                            <p className="p-8 text-sm text-[#000] ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg">
                            <button className="flex items-center justify-between w-full p-8">
                                <h1 className="font-semibold text-gray-700 ">Is the cost of the appoinment covered by private health insurance?</h1>
                                <span className="text-white bg-blue-500 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Faq
