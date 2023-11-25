import React, { useEffect } from 'react'
import Featured from '../Featured/Featured'
import Home from '../Home/Home'
import Home2 from '../Home2/Home2'
import Pricing from "../Pricing/Pricing"
import Services from "../Services/Services"

const Landing = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Home />
            <Home2 />
            <Featured />
            <Services />
            <Pricing />

        </>
    )
}

export default Landing
