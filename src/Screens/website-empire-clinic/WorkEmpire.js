import React, {useEffect, useLayoutEffect, useRef} from 'react'
import './workEmpireStyles.scss'
import styled from 'styled-components'
import gsap from 'gsap'
import locomotiveScroll from 'locomotive-scroll'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

import GsapEmpire from '../../Components/gsap/GsapEmpire'

const Section = styled.section`
    position: relative;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Title = styled(motion.h1)`
    font-family: 'Abril Fatface';
    font-size: 5rem;
    line-height: 1;
    margin-bottom: 1rem;
    position: absolute;
    bottom: 100%;
    left: 10vw;
    /* text-transform: uppercase; */
`

const Left = styled(motion.div)`
    width: 35%;

    position: absolute;
    right: 0;
    bottom: 0%;
    min-height: 100vh;

    p {
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }
`

const Website = styled(motion.a)`
  min-height: 100vh;
  font-size: 5vw;
  position: absolute;
  right: 0;
  text-decoration: underline;
  color: white;

`


const WorkEmpire = () => {
  gsap.registerPlugin(ScrollTrigger);
  let ref = useRef(null)
  let bottomRef = useRef(null)
  let horizontalScrollRef = useRef(null)
  

  let tl = new gsap.timeline()

  useEffect(() => {
    // const scroller = new locomotiveScroll({
    //   el: ref,
    //   smooth: true,
    //   getDirection: true
    // });
  
    // scroller.on("scroll", ScrollTrigger.update);
  
    // ScrollTrigger.scrollerProxy(ref, {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? scroller.scrollTo(value, 0, 0)
    //       : scroller.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       left: 0,
    //       top: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     };
    //   },
    //   pinType: ref.style.transform ? "transform" : "fixed"
    // });

    setTimeout(() => {
      tl.to(ref, {
        scrollTrigger: {
          trigger: horizontalScrollRef,
          start:"top 100%",
          end: "bottom",
          scroller: '.App',
          markers: true,
          scrub: true,
          onEnter: () => {
            gsap.to('.App', { duration: 1.0, backgroundColor: '#8E8B82', color: "#F3F3F3", overwrite: "auto"})
          },
          
          onLeaveBack: () => {
            gsap.to('.App', { duration: 1.0, backgroundColor: '#072227', color: "#bcb8ad", overwrite: "auto"})
          },
      }
      })

      tl.to(ref, {
        scrollTrigger: {
          trigger: bottomRef,
          start:"top 100%",
          end: "bottom",
          scroller: '.App',
          markers: true,
          scrub: true,
          onEnter: () => {
            gsap.to('.App', { duration: 1.0, backgroundColor: '#bcb8ad', color: '#343434', overwrite: "auto"})
          },
          
          onLeaveBack: () => {
            gsap.to('.App', { duration: 1.0, backgroundColor: '#8E8B82', overwrite: "auto"})
          },
      }
      })
    }, 1000)
      ScrollTrigger.refresh()
return () => {
  // Let's clear instances
  tl.kill()
  ScrollTrigger.kill()
}
  }, [tl])

  return (
    <div className='workEmpire' ref={el => ref = el}>
    <Section>
      <Title
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 1, ease: 'easeInOut'}}
      data-scroll data-scroll-speed="4"><span >Empire</span><span>Clinic</span><span>Website</span></Title>
        <Left
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{delay: 0.5, duration: 1, ease: "easeInOut"}}
        data-scroll data-scroll-speed="2">
            <p>
              Designed the entire website and implemented the design with React framework.
            </p>
        </Left>
    </Section>
    <div ref={el => horizontalScrollRef = el}>
      <GsapEmpire />
    </div>

    <Section ref={el => bottomRef = el} >
      <Website data-scroll data-scroll-speed="2"><a href='https://www.empireclinic.it/' target='_blank' rel='noreferrer'>https://www.empireclinic.it/</a></Website>
    </Section>
    </div>
  )
}

export default WorkEmpire