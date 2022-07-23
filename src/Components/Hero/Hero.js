import React, {useRef, useEffect} from 'react'
import './heroStyle.scss'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Hero = () => {
        let app = useRef(null)
        let title = useRef(null)

        let tl = new gsap.timeline({delay: .8})

        useEffect(() => {

                const headlineFirst = title.children[0].children[0]
                const headlineSecond = title.children[0].children[1]

                const texts = document.querySelectorAll(".strip-text")


                gsap.to(app, {duration: 0, css: {visibility: 'visible'}})

                tl.from([headlineFirst.children, headlineSecond.children], {
                        duration: 1.5,
                        y: "11rem",
                        ease: "power3.easeOut",
                        stagger: {
                          each: .15
                        }
                      });

                      var boxWidth = 500
                  gsap.set(texts, {
                      x:function(i) {
                      return i * boxWidth;
                      }
                  });
          
                  gsap.timeline()
                  .to(texts,  {
                //   x: -5520,
                  modifiers: {
                      x: gsap.utils.unitize(x => parseFloat(x) % 500)
                  },
                      duration:15, ease:'none',
                      attr: { startOffset: "-2990", },
                      repeat:-1,
                  });

                //   gsap.from(title, {
                //         duration: 1.5,
                //         yPercent: 100,
                //         ease: "power4",
                //   })
                
                }, [tl])

  return (
        <div 
        className='top' ref={el => app = el}>
                <svg width="5000" height="600" viewBox="0 0 1440 539" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-path-container">
			<path d="M-17.4829 15.9294C297.2 -24.1211 339.25 187.141 393.211 351.93C447.171 516.719 617.113 575.553 790.539 486.617C963.965 397.68 1095.42 189.366 1488.7 319.17" stroke="#F58840" stroke-width="50" id="path-1" pathLength={5000}></path>
			<g className='text-strip-wrapper'>
                                <g className='texts'>
                                <text dy="1.5%" y="15px" x='0px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                Full-stack Website Developer  &nbsp; • &nbsp;
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x='490px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                Graphic Designer &nbsp; •  &nbsp;
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x ='810px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                UI/UX Designer &nbsp; • &nbsp; 
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x ='1100px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                Full-stack Website Developer  &nbsp; • &nbsp; 
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x ='1590px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                Graphic Designer &nbsp; •  &nbsp; 
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x ='1910px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                UI/UX Designer &nbsp; • &nbsp; 
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x='2200px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                Full-stack Website Developer  &nbsp; • &nbsp;
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x='2700px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                Graphic Designer &nbsp; •  &nbsp;
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x ='3020px'>
                                        <textPath href="#path-1" className='strip-text'>
                                                UI/UX Designer &nbsp; • &nbsp; 
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x ='3320px'>
                                        <textPath href="#path-1" className='strip-text'>
                                        Full-stack Website Developer  &nbsp; • &nbsp;
                                        </textPath>
                                </text>
                                
                                <text dy="1.5%" y="15px" x ='3810px'>
                                        <textPath href="#path-1" className='strip-text'>
                                        Graphic Designer &nbsp; •  &nbsp;
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x ='4130px'>
                                        <textPath href="#path-1" className='strip-text'>
                                        UI/UX Designer &nbsp; • &nbsp; 
                                        </textPath>
                                </text>

                                <text dy="1.5%" y="15px" x ='4430px'>
                                        <textPath href="#path-1" className='strip-text'>
                                        Full-stack Website Developer  &nbsp; • &nbsp;
                                        </textPath>
                                </text>
                                
                                <text dy="1.5%" y="15px" x ='4920px'>
                                        <textPath href="#path-1" className='strip-text'>
                                        Graphic Designer &nbsp; •  &nbsp;
                                        </textPath>
                                </text>



                                </g>
                        </g>

                        {/* <text dy="1.5%" y="15px" x="2150px">
                                <textPath href="#path-1" className='strip-text' ref={el => textRef2 = el}>
                                 Full-stack Website Developer  &nbsp; • &nbsp; Graphic Designer &nbsp; •  &nbsp; UI/UX Designer &nbsp; • &nbsp; Full-stack Website Developer  &nbsp; • &nbsp; Graphic Designer &nbsp; •  &nbsp; UI/UX Designer &nbsp; • &nbsp; Full-stack Website Developer  &nbsp; • &nbsp; Graphic Designer &nbsp; •  &nbsp; UI/UX Designer &nbsp; • &nbsp;
                                </textPath>
			</text> */}
		</svg>
                {/* <h1 ref={el => title = el}
                data-scroll data-scroll-speed="2" className="ini-letters">T</h1> */}
                <div className='title-container' ref={el => title= el}>
                        <h1 data-scroll data-scroll-speed="2">
                                <div className='line-container'>
                                        <div className='line-container-inner'>T<span>w</span>yla</div>
                                </div>

                                <div className='line-container'>
                                        <div className='line-container-inner'>Ta<span>n</span>g</div>
                                </div>
                        </h1>
                </div>

                {/* <div className='text'>
                <p
                data-scroll data-scroll-speed="2" className='job-1'>UI/UX designer</p>
                <p
                data-scroll data-scroll-speed="2" className='job-2'>Full-stack web developer</p>
                <p
                data-scroll data-scroll-speed="2" className='job-3'>Graphic designer</p>
                </div> */}
        </div>
  )
}

export default Hero