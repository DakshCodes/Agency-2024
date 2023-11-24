import { useEffect, useRef } from 'react';
import React from 'react'
import Card from '../../components/Card'
import './Home2.css'
import { useScroll } from 'framer-motion';
import { projects } from '../../data';

const Home2 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  return (
    <div className='home2-main'>
      <div className="main-head">
        <h1>
          Selected-Cases
          <div className='dot'></div>
        </h1>
        <p>Creative fuels design, design fuels creativity,be here for more,are you in love with creativity?</p>
      </div>
      <div ref={container} className="portfolios-main">
        {
          projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
          })
        }
      </div>
    </div>
  )
}

export default Home2
