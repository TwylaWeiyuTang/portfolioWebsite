import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";
import { motion } from "framer-motion";
import HorizontalText from "../../horizontal-moving-text/HorizontalText";
import img1 from "../../../images/image-in-frame-1.png";
import img2 from "../../../images/image-in-frame-2.png";
import img3 from "../../../images/image-in-frame-3.png";
import placeholder from "../../../images/placeholder.png";

import "./graphicDesignStyle.scss";
import HorizontalGraphic from "../../horizontal-moving-text/HorizontalGraphic";

const Section = styled.section`
  position: relative;
  padding-bottom: 56.25%;
  /* height: auto;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center; */
`;

const Right = styled.div`
  /* position: relative;
  padding-bottom: 56.25%; */
  /* position: absolute;
  left: 2%;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  /* display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    width: 40rem;
    margin-right: 6rem;
  }

  @media screen and (max-width: 600px) {
    top: 30vh;
  } */
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  /* margin-right: 6rem; */
  /* height: 58vh; */
  /* overflow-y: hidden;
  transition: 1s; */

  &#after {
    position: absolute;
    overflow: hidden;
    bottom: 0;
    transform: translate(0px, 100%);
  }

  &#after-2 {
    position: absolute;
    overflow: hidden;
    bottom: 0;
    transform: translate(0px, 200%);
  }

  img {
    width: 30%;
    height: auto;
    overflow: hidden;
    margin-right: 10vw;
    margin-bottom: 100px;
    position: absolute;
    bottom: 0;

    &#afterImg {
      transform: translate(0px, -100%);
    }

    &#afterImg-2 {
      transform: translate(0px, -200%);
    }
  }

  /* &:hover {
    overflow-y: visible;
    z-index: 10;

    :nth-child(2) {
      transform: scale(1.5);
    }
  } */

  @media screen and (max-width: 600px) {
    width: 100vw;
    margin-right: 3rem;

    /* :nth-child(2) {
        &:hover {
            transform: scale(2);
        }
    } */
  }
`;

const Text = styled.div`
  font-size: 5vw;
  position: absolute;
  left: 10%;
  bottom: 50%;
  margin-left: 10vw;
`;
const Box = styled.div`
  background-color: #eadede;
  width: 30%;
  height: 100px;
  z-index: 100;
  margin-right: 10vw;
  position: absolute;
  bottom: 0;
`;

const Product = ({ img, title = "", href }) => {
  return (
    <Item>
      <img src={img} alt={title} />
    </Item>
  );
};

