import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import "./footerStyle.scss";
import useOnScreen from "../../hooks/useOnScreen";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sec = useRef(null);

  const onScreen = useOnScreen(sec);

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    setTimeout(() => {
      tl.from(sec.current, {
        scrollTrigger: {
          id: "slide",
          trigger: sec.current,
          start: "top bottom",
          end: "bottom bottom",
          scroller: ".App",
          scrub: 3,
          toggleActions: "restart pause reverse pause",
          markers: true,
        },
        xPercent: -100,
        autoAlpha: 0,
        ease: "Power4.in",
      });

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach((instance) => {
          instance.kill();
        });
      };
    }, 1000);
  }, []);

  return (
    <div className="footer-wrapper">
      <div className="overlay" />
      <div className="text-sec" ref={sec}>
        {/* <h3>You never know what is there waiting for you, until you take the initiative.</h3> */}
        <div>
          <a href="/contact" id="contact">
            <span>Contact form</span>
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 152.9 43.4"
              xmlSpace="preserve"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ enableBackground: "new 0 0 152.9 43.4" }}
            >
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg> */}
          </a>
          <a href="mailto: twylaweiyutang@outlook.com" id="email">
            <span>twylaweiyutang@outlook.com</span>
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 152.9 43.4"
              xmlSpace="preserve"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ enableBackground: "new 0 0 152.9 43.4", width: "380px" }}
            >
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg> */}
          </a>
          <a
            href="https://www.linkedin.com/in/weiyu-tang-297116186/"
            target="_blank"
            rel="noreferrer"
            id="linkedin"
          >
            linkedin
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 152.9 43.4"
              xmlSpace="preserve"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ enableBackground: "new 0 0 152.9 43.4" }}
            >
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg> */}
          </a>
          <a
            href="https://www.instagram.com/twyla_weiyu_tang/"
            target="_blank"
            rel="noreferrer"
            id="instagram"
          >
            instagram
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 152.9 43.4"
              xmlSpace="preserve"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ enableBackground: "new 0 0 152.9 43.4" }}
            >
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg> */}
          </a>
        </div>
        <div className="footer-bottom">
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
            id="left"
          >
            &copy; {new Date().getFullYear()} All Rights Reserved.
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
