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
        },
        xPercent: -100,
        autoAlpha: 0,
        ease: "Power4.in",
      });

      ScrollTrigger.refresh();

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
