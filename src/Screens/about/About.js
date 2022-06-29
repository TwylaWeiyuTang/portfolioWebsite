import React, { useLayoutEffect, useRef, useEffect } from 'react'
import './aboutStyle.scss'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import portrait from '../../images/portrait.jpg'

const About = () => {
    const ref = useRef(null)
    const topRef = useRef(null)
    const bottomRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
  }, [])

  

    useLayoutEffect(() => {
        let element = ref.current
//         const scroller = new locomotiveScroll({
//             el: element,
//             smooth: true,
//             getDirection: true
//           });
          
//         scroller.on("scroll", function (t) {
//             document.documentElement.setAttribute("data-direction", t.direction);
//           });
        
//           scroller.on("scroll", ScrollTrigger.update);
    
//         ScrollTrigger.scrollerProxy(element, {
//             scrollTop(value) {
//               return arguments.length
//                 ? scroller.scrollTo(value, 0, 0)
//                 : scroller.scroll.instance.scroll.y;
//             },
//             getBoundingClientRect() {
//               return {
//                 left: 0,
//                 top: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight
//               };
//             },
//             pinType: element.style.transform ? "transform" : "fixed"
//           });
    
//         const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
//         scrollColorElems.forEach((colorSection, i) => {
//             const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
//             const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

//             ScrollTrigger.create({
//             trigger: colorSection,
//             scroller: "[data-scroll-container]",
//             start: "top 50%",
//             onEnter: () =>
//                 gsap.to(element, {
//                 backgroundColor: colorSection.dataset.bgcolor,
//                 color: colorSection.dataset.textcolor,
//                 overwrite: "auto"
//                 }),
//             onLeaveBack: () =>
//                 gsap.to(element, {
//                 backgroundColor: prevBg,
//                 color: prevText,
//                 overwrite: "auto"
//         })
        
//     });
//     ScrollTrigger.addEventListener("refresh", () => scroller.update());

//   ScrollTrigger.refresh();
//   });
setTimeout(() => {
    ScrollTrigger.create({
   
        trigger: topRef.current,
        markers:true,
        start: 'top top',
        end:"bottom 0%", 
      
        onEnter: () => {
          gsap.to('body', { duration: 1.0, backgroundColor: '#bcb8ad'})
        },
        
        onLeaveBack: () => {
          gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff'})
        },
      
        
      })
      
      ScrollTrigger.create({
        
        trigger: bottomRef.current,
        markers:true,
        start:"top 50%",
        end:"bottom 0%", 
      
        onEnter: () => {
          gsap.to('body', { duration: 1.0, backgroundColor: '#e3857a'})
        },
        
        onLeaveBack: () => {
          gsap.to('body', { duration: 1.0, backgroundColor: '#ff0000'})
        },
      
        
      })
      ScrollTrigger.refresh()
}, 1000)

    })
  return (
    <div className='about' ref={ref}>
        <div className="c-section" data-scroll-section data-persistent>
                <div className="o-container" id="fixed-elements" data-textcolor="#032f35" data-bgcolor="#bcb8ad" ref={topRef}>
                    <div className="o-layout">
                        <div className="o-layout_item u-2/5@from-medium">
                            <div className="c-section_infos -padding" data-scroll data-scroll-sticky data-scroll-target="#fixed-elements">
                                <div className="c-section_infos_inner" data-scroll data-scroll-offset="200">
                                    <h3>
                                        Hi! I'm Twyla, a multi-disciplinary web developer based in London, UK.
                                    </h3>
                                    <div className="c-sections_infos_text u-text">
                                        <p>
                                            On this site, you can find different collections of my work.
                                        </p>
                                        <p>
                                            From UI/UX design to full-stack website development, to graphic designs.
                                        </p>
                                        <p>
                                            I can deliver a comprehensive and quality service. 
                                        </p>
                                        <p>
                                            I am everything you need for a solid, user-friendly and visually-pleasing website.
                                        </p>

                                        <p>It doesn't matter if you are in touch for work or just to share your thoughts and ideas with me!
                                            Let's talk and inspire each other!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="o-layout_item u-3/5@from-medium">
                            <div className="c-fixed_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                                <div className="c-fixed_target" id="fixed-target"></div>
                                <div className="c-fixed" data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
                                    <img src={portrait} alt='about' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-sec' data-bgcolor="#e3857a" data-textcolor="#f1dba7" ref={bottomRef}>
                <h3 >You never know what is there waiting for you, until you take the initiative.</h3>
                <div>
                    <a href='/contact'>Contact</a>
                    <a href='mailto: twylaweiyutang@outlook.com'>twylaweiyutang@outlook.com</a>
                    <a href='https://www.linkedin.com/in/weiyu-tang-297116186/' target='_blank' rel='noreferrer'>linkedin</a>
                    <a href='https://www.linkedin.com/in/weiyu-tang-297116186/' target='_blank' rel='noreferrer'>instagram</a>
                </div>
                <div className='footer-bottom'>
                    <span
                    data-scroll data-scroll-speed='2' data-scroll-direction="horizontal"
                    >&copy; {new Date().getFullYear()} All Rights Reserved.</span>
                    <span
                    data-scroll data-scroll-speed='-2' data-scroll-direction="horizontal"
                    >Made with &hearts; by me
                </span>
                </div>
    </div>
            </div>
    </div>


  )
}

export default About