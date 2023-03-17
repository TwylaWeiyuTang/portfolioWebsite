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
  let bannerRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(homeRef.current, {
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",
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
  }, []);

  return (
    <div className="homepage cursor-scale small" ref={homeRef}>
      <div>
        <Hero />
      </div>

      <div ref={bannerRef}>
        <Banner />
      </div>

      <div>
        <Projects />
      </div>
    </div>
  );
};

export default HomeScreen;
