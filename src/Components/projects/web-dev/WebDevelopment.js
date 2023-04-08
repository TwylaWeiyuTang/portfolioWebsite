import React, { useRef, useLayoutEffect } from "react";
import HorizontalText from "../../horizontal-moving-text/HorizontalText";
import "./webDevelopmentStyle.scss";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import img1 from "../../../images/empireThumbnail.png";
import img2 from "../../../images/sushibathumbnail.png";
import img3 from "../../../images/vibethumbnail.png";
import placeholder from "../../../images/placeholder.png";

import { motion } from "framer-motion";
import HorizontalLeft from "../../horizontal-moving-text/HorizontalLeft";
import { Link } from "react-router-dom";

const Section = styled.section`
  position: relative;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
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
  visibility: hidden;
`;

const Right = styled.div`
  position: absolute;
  left: 2%;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    width: 40rem;
    margin-right: 6rem;
    color: black;
  }

  @media screen and (max-width: 600px) {
    top: 30vh;
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  margin-right: 6rem;

  a {
    position: relative;
  }

  a::before {
    content: "";
    position: absolute;
    top: -200px;
    bottom: -200px;
    left: -100px;
    right: -100px;
  }

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    position: relative;
  }

  h4 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: justify;
    justify-content: center;
    position: absolute;
    visibility: hidden;
  }

  &:hover {
    background-color: black;

    img {
      opacity: 0.8;
    }

    h4 {
      visibility: visible;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    margin-right: 3rem;

    h4 {
      font-size: 1.2rem;
    }

    a::before {
      content: "";
      position: absolute;
      top: -100px;
      bottom: -100px;
      left: -100px;
      right: -100px;
    }
  }
`;

const PageStyleChange = gsap.to(".App", {
  duration: 1.0,
  backgroundColor: "#000",
  color: "#fff",
  overwrite: "auto",
});

const Product = ({ img, title = "", href = "/" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h4>
        <a href={href}>{title}</a>
      </h4>
    </Item>
  );
};

const WebDevelopment = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);
  const overlayRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: () => "+=" + scrollingElement.offsetWidth,
          scroller: ".App", // locomotive element
          scrub: 1,
          pin: true,
        },
        // we need to increase the scrolling height of this element same as scrolling width
        // height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      // horizontal scrolling
      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: () => "+=" + scrollingElement.offsetWidth,
          scroller: ".App", // locomotive element
          scrub: 1,
        },
        // we need to increase the scrolling height of this element same as scrolling width
        x: -pinWrapWidth,
        ease: "none",
      });

      tl.to(overlayRef.current, {
        scrollTrigger: {
          id: "overlay",
          trigger: scrollingElement,
          start: () => "+=" + scrollingElement.offsetWidth,
          scroller: ".App",
          scrub: true,
        },
        autoAlpha: 1,
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
    <div className="web-dev">
      <Section ref={ref} id="work">
        <Overlay ref={overlayRef} />
        <HorizontalText text={"Website \u00a0  •"} />
        <Right ref={horizontalRef}>
          <Product
            img={img1}
            title="Empire Clinic"
            href="/work-empire-clinic-website"
          />
          <Product
            img={img2}
            title="Displore Recommendation System"
            href="/work-displore-website"
          />
          <Product
            img={img3}
            title="Vibe Ecommerce"
            href="/work-vibe-ecommerce"
          />
          <Product img={placeholder} />
        </Right>
        <HorizontalLeft text={"Development \u00a0  • \u00a0"} />
      </Section>
    </div>
  );
};

export default WebDevelopment;
