import React, {useRef, useLayoutEffect} from 'react'
import HorizontalText from '../../horizontal-moving-text/HorizontalText'
import './webDevelopmentStyle.scss'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import img1 from '../../../images/empireThumbnail.png'

import { motion } from 'framer-motion'
import HorizontalLeft from '../../horizontal-moving-text/HorizontalLeft'

const Section = styled.section`
    position: relative;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Right = styled.div`
    position: absolute;
    left: 2%;

    background-color: ${props => props.theme.grey};
    /* width: 65%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2{
        width: 40rem;
        margin-right: 6rem;
        color: black;
    }
`

const Item = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40rem;
    margin-right: 6rem;

    img {
        width: 100%;
        height: auto;
        cursor: pointer;
        position: relative;
    }

    h4 {
      display: inline-block;
        width: fit-content;
        font-weight: 500;
        text-align: justify;
        justify-content: center;
        position: absolute;
        visibility: hidden;
}

    &:hover {
        background-color: black;
        
        img{
            opacity: .8;
        }

        h4 {
            visibility: visible;
        }
    }
`

const Product = ({img, title='', href}) => {
    return(
        <Item
        >
            <img src={img} alt={title}/>
            <h4><a href={href}>{title}</a></h4>
        </Item>
    )
}

const WebDevelopment = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null)
    const horizontalRef = useRef(null)

    useLayoutEffect(() => {
      let element = ref.current
      let scrollingElement = horizontalRef.current

      let pinWrapWidth = scrollingElement.offsetWidth

      let tl = gsap.timeline()

      setTimeout(() => {
          tl.to(element, {
              scrollTrigger: {
                  trigger: element,
                  start: 'top top',
                  end: pinWrapWidth,
                  scroller: '.App', // locomotive element
                  scrub: true,
                  pin: true,
                  // markers: true
              },
              // we need to increase the scrolling height of this element same as scrolling width
              height: `${scrollingElement.scrollWidth}px`,
              ease: 'none',
          })

          // horizontal scrolling
          tl.to(scrollingElement, {
              scrollTrigger: {
                  trigger: scrollingElement,
                  start: 'top top',
                  end: pinWrapWidth,
                  scroller: '.App', // locomotive element
                  scrub: true,
                  // markers: true
              },
              // we need to increase the scrolling height of this element same as scrolling width
              x: -pinWrapWidth,
              ease: 'none',
          })

          ScrollTrigger.refresh()
      }, 1000)

      return () => {
          // Let's clear instances
          tl.kill()
          ScrollTrigger.kill()
      }
  })

  return (
    <div className='web-dev'>
        <Section ref={ref} id='work'>
        <HorizontalText text={"Website \u00a0  •"}/>
      <Right ref={horizontalRef}>
          <Product img={img1} title='Empire Clinic' href='/work-empire-clinic-website'/>
          <Product img={img1} title='About us' />
          <Product img={img1} title='Contact' />
          <Product img={img1} title='Aesthetic Medicine' />
          <Product img={img1} title='Dentistry' />
          <Product img={img1} title='Dermatology' />
          <Product img={img1} title='Nutrition' />
          <Product img={img1} title='Cosmetics' />
          <Product img={img1} title='Ozone therapy' />
          
      </Right>
      <HorizontalLeft text={"Development \u00a0  •"} boxWid={610} numOfBoxes={6} />
  </Section>
    </div>
  )
}

export default WebDevelopment