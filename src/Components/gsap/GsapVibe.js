import { useLayoutEffect,  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";

import './gsapEmpireStyle.scss'

import video1 from '../../video/vibe-cover.mp4'
import video2 from '../../video/vibe-banner.mp4'
import video3 from '../../video/vibe-newarrivals.mp4'
import video4 from '../../video/vibe-signup-signin.mp4'
import video5 from '../../video/vibe-checkout.mp4'

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
    color: #eadede;
    /* background-color: #eadede; */
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
        width: 60vw;
        font-size: 5rem;
        line-height: 150%;
        margin-right: 15rem;
        margin-left: 5rem;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px #eadede;
    }
`

const Item = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    position: relative;
    margin-left: 10vw;
    margin-right: 10vw;

    /* img {
        position: absolute;
        bottom: -40vh;
        width: 100%;
    } */

    h4 {
      display: inline-block;
        width: 40%;
        font-weight: 500;
        font-size: 3rem;
        text-align: justify;
        justify-content: center;
        position: absolute;
        left: 60%;
        top: -35vh;
        color: #eadede;
}

    span {
        position: absolute;
        left: 0%;
        top: 10vh;
        width: 30%;
        font-size: 1.2rem;
        text-align: left;

        font-family: 'Urbanist', sans-serif;
        font-weight: 100;
        color: #eadede;
        mix-blend-mode: difference;
        z-index: 10;
    }
`

const Wrapper = styled(motion.img)`
    position: absolute;
    transform: translateY(9vh) translateX(5vw);
    width: 60%;
`

const Product = ({img, title='', detail='', video}) => {
    return(
        <Item
            initial={{transform: 'scale(80%)'}}
            whileInView={{transform: 'scale(120%)'}}
            transition={{duration: 1}}
            viewport={{once: false, amount: 'all'}}
        >   
            {img ? <img
            src={img} alt={title}
            style={{zIndex: 4, width: "58.5%", position: "absolute", transform: "translateY(9vh) translateX(5vw)"}}
            /> : null }
            
            {video ? <video src={video} loop muted playsInline autoPlay
            style={{zIndex: 4, width: "58.5%", position: "absolute", transform: "translateY(9vh) translateX(5vw)"}}
            /> : null}

           <Wrapper

            src='../../images/macbook-frame.png' alt='frame'
            style={{zIndex: 10}}
            />
            <h4>{title}</h4>
            <span>{detail}</span>
        </Item>
    )
}

const GsapVibe = () => {
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
                //   markers: true
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
                //   markers: true
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
    <div>
  <Section ref={ref} id='shop'>

      <Right ref={horizontalRef}>
        <h2>Some Highlights</h2>
          <Product video={video1} title='Hero & About' detail="Used a video as the background for hero section to work in concert with the locomotive scroll and gsap scroll trigger, to create a more dynamic effect. This dynamic effect is inline with the brand image: vibrant and creative."/>
          <Product video={video2} title='Collection & Banner' detail="Used GSAP scrolltrigger to create the horizontal scroll effect for the new collection section. This creates more user interaction. As scrolling, elements that are in view will turn into colors, and will turn into grey while they are not in view." />
          <Product video={video3} title='New Arrivals' detail="Used the color block as the frame for images, with the upscrolling effect, created an interactive and unique revealing effect. The footer section is in a vibrant red color, with locomotive scroll effect, ."/>
          <Product video={video4} title='Sign In & Sign Up' detail="User can either register an account or login with their google account. I used redux to manage and persist the state. The header on hover animation on the shop page, works in concert with the dynamic homepage, injects vitality to the static and clean design. "/>
          <Product video={video5} title='Checkout' detail="Adding items to cart functionality, and the cart icon in the header will reflect the number of items in the cart. We can also change the cart items by increasing or decreasing the quantity, and deleting the entire item.  The payment process is handled by Stripe. Once the payment is successful, user will be redirect to checkout successful page." />
          {/* <Product img={img1} title='Dermatology' />
          <Product img={img1} title='Nutrition' />
          <Product img={img1} title='Cosmetics' />
          <Product img={img1} title='Ozone therapy' /> */}
          
      </Right>
  </Section>
  </div>
)
}

export default GsapVibe