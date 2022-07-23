import React, {useEffect, useRef} from 'react'
import './workEmpireStyles.scss'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

import GsapEmpire from '../../Components/gsap/GsapEmpire'

const Section = styled.section`
    position: relative;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    color: black;

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

    p {
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }

    a {
      position: absolute;
      bottom: 20%;
      text-decoration: underline !important;
      font-size: 2rem;
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

  return (
    <div className='workEmpire' ref={el => ref = el}>
    <Section style={{backgroundColor: "#eadede"}}>
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

            <a href='https://www.empireclinic.it/' target='_blank' rel='noreferrer'>View It Live</a>
        </Left>
    </Section>
    <div ref={el => horizontalScrollRef = el}>
      <GsapEmpire />
    </div>

    <Section ref={el => bottomRef = el} >
      <Website data-scroll data-scroll-speed="2"><a href='https://www.empireclinic.it/' target='_blank' rel='noreferrer'>View It Live</a></Website>
    </Section>
    </div>
  )
}

export default WorkEmpire