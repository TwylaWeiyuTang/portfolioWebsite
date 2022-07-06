import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HorizontalText from '../../horizontal-moving-text/HorizontalText'
import img1 from '../../../images/empireThumbnail.png'
import './graphicDesignStyle.scss'
import HorizontalGraphic from '../../horizontal-moving-text/HorizontalGraphic'

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
            color: white;
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

const GraphicDesign = () => {
    gsap.registerPlugin(ScrollTrigger);
    const graphicRef = useRef(null)
    const graphicHorizontalRef = useRef(null)

    useLayoutEffect(() => {
      let element1 = graphicRef.current
      let scrollingElement1 = graphicHorizontalRef.current

      let pinWrapWidth1 = scrollingElement1.offsetWidth

      let tl1 = gsap.timeline()

      setTimeout(() => {
          tl1.to(element1, {
              scrollTrigger: {
                  trigger: element1,
                  start: 'top top',
                  end: pinWrapWidth1 * 3,
                  scroller: '.App', // locomotive element
                  scrub: true,
                  pin: true,
                  // markers: true
              },
              // we need to increase the scrolling height of this element same as scrolling width
              height: `${scrollingElement1.scrollWidth}px`,
              ease: 'none',
          })

          // horizontal scrolling
          tl1.to(scrollingElement1, {
              scrollTrigger: {
                  trigger: scrollingElement1,
                  start: 'top top',
                  end: pinWrapWidth1 * 3,
                  scroller: '.App', // locomotive element
                  scrub: true,
                  // markers: true
              },
              // we need to increase the scrolling height of this element same as scrolling width
              x: -pinWrapWidth1,
              ease: 'none',
          })

          ScrollTrigger.refresh()
      }, 1000)

      return () => {
          // Let's clear instances
          tl1.kill()
          ScrollTrigger.kill()
      }
  })

  return (
    <div className='graphic-design'>
        <Section ref={graphicRef} id='shop'>
        <HorizontalText text={"Graphic \u00a0  •"}/>
      <Right ref={graphicHorizontalRef}>
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
      <HorizontalGraphic text={"Design \u00a0  •"} />
  </Section>
    </div>
  )
}
export default GraphicDesign