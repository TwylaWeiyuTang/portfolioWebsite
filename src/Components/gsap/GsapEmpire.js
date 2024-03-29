import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";

import "./gsapEmpireStyle.scss";

import img1 from "../../images/empireThumbnail.png";
import img3 from "../../images/empire_hero_2.png";
import img2 from "../../images/empire_who.png";
import video1 from "../../video/empire_aesthetic.mov";
import video2 from "../../video/empire_6_video.mov";
import video3 from "../../video/empire_ozone.mov";

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
  /* background-color: #eadede; */
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
      width: 100% !important;
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

const GsapEmpire = () => {
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
            img={img3}
            title="Hero Section"
            detail="I used black, white and grey as primary color to convey the meaning of the brand. More than beauty, power, elegance, bright, and balance are also wished to be brought to their clients. I implemented language selection function to enhance the user experience for non-italian speakers."
          />
          <Product
            video={video2}
            title="Services"
            detail="I used this 'jigsaw block' style to increase the visual impact for this section and to create a modern brand image. The hover effect brings extra vibrancy for the section. "
          />
          <Product
            video={video1}
            title="Aesthetic Medicine"
            detail="With this simple but clean design, a soothing and nourishing vibe is created. The design is just as the aesthetic medicine experience itself. The in-page contact form helps clients to reach out to the clinic without navigating to other page, thus increasing the user experience and the customer conversion rate.  "
          />
          <Product
            video={video3}
            title="Ozone Therapy"
            detail="Ozonetherapy is one of the Empire Clinic's main services. I used a motion background with water bubbles floating around to create a rich in oxygen and refreshing feeling. By choosing less bright color and transparent text section background,  the design for the entire page is lightweight, which is in a balance with the moving background.  "
          />
          <Product
            img={img2}
            title="Introduction Video"
            detail="I used empire clinic's photo as the background for their introduction video section, which created a unique segmentation."
          />
          {/* <Product img={img1} title='Dermatology' />
          <Product img={img1} title='Nutrition' />
          <Product img={img1} title='Cosmetics' />
          <Product img={img1} title='Ozone therapy' /> */}
        </Right>
      </Section>
    </div>
  );
};

export default GsapEmpire;
