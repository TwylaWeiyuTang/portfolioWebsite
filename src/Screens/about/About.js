import React, { useRef, useEffect } from 'react'
import './aboutStyle.scss'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import portrait from '../../images/portrait.jpg'

const About = () => {
  
  return (
    <div className='about' >
        <div className="c-section" data-scroll-section data-persistent>
                <div className="o-container" id="fixed-elements" data-textcolor="#032f35" data-bgcolor="#bcb8ad">
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
                <div className='text-sec' data-bgcolor="#e3857a" data-textcolor="#f1dba7">
                    <h3 >You never know what is there waiting for you, until you take the initiative.</h3>
                <div>
                <a href='/contact'>Contact form
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' style={{enableBackground: "new 0 0 152.9 43.4"}}>
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                      </svg>
                    </a>
                    <a href='mailto: twylaweiyutang@outlook.com'>twylaweiyutang@outlook.com
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' style={{enableBackground: "new 0 0 152.9 43.4", width: "380px"}}>
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                      </svg>
                    </a>
                    <a href='https://www.linkedin.com/in/weiyu-tang-297116186/' target='_blank' rel='noreferrer'>linkedin
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' style={{enableBackground: "new 0 0 152.9 43.4"}}>
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                      </svg>
                    </a>
                    <a href='https://www.linkedin.com/in/weiyu-tang-297116186/' target='_blank' rel='noreferrer'>instagram
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' style={{enableBackground: "new 0 0 152.9 43.4"}}>
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                      </svg>
                    </a>
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