import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import GraphicDesign from "./graphic-design/GraphicDesign";
import "./projectsStyle.scss";
import WebDevelopment from "./web-dev/WebDevelopment";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  let ref = useRef(null);
  let webRef = useRef(null);
  let graphicRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();

    setTimeout(() => {
      tl.to(ref.current, {
        scrollTrigger: {
          trigger: webRef.current,
          start: "top 100%",
          end: "bottom",
          scroller: ".App",
          scrub: true,
          onEnter: () => {
            gsap.to(".App", {
              duration: 1.0,
              backgroundColor: "#708C74",
              color: "#EAEAEA",
              overwrite: "auto",
            });
          },

          onLeaveBack: () => {
            gsap.to(".App", {
              duration: 1.0,
              backgroundColor: "#F58840",
              color: "#eadede",
              overwrite: "auto",
            });
          },
        },
      });

      tl2.to(ref.current, {
        scrollTrigger: {
          trigger: graphicRef.current,
          start: "top 100%",
          end: "bottom",
          scroller: ".App",
          scrub: true,
          onEnter: () => {
            gsap.to(".App", {
              duration: 0.5,
              backgroundColor: "#1F0032",
              color: "#eadede",
              overwrite: "auto",
            });
          },

          onLeaveBack: () => {
            gsap.to(".App", {
              duration: 1.0,
              backgroundColor: "#708C74",
              color: "#EAEAEA",
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
      tl2.kill();
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  }, []);

  return (
    <div className="projects" ref={ref}>
      <div ref={webRef}>
        <WebDevelopment />
      </div>

      <div ref={graphicRef}>
        <GraphicDesign />
      </div>
    </div>
  );
};

export default Projects;
