import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import styled from "styled-components";
import { motion } from "framer-motion";
import HorizontalText from "../../horizontal-moving-text/HorizontalText";
import img1 from "../../../images/image-in-frame-1.png";
import img2 from "../../../images/image-in-frame-2.png";
import img3 from "../../../images/image-in-frame-3.png";
import placeholder from "../../../images/placeholder.png";

import topLeft from "../../../images/top-left.png";
import bottomLeft from "../../../images/bottom-left.png";
import topRight from "../../../images/top-right.png";
import bottomRight from "../../../images/bottom-right.png";
import poster1 from "../../../images/poster-01.jpg";
import poster2 from "../../../images/poster-02.jpg";
import poster3 from "../../../images/poster-04.jpg";

import "./graphicDesignStyle.scss";
import HorizontalGraphic from "../../horizontal-moving-text/HorizontalGraphic";

const Section = styled.section`
  /* position: relative;
  padding-bottom: 56.25%; */
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 50px 50px #1f0032 inset;

  img {
    position: absolute;

    &#top-left {
      top: 0;
      left: 0%;
      z-index: -8;
    }

    &#bottom-left {
      top: 0;
      left: 0;
      z-index: -10;
    }

    &#top-right {
      bottom: -8%;
      right: 0%;
      z-index: -8;
    }

    &#bottom-right {
      bottom: -8%;
      right: 0%;
      z-index: -10;
    }

    @media screen and (max-width: 600px) {
      &#top-left,
      &#top-right {
        width: 40%;
        height: 50%;
      }

      &#bottom-left,
      &#bottom-right {
        width: 50%;
        height: 60%;
      }
    }

    @media screen and (min-width: 601px) and (max-width: 1000px) {
      &#top-left,
      &#top-right {
        width: 50%;
        height: 60%;
      }

      &#bottom-left,
      &#bottom-right {
        width: 60%;
        height: 70%;
      }
    }
  }
`;

const ImageSection = styled.section`
  height: auto;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWapper = styled.div`
  position: absolute;
  z-index: 12;
  left: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Mask = styled.div`
  visibility: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Poster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* position: relative; */
  width: 40rem;
  margin: 0 200px;

  img {
    width: 100%;
    height: 100%;
    transform-origin: left;
    object-fit: cover;
  }

  &#poster-01 {
    img {
      width: 80%;
    }
  }

  &#poster-02 {
    transform: translateY(200px);
    img {
      width: 90%;
    }
  }

  &#poster-03 {
    img {
      width: 90%;
    }
  }

  &#poster-04 {
  }

  &#poster-05 {
  }

  h1 {
    font-size: 70px;
    margin-top: 30px;
  }

  @media screen and (max-width: 600px) {
    width: 30rem;

    &#poster-02 {
      transform: translateY(100px);
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;

  background-image: url(images/Noisenoise.png);
  mix-blend-mode: soft-light;
`;

const HeaderTop = styled.div`
  font-size: 200px;
  font-family: "library3am";
  position: absolute;
  top: 10%;
  left: 5%;
  z-index: -9;

  @media screen and (max-width: 600px) {
    font-size: 70px;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    font-size: 130px;
  }
`;

const HeaderBottom = styled.div`
  font-size: 200px;
  position: absolute;
  bottom: 5%;
  right: 3%;
  transform: rotate(-6.63deg);
  z-index: -9;

  @media screen and (max-width: 600px) {
    font-size: 100px;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    font-size: 150px;
  }
`;
//   /* position: relative;
//   padding-bottom: 56.25%; */
//   /* position: absolute;
//   left: 2%;

//   background-color: ${(props) => props.theme.grey};
//   /* width: 65%; */
//   /* display: flex;
//   justify-content: flex-start;
//   align-items: center;

//   h2 {
//     width: 40rem;
//     margin-right: 6rem;
//   }

//   @media screen and (max-width: 600px) {
//     top: 30vh;
//   } */
// `;

// const Item = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: flex-end;
//   width: 100%;
//   height: 100%;
//   /* margin-right: 6rem; */
//   /* height: 58vh; */
//   /* overflow-y: hidden;
//   transition: 1s; */

//   &#after {
//     position: absolute;
//     overflow: hidden;
//     bottom: 0;
//     transform: translate(0px, 100%);
//   }

//   &#after-2 {
//     position: absolute;
//     overflow: hidden;
//     bottom: 0;
//     transform: translate(0px, 200%);
//   }

//   img {
//     width: 30%;
//     height: auto;
//     overflow: hidden;
//     margin-right: 10vw;
//     margin-bottom: 100px;
//     position: absolute;
//     bottom: 0;

//     &#afterImg {
//       transform: translate(0px, -100%);
//     }

//     &#afterImg-2 {
//       transform: translate(0px, -200%);
//     }
//   }

//   /* &:hover {
//     overflow-y: visible;
//     z-index: 10;

//     :nth-child(2) {
//       transform: scale(1.5);
//     }
//   } */

