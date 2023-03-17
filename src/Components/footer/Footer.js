import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import "./footerStyle.scss";
import { Scroll } from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  background-image: url(/images/Noise.png);
  mix-blend-mode: soft-light;
  opacity: 0.7;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Footer = ({ background }) => {
  gsap.registerPlugin(ScrollTrigger);
  const sec = useRef(null);
  const wrapper = useRef(null);

  const location = useLocation();

  useLayoutEffect(() => {
    let tl = gsap.timeline();

    setTimeout(() => {
      // tl.from(
      //   sec.current,
      //   {
      //     scrollTrigger: {
      //       id: "slide",
      //       trigger: wrapper.current,
      //       start: "top bottom",
      //       end: "bottom bottom",
      //       scroller: ".App",
      //       scrub: 3,
      //       markers: true,
      //     },
      //     xPercent: -100,
      //     autoAlpha: 0,
      //     ease: "Power4.in",
      //   },
      //   1000
      // );

      const texts = document.querySelectorAll(".strip-t");

      var boxWidth = 500;
      gsap.set(texts, {
        x: function (i) {
          return i * boxWidth;
        },
      });

      gsap.timeline().to(texts, {
        //   x: -5520,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % 500),
        },
        duration: 30,
        ease: "none",
        attr: { startOffset: "-4400" },
        repeat: -1,
      });
    }, 1000);

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  }, []);

  return (
    <div
      className="footer-wrapper"
      ref={wrapper}
      style={{ backgroundColor: background }}
    >
      {location.pathname === "/about-me" && <Overlay />}
      <div className="overlay" />
      <div className="text-path">
        <svg
          viewBox="0 0 1282 3000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 H1282 M1282 30 V2400"
            stroke=""
            stroke-width="80"
            id="path-2"
            pathLength={5000}
          />
          <g className="text-strip-wrapper">
            <g className="texts">
              <text dy="1%" y="20px" x="0px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="420px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="840px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="1260px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="1680px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="2100px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="2520px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="2940px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="3360px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="3780px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="4200px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>

              <text dy="1%" y="20px" x="4620px">
                <textPath href="#path-2" className="strip-t">
                  Have a chat with me
                </textPath>
              </text>
            </g>
          </g>
        </svg>
      </div>
      <div
        className="text-sec"
        ref={sec}
        data-scroll
        data-scroll-speed="-10"
        data-scroll-direction="horizontal"
      >
        <div>
          <a href="/contact" id="contact">
            <span>Contact form</span>
          </a>
          <a href="mailto: twylaweiyutang@outlook.com" id="email">
            <span>twylaweiyutang@outlook.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/weiyu-tang-297116186/"
            target="_blank"
            rel="noreferrer"
            id="linkedin"
          >
            linkedin
          </a>
          <a
            href="https://www.instagram.com/twyla_weiyu_tang/"
            target="_blank"
            rel="noreferrer"
            id="instagram"
          >
            instagram
          </a>
        </div>
        <div className="footer-bottom">
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
            id="left"
          >
            &copy; {new Date().getFullYear()} All <br /> Rights <br /> Reserved
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
            id="right"
          >
            Made with &hearts; by me
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
