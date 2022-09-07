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
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
    overflow: hidden;
    color: black;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Button = styled.div`

    position: absolute;
    width: 75%;
    top: 0vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
  
    .stroke {
      stroke: #F58840;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: stroke 2s ease-out forwards;
    }
    
    @keyframes stroke {
      from
            {stroke-dashoffset: 1000}
        to
            {stroke-dashoffset: 0}

    }
  .text {
    font-size: 2rem;
  }

    button {
      font-size: 1.5rem;
      border: 2px solid black;
      padding: 5px 30px 5px 30px;
      border-radius: 30px;
      background-color: transparent;
      cursor: default;

      :nth-child(1) {
        border: none;
        margin-right: 15rem;

        :hover {
          text {
            fill: none;
            stroke: black;
            stroke-width: 1.5;
          }
          }
        }
      }

      @media screen and (max-width: 600px) {
        top: -10vh;
        width: 100vw !important; 
        display: block !important;

        svg {
          transform: scale(0.75);
        }

        button {
          font-size: 1.3rem;
          :nth-child(1) {
            border: none;
            margin-right: unset;
            margin-bottom: 1rem;
        }
      }
    }

    @media screen and (min-width: 601px) and (max-width: 1330px) {
      width: 90%;
      svg {
        transform: scale(0.9);
      }

      button {
        :nth-child(1) {
          padding: unset !important;
          margin-right: unset !important;
        }
      }

    }

`

const Title = styled.h1`
    font-family: 'Abril Fatface';
    font-size: 10rem;
    line-height: 1;
    margin-bottom: 1rem;

    /* -webkit-text-stroke: 2px black; */
    color: #eadede;
    position: fixed;
    margin-top: 48vh;


    mix-blend-mode: difference;
    /* text-transform: uppercase; */

    @media screen and (max-width: 600px) {
      font-size: 6rem;
      margin-top: 45vh !important;
      line-height: 7rem;
    }
`

const Left = styled.div`
    max-width: 70%;
    position: absolute;
    bottom: 15vh;

    p {
        font-size: 1.3rem;
        font-weight: 300;
        width: 100%;
        margin: 0 auto;
        font-family: 'Urbanist', sans-serif;
        text-align: left;
    }

    @media screen and (max-width: 600px) {
      width: 85% !important;

      p {
        font-size: 1.1rem !important;
        text-align: unset !important;
      }
    }
`

const WorkEmpire = () => {
  

  return (
    <div className='workEmpire'>
    <Section style={{backgroundColor: "#eadede"}}>
      <Button data-scroll data-scroll-speed='-6'>
        <button><a href='https://www.empireclinic.it/' target='_blank' rel='noreferrer'><svg className="text" width="100%" height="80px" aria-hidden="true">
          <text className="text" x="0" y="0" dy="1em" fill="currentColor">View the live site</text>
          <path className="stroke" style={{transform: "translateY(1em) scale(1)"}} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"></path>
        </svg>
        </a>
        </button>
        <button>Design</button>
        <button>Development</button>
      </Button>

      <Title data-scroll data-scroll-speed="-6">Empire Clinic</Title>

      <Left data-scroll data-scroll-speed="2">
            <p>
            Empire Clinic is a medical spa located in Rome, Italy. The main style of Empire Clinic is the comibination of classic and modern.
            </p>
      </Left>
    </Section>

    <GsapEmpire />
    </div>
  )
}

export default WorkEmpire