import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";
import { motion } from "framer-motion";
import HorizontalText from "../../horizontal-moving-text/HorizontalText";
import img1 from "../../../images/graphic-design-1.jpg";
import img2 from "../../../images/graphic-design-2.jpg";
import img3 from "../../../images/graphic-design-3.jpg";
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
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end; */
  width: 100%;
  height: 100%;
  /* margin-right: 6rem; */
  /* height: 58vh; */
  /* overflow-y: hidden;
  transition: 1s; */

  &#after {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(0px, 100%);
  }

  img {
    width: 30%;
    height: 100%;
    margin-right: 10vw;
    position: absolute;
    top: 0;

    &#afterImg {
      transform: translate(0px, -100%);
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

  useLayoutEffect(() => {
    let element1 = graphicRef.current;
    console.log(element1);
    let comp = comparisonRef.current;
    console.log(comp);
    let compImage = compImageRef.current;
    console.log(compImage);
    // let scrollingElement1 = graphicHorizontalRef.current;

    // let pinWrapWidth1 = scrollingElement1.offsetWidth;

    let tl1 = gsap.timeline();
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
      tl.fromTo(comp, { yPercent: 100, y: 0 }, { yPercent: 0 });
      tl.fromTo(compImage, { yPercent: -100, y: 0 }, { yPercent: 0 }, 0);

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
      tl1.kill();
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

        <Item id="before">
          <img src={img1} alt="graphic design 1" />
        </Item>
        <Item ref={comparisonRef} id="after">
          <img
            src={img3}
            alt="graphic design 2"
            id="afterImg"
            ref={compImageRef}
          />
        </Item>
      </Section>
    </div>
  );
};
export default GraphicDesign;
