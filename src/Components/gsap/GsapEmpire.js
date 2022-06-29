import { useLayoutEffect,  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";

import './gsapEmpireStyle.scss'

import img1 from '../../images/empireThumbnail.png'

import { motion } from 'framer-motion'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
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
    left: 5%;
    min-height: 100vh;
    /* width: 65%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2{
        width: 40rem;
        margin-right: 6rem;
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
        bottom: -10% !important;
}
`

const Product = ({img, title=''}) => {
    return(
        <Item
        initial={{filter: 'grayscale(100%)'}}
        whileInView={{filter: 'grayscale(0%)'}}
        transition={{duration: 0.5}}
        viewport={{once: false, amount: 'all'}}
        >
            <img src={img} alt={title}/>
            <h4>{title}</h4>
        </Item>
    )
}

const GsapEmpire = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null)
    const trigger = useRef(null)
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
  <Section ref={ref} id='shop'>

      <Right ref={horizontalRef}>
        <h2>This is a multipage website, built with React.</h2>
          <Product img={img1} title='Homepage' />
          <Product img={img1} title='About us' />
          <Product img={img1} title='Contact' />
          <Product img={img1} title='Aesthetic Medicine' />
          <Product img={img1} title='Dentistry' />
          <Product img={img1} title='Dermatology' />
          <Product img={img1} title='Nutrition' />
          <Product img={img1} title='Cosmetics' />
          <Product img={img1} title='Ozone therapy' />
          
      </Right>
  </Section>
)
}

export default GsapEmpire