//   @media screen and (max-width: 600px) {
//     width: 100vw;
//     margin-right: 3rem;

//     /* :nth-child(2) {
//         &:hover {
//             transform: scale(2);
//         }
//     } */
//   }
// `;

// const Text = styled.div`
//   font-size: 5vw;
//   position: absolute;
//   left: 10%;
//   bottom: 50%;
//   margin-left: 10vw;
// `;
// const Box = styled.div`
//   background-color: #eadede;
//   width: 30%;
//   height: 100px;
//   z-index: 100;
//   margin-right: 10vw;
//   position: absolute;
//   bottom: 0;
// `;

const GraphicDesign = () => {
  gsap.registerPlugin(ScrollTrigger);
  const graphicRef = useRef(null);
  const imgSec = useRef(null);
  const scrollingSec = useRef(null);

  const topL = useRef(null);
  const topR = useRef(null);
  const botL = useRef(null);
  const botR = useRef(null);

  const overlayRef = useRef(null);
  //   setTimeout(() => {
  //     gsap.from(topL.current, {
  //       scrollTrigger: {
  //         id: "svg",
  //         scrub: 1,
  //         start: "top center",
  //         scroller: ".App",
  //         trigger: topL.current,
  //         markers: true,
  //         toggleActions: "restart pause reverse pause",
  //       },
  //       x: 200,
  //       scale: 1.5,
  //     });

  //     gsap.from(topR.current, {
  //       scrollTrigger: {
  //         scrub: 1,
  //         start: "top top",
  //         scroller: ".App",
  //         trigger: graphicRef.current,
  //         toggleActions: "restart pause reverse pause",
  //       },
  //       x: -200,
  //       scale: 1.5,
  //     });

  //     ScrollTrigger.refresh();
  //     return () => {
  //       ScrollTrigger.getAll().forEach((instance) => {
  //         instance.kill();
  //       });
  //     };
  //   });
  // }, []);

  useLayoutEffect(() => {
    let tl = gsap.timeline();

    let tlforColor = gsap.timeline();

    let masks = document.querySelectorAll(".mask");

    setTimeout(() => {
      ScrollTrigger.matchMedia({
        "(max-width: 600px)": function () {
          gsap.from(topL.current, {
            scrollTrigger: {
              id: "svg",
              scrub: 1,
              start: "top bottom",
              scroller: ".App",
              trigger: graphicRef.current,
              toggleActions: "restart pause reverse pause",
            },
            x: 100,
            transform: "scaleX(3) scaleY(2)",
            ease: "Power2.out",
          });

          gsap.from(botL.current, {
            scrollTrigger: {
              id: "svg",
              scrub: 1,
              start: "top bottom",
              scroller: ".App",
              trigger: graphicRef.current,
              toggleActions: "restart pause reverse pause",
            },
            x: 50,
            y: 50,
            transform: "scaleX(2) scaleY(1.5)",
            ease: "Power3.inOut",
          });

          gsap.from(topR.current, {
            scrollTrigger: {
              scrub: 1,
              start: "top center",
              scroller: ".App",
              trigger: graphicRef.current,
              toggleActions: "restart pause reverse pause",
            },
            x: -100,
            transform: "scaleX(3) scaleY(2)",
            ease: "Power2.out",
          });
          gsap.from(botR.current, {
            scrollTrigger: {
              scrub: 1,
              start: "top center",
              scroller: ".App",
              trigger: graphicRef.current,
              toggleActions: "restart pause reverse pause",
            },
            x: -50,
            y: -50,
            transform: "scaleX(2) scaleY(1.5)",
            ease: "Power3.inOut",
          });
        },

        "(min-width: 601px)": function () {
          gsap.from(topL.current, {
            scrollTrigger: {
              id: "svg",
              scrub: 1,
              start: "top bottom",
              scroller: ".App",
              trigger: graphicRef.current,
              toggleActions: "restart pause reverse pause",
            },
            x: 200,
            transform: "scaleX(2) scaleY(1.5)",
            ease: "Power2.out",
          });

          gsap.from(botL.current, {
            scrollTrigger: {
              id: "svg",
              scrub: 1,
              start: "top bottom",
              scroller: ".App",
              trigger: graphicRef.current,
              toggleActions: "restart pause reverse pause",
            },
            x: 100,
            y: 100,
            transform: "scaleX(1.4) scaleY(1.3)",
            ease: "Power3.inOut",
          });

          gsap.from(topR.current, {
            scrollTrigger: {
              scrub: 1,
              start: "top center",
              scroller: ".App",
              trigger: graphicRef.current,
              toggleActions: "restart pause reverse pause",
            },
            x: -200,
            transform: "scaleX(2) scaleY(1.5)",
            ease: "Power2.out",
          });
          gsap.from(botR.current, {
            scrollTrigger: {
              scrub: 1,
              start: "top center",
              scroller: ".App",
              trigger: graphicRef.current,
              toggleActions: "restart pause reverse pause",
            },
            x: -100,
            y: -100,
            transform: "scaleX(1.4) scaleY(1.1)",
            ease: "Power3.inOut",
          });
        },
      });

      tl.to(imgSec.current, {
        scrollTrigger: {
          id: "horizontal",
          trigger: imgSec.current,
          start: "top top",
          end: () => "+=" + scrollingSec.current.offsetWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
        // we need to increase the scrolling height of this element same as scrolling width
        // height: `${scrollingElement1.scrollWidth}px`,
        defaults: { ease: "none" },
      });

      tl.to(scrollingSec.current, {
        scrollTrigger: {
          trigger: scrollingSec.current,
          start: "top top",
          end: () => "+=" + scrollingSec.current.offsetWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          // markers: true
        },
        // we need to increase the scrolling height of this element same as scrolling width
        x: -scrollingSec.current.offsetWidth,
        ease: "none",
      });

      masks.forEach((mask) => {
        let image = mask.querySelector("img");

        tl.set(mask, { autoAlpha: 1 });

        tl.from(mask, {
          xPercent: -100,
          duration: 1.5,
          ease: "Power2.out",
        });
        tl.from(image, {
          xPercent: 100,
          scale: 1.3,
          duration: 1.5,
          delay: -1.5,
          ease: "Power2.out",
        });
      });
      //     tl.fromTo(comp, { yPercent: 100, y: 0 }, { yPercent: 0 }, "start");
      //     tl.fromTo(
      //       compImage,
      //       { yPercent: -100, y: 0 },
      //       { yPercent: 0 },
      //       0,
      //       "start"
      //     );
      //     tl.fromTo(text1.current, { opacity: 1 }, { opacity: 0 }, "start");
      //     tl.fromTo(comp2, { yPercent: 200, y: 0 }, { yPercent: 100 }, "start");
      //     tl.fromTo(
      //       compImage2,
      //       { yPercent: -200, y: 0 },
      //       { yPercent: -100 },
      //       0,
      //       "start"
      //     );
      //     tl.fromTo(comp2, { yPercent: 100, y: 0 }, { yPercent: 0 }, "second");
      //     tl.fromTo(
      //       compImage2,
      //       { yPercent: -100, y: 0 },
      //       { yPercent: 0 },
      //       0,
      //       "second"
      //     );
      //     tl.fromTo(text2.current, { opacity: 1 }, { opacity: 0 }, "second");

      tlforColor.to(imgSec.current, {
        scrollTrigger: {
          id: "color",
          trigger: imgSec.current,
          start: "top 70%",
          end: "bottom",
          scroller: ".App",
          scrub: true,
          onEnter: () => {
            gsap.to(".App", {
              duration: 1.0,
              backgroundColor: "#262626",
              color: "#eadede",
              overwrite: "auto",
            });
            gsap.to(graphicRef.current, {
              duration: 1.0,
              boxShadow: "0 0 50px 50px #262626 inset",
            });
          },

          onLeaveBack: () => {
            gsap.to(".App", {
              duration: 1.0,
              backgroundColor: "#1F0032",
              color: "#eadede",
              overwrite: "auto",
            });
            gsap.to(graphicRef.current, {
              duration: 1.0,
              boxShadow: "0 0 50px 50px #1f0032 inset",
            });
          },
        },
      });
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      tlforColor.kill();
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  }, []);

  return (
    <div className="graphic-design">
      <Section ref={graphicRef} id="shop">
        <Overlay ref={overlayRef} />
        <img src={topLeft} alt="curved shape" id="top-left" ref={topL} />
        <HeaderTop>Graphic</HeaderTop>
        <img src={bottomLeft} alt="curved shape" id="bottom-left" ref={botL} />
        <img
          src={bottomRight}
          alt="curved shape"
          id="bottom-right"
          ref={botR}
        />
        <HeaderBottom>Design</HeaderBottom>
        <img src={topRight} alt="curved shape" id="top-right" ref={topR} />
      </Section>
      <ImageSection ref={imgSec} data-scroll-container>
        <Overlay />
        <ImageWapper ref={scrollingSec}>
          <Poster id="poster-01">
            <Mask className="mask">
              <img
                src={poster1}
                alt="poster"
                data-scroll
                data-scroll-speed={-1}
                data-scroll-direction="horizontal"
              />
            </Mask>
            <h1>01</h1>
          </Poster>

          <Poster id="poster-02">
            <Mask className="mask">
              <img
                src={poster2}
                alt="poster"
                data-scroll
                data-scroll-speed={1}
                data-scroll-direction="horizontal"
              />
            </Mask>
            <h1>02</h1>
          </Poster>

          <Poster id="poster-03">
            <Mask className="mask">
              <img
                src={poster3}
                alt="poster"
                data-scroll
                data-scroll-speed={-1}
                data-scroll-direction="horizontal"
              />
            </Mask>
            <h1>03</h1>
          </Poster>
        </ImageWapper>
      </ImageSection>
    </div>
  );
};
export default GraphicDesign;
