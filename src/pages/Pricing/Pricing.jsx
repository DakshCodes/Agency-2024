import React from 'react'

import "../../App.css"
import SingleCard from './SingleCard'

const data = [
    {
        headline : "Professional Web Design",
        price : "$800",
        para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quasi nulla deserunt sint corrupti voluptatibus ducimus sapiente quas!",
        p1 : "Bespoke Designs",
        p2 : "Mobile-Friendly:",
        p3 : "Fast Loading ",
        p4 : "Enhanced user experience.",
        p5 : "SEO Optimization"
    },
    {
        headline : "Professional Web Development (All)",
        price : "$2800",
        para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quasi nulla deserunt sint corrupti voluptatibus ducimus sapiente quas!",
        p1 : "Front-End Development",
        p2 : "Back-End Development",
        p3 : "Custom Web Development & SEO",
        p4 : "Security Measures",
        p5 : "Managing the entire process from development to deployment and hosting."
    },
    {
        headline : "Professional Web Dev and Deployment ",
        price : "$1600",
        para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quasi nulla deserunt sint corrupti voluptatibus ducimus sapiente quas!",
        p1 : "Bespoke Designs",
        p2 : "Mobile-Friendly:",
        p3 : "Fast Loading ",
        p4 : "Enhanced user experience.",
        p5 : "SEO Optimization"
    },

]

const Pricing = () => {
    return (
        <>
            <main className='h-fit '>
                <div className=' p-4 my-[20rem] mx-auto max-w-[1290px]'>
                    {/* Card Component */}
                    <div className='grid grid-cols-1  border-red-500 w-full lg:grid-cols-3 gap-4'>
                        <div className='col-span-1'><SingleCard bg={"bg-[#fff]"} fg={"#202020"} items = {data[0]} /></div>
                        <div className='col-span-1'><SingleCard bg={"bg-[#202020]"} fg={"#fff"} items = {data[1]}/></div>
                        <div className='col-span-1'><SingleCard bg={"bg-[#fff]"} fg={"#202020"} items = {data[2]}/></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Pricing
