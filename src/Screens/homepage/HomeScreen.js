import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/projects/Projects";
import "./homepageStyle.scss";
import Banner from "../../Components/banner/Banner";

const HomeScreen = () => {
  gsap.registerPlugin(ScrollTrigger);
  let homeRef = useRef(null);

  let projectRef = useRef(null);
  let bannerRef = useRef(null);

  let tl = new gsap.timeline();

  useEffect(() => {
    setTimeout(() => {
      tl.to(homeRef, {
        scrollTrigger: {
          trigger: bannerRef,
          start: "top 100%",
          end: "bottom",
          scroller: ".App",
          scrub: true,
          onEnter: () => {
            gsap.to(".App", {
              duration: 1.0,
              backgroundColor: "#F58840",
              color: "#eadede",
              overwrite: "auto",
            });
          },

          onLeaveBack: () => {
            gsap.to(".App", {
              duration: 1.0,
              backgroundColor: "black",
              color: "#eadede",
              overwrite: "auto",
            });
          },
        },
      });
    }, 1000);
    ScrollTrigger.refresh();
    return () => {
      // Let's clear instances
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  }, [tl]);

  return (
    <div className="homepage cursor-scale small" ref={(el) => (homeRef = el)}>
      <div>
        <Hero />
      </div>

      <div ref={(el) => (bannerRef = el)}>
        <Banner />
      </div>

      <div ref={(el) => (projectRef = el)}>
        <Projects />
      </div>
      {/* <div className='top'>
                <h1 className="title">Twyla</h1>
                <div className='text'>
                <p className='job-1'>UI/UX designer</p>
                <p className='job-2'>Full-stack web developer</p>
                <p className='job-3'>Graphic designer</p>
                </div>
                <h1 className='title'>Tang</h1>
            </div>

            <div className='projects' id='work'>
                <h1>Projects</h1>
                <h4>Websites</h4>
                <WebsiteComponent />
                <h4>UI/UX</h4>
                <h4>Graphics</h4>
            </div> */}

      {/* <div className='work-with-me'>
                <h1>Work With Me</h1>
            </div> */}
    </div>
  );
};

export default HomeScreen;
