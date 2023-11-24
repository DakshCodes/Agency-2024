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
          <svg
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
              style={{ fill: '#fff' }} // Set the color to white
            ></path>
          </svg>
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
