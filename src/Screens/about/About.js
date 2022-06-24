import React from 'react'
import './aboutStyle.scss'
import { motion } from 'framer-motion'
import Footer from '../../Components/footer/Footer'

const About = () => {
  return (
    <div className='about'>
        <div className="c-section" data-scroll-section data-persistent>
                <div className="o-container" id="fixed-elements">
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
                                    <img src='https://images.squarespace-cdn.com/content/v1/5a4b8e12f14aa1b80ee8a256/1587304012984-TTBC4ACQVU0OR11H9SXQ/portrait-photographers-bath.jpg?format=1000w' alt='about' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    </div>


  )
}

export default About