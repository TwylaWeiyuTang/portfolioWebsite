import React, {useRef, useEffect} from 'react'
import './heroStyle.scss'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Hero = () => {
        let app = useRef(null)
        let images = useRef(null)
        let content = useRef(null)

        let tl = new gsap.timeline({delay: .8})

        useEffect(() => {

                const headlineFirst = app.children[0]
                const headlineSecond = app.children[2]
                console.log(app.children[2])
                const textP = app.children[1]

                gsap.to(app, {duration: 0, css: {visibility: 'visible'}})

                tl.from(headlineFirst,
                        {duration: 1, y: -100, ease: "power3.easeOut"}, 'start')
                        .from(headlineSecond, {duration: 1, y: 100, ease: "power3.easeOut"}, 'start')
                        .from(textP, {duration: 1, y: 20, opacity: 0, ease: "power3.easeOut", delay: .8})
                    // start means the first timeline and this timeline will run together
                }, [tl])

  return (
        <div 
        className='top' ref={el => app = el}>
                <h1
                data-scroll data-scroll-speed="2" className="title">Twyla</h1>
                <div className='text'>
                <p
                data-scroll data-scroll-speed="2" className='job-1'>UI/UX designer</p>
                <p
                data-scroll data-scroll-speed="2" className='job-2'>Full-stack web developer</p>
                <p
                data-scroll data-scroll-speed="2" className='job-3'>Graphic designer</p>
                </div>
                <h1
                data-scroll data-scroll-speed="2" className='title-1'>Tang</h1>
        </div>
  )
}

export default Hero