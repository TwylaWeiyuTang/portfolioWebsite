import { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { useRef } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #eadede;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  height: 100px;
  width: 500px;
  font-size: 30px;
  font-weight: 600;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 90%;
    font-size: 24px;
  }
`;

const Loader = () => {
  const wrapper = useRef();
  const loader = useRef();

  let tl = gsap.timeline();
  useEffect(() => {
    tl.to("body", {
      duration: 0.1,
      css: { overflowY: "hidden" },
      ease: "power3.inOut",
    })
      .to(".homepage", {
        duration: 0.05,
        css: { overflowY: "hidden", height: "90vh" },
      })
      .to(wrapper.current, {
        duration: 0,
        autoAlpha: 1,
        ease: "Power3.easeOut",
      })
      .from(wrapper.current.children, {
        duration: 1.5,
        delay: 1,
        y: 80,
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      .to(wrapper.current.children, {
        duration: 1,
        y: 80,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(".homepage", {
        duration: 0.05,
        css: { overflowY: "hidden", height: "unset" },
      })
      .to("body", {
        duration: 0.1,
        css: { overflowY: "scroll" },
        ease: "power3.inOut",
      })
      .to(
        loader.current,
        {
          duration: 1.5,
          height: "0vh",
          ease: "Power3.easeOut",
        },
        "-=2"
      )
      .to(".preloader", {
        duration: 0,
        css: { display: "none" },
      });
  }, []);
  return (
    <Container ref={loader}>
      <Wrapper ref={wrapper}>
        <span>Developer,</span>
        <span>designer,</span>
        <span>creator.</span>
      </Wrapper>
    </Container>
  );
};

export default Loader;
