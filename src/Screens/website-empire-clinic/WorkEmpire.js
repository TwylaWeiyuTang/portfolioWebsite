import React from 'react'
import GsapEmpire from '../../Components/gsap/GsapEmpire'
import './workEmpireStyles.scss'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
    z-index: 11;
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
    z-index: 5;
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

  z-index: 5;
`


const WorkEmpire = () => {
  return (
    <div>
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
    <GsapEmpire />

    <Section>
      <Website data-scroll data-scroll-speed="2"><a href='https://www.empireclinic.it/' target='_blank' rel='noreferrer'>https://www.empireclinic.it/</a></Website>
    </Section>
    </div>
  )
}

export default WorkEmpire