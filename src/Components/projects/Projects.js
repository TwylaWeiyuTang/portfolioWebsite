import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import GraphicDesign from './graphic-design/GraphicDesign'
import './projectsStyle.scss'
import WebDevelopment from './web-dev/WebDevelopment'

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  let ref = useRef(null)
  let webRef = useRef(null)
  let graphicRef = useRef(null)
  

  let tl = new gsap.timeline()

  useEffect(() => {

    setTimeout(() => {
      tl.to(ref, {
        scrollTrigger: {
          trigger: webRef,
          start:"top 100%",
          end: "bottom",
          scroller: '.App',
          scrub: true,
          onEnter: () => {
            gsap.to('.App', { duration: 1.0, backgroundColor: '#32746C', color: "#EADEDE", overwrite: "auto"})
          },
          
          onLeaveBack: () => {
            gsap.to('.App', { duration: 1.0, backgroundColor: '#F58840', color: "#EADEDE", overwrite: "auto"})
          },
      }
      })

      tl.to(ref, {
        scrollTrigger: {
          trigger: graphicRef,
          start:"top 100%",
          end: "bottom",
          scroller: '.App',
          scrub: true,
          onEnter: () => {
            gsap.to('.App', { duration: 1.0, backgroundColor: '#EADEDE', color: '#4A407E', overwrite: "auto"})
          },
          
          onLeaveBack: () => {
            gsap.to('.App', { duration: 1.0, backgroundColor: '#32746C', color: "#EADEDE", overwrite: "auto"})
          },
      }
      })
    }, 1000)
      ScrollTrigger.refresh()
return () => {
  // Let's clear instances
  tl.kill()
  ScrollTrigger.getAll().forEach((instance) => {
    instance.kill();
  });
}
  }, [tl])

  return (
    <div className='projects' ref={el => ref = el}>

        <div ref={el => webRef = el}>
          <WebDevelopment />
        </div>

        <div ref={el => graphicRef = el}>
          <GraphicDesign />
        </div>
    </div>
  )
}

export default Projects