const GraphicDesign = () => {
  gsap.registerPlugin(ScrollTrigger);
  const graphicRef = useRef(null);
  const comparisonRef = useRef(null);
  const graphicHorizontalRef = useRef(null);
  const compImageRef = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const comImageRef2 = useRef(null);
  const boxRef1 = useRef(null);

  useLayoutEffect(() => {
    let element1 = graphicRef.current;
    let comp = comparisonRef.current;
    let compImage = compImageRef.current;
    let comp2 = imgRef3.current;
    let compImage2 = comImageRef2.current;
    let box1 = boxRef1.current;

    // let scrollingElement1 = graphicHorizontalRef.current;

    // let pinWrapWidth1 = scrollingElement1.offsetWidth;

    let tlforColor = gsap.timeline();
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: element1,
    //     start: "center center",
    //     end: () => "+=" + element1.offsetWidth,
    //     scrub: true,
    //     pin: true,
    //     markers: true,
    //     anticipatePin: 1,
    //   },
    //   defaults: { ease: "none" },
    // });
    // tl.fromTo(comp, { yPercent: 100, y: 0 }, { yPercent: 0 }).fromTo(
    //   compImage,
    //   { yPercent: -100, y: 0 },
    //   { yPercent: 0 },
    //   0
    // );

    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element1,
          start: "center center",
          end: () => "+=" + element1.offsetWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          markers: true,
          anticipatePin: 1,
        },
        // we need to increase the scrolling height of this element same as scrolling width
        // height: `${scrollingElement1.scrollWidth}px`,
        defaults: { ease: "none" },
      });
      tl.add("start");
      tl.fromTo(comp, { yPercent: 100, y: 0 }, { yPercent: 0 }, "start");
      tl.fromTo(
        compImage,
        { yPercent: -100, y: 0 },
        { yPercent: 0 },
        0,
        "start"
      );
      tl.fromTo(comp2, { yPercent: 200, y: 0 }, { yPercent: 100 }, "start");
      tl.fromTo(
        compImage2,
        { yPercent: -200, y: 0 },
        { yPercent: -100 },
        0,
        "start"
      );
      tl.fromTo(comp2, { yPercent: 100, y: 0 }, { yPercent: 0 });
      tl.fromTo(compImage2, { yPercent: -100, y: 0 }, { yPercent: 0 }, 0);

      tlforColor
        .to(element1, {
          scrollTrigger: {
            id: "color",
            trigger: comp,
            start: "top 70%",
            end: "bottom",
            scroller: ".App",
            scrub: true,
            markers: true,
            onEnter: () => {
              gsap.to(".App", {
                duration: 1.0,
                backgroundColor: "#6b0033",
                color: "#006b38",
                overwrite: "auto",
              });
              gsap.to(box1, {
                duration: 1.0,
                backgroundColor: "#6b0033",
                color: "#006b38",
                overwrite: "auto",
              });
            },

            onLeaveBack: () => {
              gsap.to(".App", {
                duration: 1.0,
                backgroundColor: "#EADEDE",
                color: "#4A407E",
                overwrite: "auto",
              });
              gsap.to(box1, {
                duration: 1.0,
                backgroundColor: "#EADEDE",
                color: "#4A407E",
                overwrite: "auto",
              });
            },
          },
        })
        .to(element1, {
          scrollTrigger: {
            id: "color",
            trigger: comp2,
            start: "top 70%",
            end: "bottom",
            scroller: ".App",
            scrub: true,
            markers: true,
            onEnter: () => {
              gsap.to(".App", {
                duration: 1.0,
                backgroundColor: "#fcf300",
                color: "#072ac8",
                overwrite: "auto",
              });
              gsap.to(box1, {
                duration: 1.0,
                backgroundColor: "#fcf300",
                color: "#072ac8",
                overwrite: "auto",
              });
            },

            onLeaveBack: () => {
              gsap.to(".App", {
                duration: 1.0,
                backgroundColor: "#6b0033",
                color: "#006b38",
                overwrite: "auto",
              });
              gsap.to(box1, {
                duration: 1.0,
                backgroundColor: "#6b0033",
                color: "#006b38",
                overwrite: "auto",
              });
            },
          },
        });

      // horizontal scrolling
      // tl1.to(scrollingElement1, {
      //   scrollTrigger: {
      //     trigger: scrollingElement1,
      //     start: "top top",
      //     end: pinWrapWidth1 * 3,
      //     scroller: ".App", // locomotive element
      //     scrub: true,
      //     // markers: true
      //   },
      //   // we need to increase the scrolling height of this element same as scrolling width
      //   x: -pinWrapWidth1,
      //   ease: "none",
      // });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  });

  return (
    <div className="graphic-design">
      <Section ref={graphicRef} id="shop">
        {/* <HorizontalText text={"Graphic \u00a0  •"} />
        <Right ref={graphicHorizontalRef}>
          <Product img={img1} />
          <Product img={img2} />
          <Product img={placeholder} />
          <Product img={placeholder} />
        </Right>
        <HorizontalGraphic text={"Design \u00a0  •"} /> */}
        {/* <Product img={img1} />
        <Product img={img3} /> */}

        <Item id="before" ref={imgRef1}>
          <img src={img1} alt="graphic design 1" />
          <Text>01</Text>
          <Box ref={boxRef1} />
        </Item>
        <Item ref={comparisonRef} id="after">
          <img
            src={img3}
            alt="graphic design 2"
            id="afterImg"
            ref={compImageRef}
          />
        </Item>
        <Item id="after-2" ref={imgRef3}>
          <img
            src={img2}
            alt="graphic design 3"
            id="afterImg-2"
            ref={comImageRef2}
          />
        </Item>
      </Section>
    </div>
  );
};
export default GraphicDesign;
