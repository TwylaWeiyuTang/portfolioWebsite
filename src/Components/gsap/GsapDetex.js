import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";

import "./gsapEmpireStyle.scss";

import img1 from "../../images/about-us-vv.png";
import video1 from "../../video/homepage-vv.webm";
import video2 from "../../video/landlord-video.mov";
import video3 from "../../video/contact-us-vv.mov";
import video4 from "../../video/displore_footer.mov";

import { motion } from "framer-motion";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #eadede;
  background-color: #000;
`;

const Right = styled.div`
  position: absolute;
  left: 5%;
  min-height: 100vh;
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    width: 60vw;
    font-size: 5rem;
    line-height: 150%;
    margin-right: 15rem;
    margin-left: 5rem;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px #eadede;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 3rem !important;
    }
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  position: relative;
  margin-left: 10vw;
  margin-right: 10vw;

  /* img {
        position: absolute;
        bottom: -40vh;
        width: 100%;
    } */

  h4 {
    display: inline-block;
    width: 40%;
    font-weight: 500;
    font-size: 3rem;
    text-align: justify;
    justify-content: center;
    position: absolute;
    right: 0%;
    top: -35vh;
    color: #eadede;
  }

  span {
    position: absolute;
    left: 0%;
    top: 10vh;
    width: 30%;
    font-size: 1.2rem;
    text-align: left;

    font-family: "Urbanist", sans-serif;
    font-weight: 100;
    color: #eadede;
    mix-blend-mode: difference;
    z-index: 10;
  }

  @media screen and (max-width: 600px) {
    h4 {
      font-size: 2rem !important;
      width: 90% !important;
      left: 10% !important;
    }

    video {
      width: 85% !important;
      transform: translateY(-10vh) !important;
    }

    span {
      font-size: 0.9rem !important;
      width: 85% !important;
      left: 10% !important;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    video {
      width: 73% !important;
      transform: translateY(-5vh) !important;
    }

    span {
      width: 50%;
      top: 15vh;
    }
  }

  @media screen and (min-width: 1001px) and (max-width: 1330px) {
    h4 {
      width: 100% !important;
      top: unset !important;
      bottom: 30vh !important;
    }

    video {
      width: 60% !important;
      transform: translateY(-2vh) !important;
    }

    span {
      font-size: 1rem;
      width: 40%;
      top: 15vh;
    }
  }
`;

const Image = styled(motion.img)`
  z-index: 4;
  width: 58.5%;
  position: absolute;
  transform: translateY(9vh) translateX(5vw);

  @media screen and (max-width: 600px) {
    width: 85% !important;
    transform: translateY(-10vh) !important;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    width: 73% !important;
    transform: translateY(-5vh) !important;
  }

  @media screen and (min-width: 1001px) and (max-width: 1330px) {
    width: 60% !important;
    transform: translateY(-2vh) !important;
  }
`;

const Wrapper = styled(motion.img)`
  position: absolute;
  transform: translateY(9vh) translateX(5vw);
  width: 60%;

  @media screen and (max-width: 600px) {
    width: 87.5% !important;
    transform: translateY(-10vh) !important;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    width: 75.5% !important;
    transform: translateY(-5vh) !important;
  }

  @media screen and (min-width: 1001px) and (max-width: 1330px) {
    width: 62.5% !important;
    transform: translateY(-2vh) !important;
  }
`;

const Product = ({ img, title = "", detail = "", video }) => {
  return (
    <Item
      initial={{ transform: "scale(80%)" }}
      whileInView={{ transform: "scale(120%)" }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: "all" }}
    >
      {img ? <Image src={img} alt={title} /> : null}

      {video ? (
        <video
          src={video}
          loop
          muted
          playsInline
          autoPlay
          style={{
            zIndex: 4,
            width: "58.5%",
            position: "absolute",
            transform: "translateY(9vh) translateX(5vw)",
          }}
        />
      ) : null}

      <Wrapper
        src="../../images/macbook-frame.png"
        alt="frame"
        style={{ zIndex: 10 }}
      />
      <h4>{title}</h4>
      <span>{detail}</span>
    </Item>
  );
};

const GsapDetex = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const trigger = useRef(null);
  const horizontalRef = useRef(null);

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
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          //   markers: true
        },
        // we need to increase the scrolling height of this element same as scrolling width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      // horizontal scrolling
      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          //   markers: true
        },
        // we need to increase the scrolling height of this element same as scrolling width
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  });
  return (
    <div>
      <Section ref={ref} id="shop">
        <Right ref={horizontalRef}>
          <h2>Some Highlights</h2>
          <Product
            video={
              "https://twyla-personal-projects.s3.eu-west-2.amazonaws.com/detex-home.webm"
            }
            title="Homepage"
            detail="
            Implemented a dark and light mode feature. Enhancing user interaction by making the hero headline text follow mouse movement, this infuses a delightful element that elevates the appeal of the clean interface. Added a touch of neon light gracefully accents the page background and button.
        "
          />
          <Product
            video={
              "https://twyla-personal-projects.s3.eu-west-2.amazonaws.com/detex-documentation.webm"
            }
            title="Documentation"
            detail="Documentation code section is nicely animated line by line with prism-react-renderer library. Users can easily send request to the API route by following the code displayed in the panel."
          />
          <Product
            video={
              "https://twyla-personal-projects.s3.eu-west-2.amazonaws.com/detex-dashboard.webm"
            }
            title="User Dashboard"
            detail="Sensitive routes protection is implemented. Access to the dashboard is exclusively granted to users who have logged in and obtained an API key through a prior request. Within the dashboard, users can view their current active key, generate new keys, or revoke existing ones. Additionally, the dashboard page showcases the API request history in a table format, allowing users to conveniently sort the results based on various labels."
          />
          <Product
            video={
              "https://twyla-personal-projects.s3.eu-west-2.amazonaws.com/detex-playground.webm"
            }
            title="Playground"
            detail="This particular feature caters primarily to non-technical users who are eager to explore its capabilities. Once an API key is requested, users can input any two pieces of texts to generate a similarity score. To ensure optimal performance, 1000 characters limit and an API rate limit of 5 calls per hour have been enforced."
          />
        </Right>
      </Section>
    </div>
  );
};

export default GsapDetex;
