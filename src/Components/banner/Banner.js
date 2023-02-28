import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import "./bannerStyle.scss";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-image: url(images/Noisenoise.png);
  mix-blend-mode: soft-light;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerComponent = styled.h1`
  font-size: 2rem;

  :nth-child(1) {
    font-family: "Lily Script One", cursive;
    font-size: 200px !important;
    text-shadow: 6px 6px #32746c;
    -webkit-text-stroke: 2px black;
    color: transparent;

    margin-bottom: -10rem;
  }

  span {
    line-height: 200%;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 601px) and (max-width: 1330px) {
    font-size: 1.8rem !important;
  }

  @media screen and (min-width: 1800px) {
    font-size: 2.5rem !important;

    span {
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  @media screen and (min-width: 2200px) {
    :nth-child(1) {
      /* margin-bottom: unset !important; */
      margin-top: 20vh;
    }

    span {
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`;

const Arrow = styled.div`
  position: absolute;
  right: 15%;
  bottom: -10vh;

  @media screen and (min-width: 1800px) {
    bottom: 0vh;
  }

  @media screen and (min-width: 2200px) {
    bottom: 10vh;
  }
`;

const Banner = () => {
  let tlDraw = new gsap.timeline();

  useEffect(() => {
    const draw = document.querySelectorAll(".draw-me");

    tlDraw.to(draw, {
      y: 50,
      duration: 1,
      ease: "Power3.easeInOut",
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <div>
      <Section>
        {/* <Overlay /> */}
        <Container id="up">
          <BannerComponent>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="8"
              data-scroll-target="#up"
            >
              “
            </span>
          </BannerComponent>
          <BannerComponent>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-8"
              data-scroll-target="#up"
            >
              I enjoy doing anything allows me to be creative and think
              logically.{" "}
            </span>
          </BannerComponent>
          <BannerComponent>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="4"
              data-scroll-target="#up"
            >
              In this website, you can find my selected works about website
              design/development, and graphic design.{" "}
            </span>
          </BannerComponent>
          <BannerComponent>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-6"
              data-scroll-target="#up"
            >
              I am keeping exploring and learning, so in the near future you can
              expect to see some other types of works here.{" "}
            </span>
          </BannerComponent>
          <BannerComponent>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="6"
              data-scroll-target="#up"
            >
              Please see some of my selected works
            </span>
          </BannerComponent>
          <Arrow>
            <svg
              width="80"
              height="300"
              viewBox="0 0 80 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.3162 16.7371C16.0565 12.8751 32.0172 19.4241 41.6893 30.6512C53.7262 44.6209 56.5534 63.827 55.0029 81.6703C54.1197 91.8342 51.9105 101.841 49.3617 109"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="5"
                stroke="black"
                className="draw-me"
              />

              <path
                d="M54.3421 113.301C57.5578 110.342 60.9087 107.478 64.399 104.846C67.9023 102.209 71.6646 99.912 75.0816 97.1737C76.3963 96.1179 "
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="5"
                stroke="black"
                className="draw-me"
              />

              <path
                d="M52.0277 110.19C48.992 103.368 44.6123 96.7017 38.602 92.1386C37.3454 91.1872 36.0805 93.0724 37.1918"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="5"
                stroke="black"
                className="draw-me"
              />
            </svg>
          </Arrow>
        </Container>
      </Section>
    </div>
  );
};

export default Banner;
