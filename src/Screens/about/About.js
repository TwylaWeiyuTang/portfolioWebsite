import React, { useEffect, useRef } from "react";
import "./aboutStyle.scss";
import portrait from "../../images/bordered-portrait.png";
import bubbleLeft from "../../images/bubble-right.png";
import bubbleRight from "../../images/bubble-left.png";
import bubbleMid from "../../images/bubble-mid.png";

import styled from "styled-components";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

const Overlay = styled.div`
  background-image: url(/images/Noise.png);
  mix-blend-mode: soft-light;
  opacity: 0.7;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #735454;
  color: #eaeaea;
  text-align: left;

  body {
    background-color: #735454;
  }

  #portrait {
    height: 70%;
    position: absolute;
    bottom: 0;
    mix-blend-mode: soft-light;
    z-index: 2;
  }

  h3 {
    font-family: "urbanist", sans-serif;
    font-size: 30px;
    font-weight: 300;
    position: absolute;

    :nth-of-type(1) {
      left: 10%;
      top: 20%;
      width: 30%;
    }
    :nth-of-type(2) {
      left: 5%;
      top: 50%;
      width: 20%;
    }
    :nth-of-type(3) {
      left: 65%;
      top: 20%;
      width: 40%;
    }
    :nth-of-type(4) {
      left: 5%;
      top: 80%;
      width: 22%;
    }
    :nth-of-type(5) {
      left: 68%;
      top: 60%;
      width: 25%;
    }
  }

  p {
    font-family: "abril fatface", serif;
    font-size: 50px;
  }

  @media screen and (max-width: 540px) {
    h3 {
      font-size: 14px;

      :nth-of-type(4) {
        left: 10%;
        top: 75%;
        width: 22%;
      }
    }

    p {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 1440px) {
    h3 {
      font-size: 24px;

      :nth-of-type(4) {
        left: 10%;
        top: 75%;
        width: 22%;
      }
    }

    p {
      font-size: 30px;
    }
  }
`;

const DroppingImage = styled.div`
  position: absolute;
  bottom: 0%;
  width: 40%;
  height: 30%;

  img {
    position: absolute;
    width: 42%;

    :nth-of-type(1) {
      bottom: 0%;
      z-index: 10;
    }
    :nth-of-type(2) {
      bottom: 9%;
      right: 0%;
      z-index: 10;
    }
    :nth-of-type(3) {
      bottom: 35%;
      right: 30%;
      transform: rotate(3deg);
    }
  }

  @media screen and (max-width: 540px) {
    width: 70%;
    img {
      width: 50%;

      :nth-of-type(3) {
        bottom: 23%;
        right: 30%;
      }
    }
  }

  @media screen and (min-width: 541px) and (max-width: 960px) {
    width: 60%;

    img {
      :nth-of-type(3) {
        bottom: 23%;
        right: 30%;
      }
    }
  }
`;

const About = () => {
  gsap.registerPlugin(CustomEase);
  let bubbleRefLeft = useRef();
  let bubbleRefRight = useRef();
  let bubbleRefMid = useRef();

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(
      bubbleRefLeft.current,
      {
        y: -2000,
        duration: 4,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.418,0.963 0.426,1 0.434,0.985 0.436,0.963 0.49,0.912 0.564,0.842 0.638,0.899 0.65,0.91 0.722,0.972 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1"
        ),
      },
      "start"
    )
      .from(
        bubbleRefRight.current,
        {
          y: -2000,
          duration: 4,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.418,0.963 0.426,1 0.434,0.985 0.436,0.963 0.49,0.912 0.564,0.842 0.638,0.899 0.65,0.91 0.722,0.972 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1"
          ),
          delay: 1,
        },
        "start"
      )
      .from(
        bubbleRefMid.current,
        {
          y: -2000,
          duration: 4,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.418,0.963 0.426,1 0.434,0.985 0.436,0.963 0.49,0.912 0.564,0.842 0.638,0.899 0.65,0.91 0.722,0.972 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1"
          ),
          delay: 3,
        },
        "start"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      <Container>
        <Overlay />
        <img
          src={portrait}
          alt="me"
          id="portrait"
          data-scroll
          data-scroll-speed="2"
        />
        <h3
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
        >
          Hi! I'm Twyla, a multi-disciplinary web developer based in{" "}
          <p>London, UK.</p>
        </h3>
        <h3
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          On this site, you can find different collections of my work.
        </h3>
        {/* <h3>
          From UI/UX design to full-stack website development, to graphic
          designs.
        </h3> */}
        <h3
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
        >
          I can deliver a comprehensive and quality service.
        </h3>
        <h3
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="horizontal"
        >
          I am everything you need for a solid, user-friendly and
          visually-pleasing website.
        </h3>

        <h3
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          It doesn't matter if you are in touch for work or just to share your
          thoughts and ideas with me! Let's talk and inspire each other!
        </h3>
        <DroppingImage>
          <img src={bubbleLeft} alt="ui/ux designer" ref={bubbleRefLeft} />
          <img src={bubbleMid} alt="fullstack developer" ref={bubbleRefRight} />
          <img src={bubbleRight} alt="graphic designer" ref={bubbleRefMid} />
        </DroppingImage>
      </Container>
    </div>
  );
};

export default About;
