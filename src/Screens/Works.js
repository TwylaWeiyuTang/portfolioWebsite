import styled from "styled-components";
import { Product } from "../Components/projects/web-dev/WebDevelopment";
import { useState } from "react";
import { Flip } from "gsap/Flip";
import img1 from "../images/empireThumbnail.png";
import img2 from "../images/sushibathumbnail.png";
import img3 from "../images/vibethumbnail.png";
import coco from "../images/coco.png";
import vv from "../images/covervv.png";
import ftPWC from "../images/ft-pwc.png";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useRef } from "react";

gsap.registerPlugin(Flip);

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 30vh;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin-bottom: 100px;
`;

const TabSelect = styled.button`
  background: none;
  border: none;
  min-width: 20%;
  color: #eadede;
  cursor: pointer;
  margin: 0 10px;
  padding-bottom: 5px;
  font-size: 28px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.5s ease-in-out;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: #eadede;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
  }

  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  :active,
  :focus,
  ::selection {
    font-size: 48px;
    color: transparent;
    -webkit-text-stroke: 2px #eadede;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    font-size: 24px;

    :active,
    :focus,
    ::selection {
      font-size: 36px;
      color: #eadede;
      -webkit-text-stroke: unset;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;

    :active,
    :focus,
    ::selection {
      font-size: 14px;
      color: #eadede;
      -webkit-text-stroke: unset;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 600px) {
  }
`;

const data = [
  {
    id: 0,
    name: "Financial Times × PwC",
    url: "/work-ft-pwc",
    category: "work",
    image: ftPWC,
    class: "item work",
  },
  {
    id: 1,
    name: "Empire Clinic",
    url: "/work-empire-clinic-website",
    category: "work",
    image: img1,
    class: "item work",
  },
  {
    id: 2,
    name: "Coco Da Explorer",
    url: "/personal-projects-coco-da-explore",
    category: "personal projects",
    image: coco,
    class: "item personal",
  },
  {
    id: 3,
    name: "Displore Recommendation System",
    url: "/work-displore-website",
    category: "personal projects",
    image: img2,
    class: "item work",
  },
  {
    id: 4,
    name: "Vibe Ecommerce",
    url: "/work-vibe-ecommerce",
    category: "personal projects",
    image: img3,
    class: "item work",
  },
  {
    id: 5,
    name: "V&V Properties",
    url: "/work-vv-properties",
    category: "work",
    image: vv,
    class: "item work",
  },
];

const Works = () => {
  const [filter, setFilter] = useState();
  const tab = useRef();
  const card = useRef();

  const filters = gsap.utils.toArray(".filter"),
    items = gsap.utils.toArray(".item");

  const handleFilter = (e) => {
    setFilter(e.target.getAttribute("data-filter"));
  };

  useLayoutEffect(() => {
    const updateFilters = (filterClass) => {
      const state = Flip.getState(items);

      items.forEach(
        (item) =>
          (item.style.display =
            item.classList.contains(filterClass) === false
              ? "none"
              : "inline-flex")
      );

      Flip.from(state, {
        duration: 0.3,
        scale: true,
        ease: "power1.inOut",
        stagger: 0.08,
        absolute: true,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.3, delay: 0.3 }
          ),
        onLeave: (elements) => gsap.to(elements, { opacity: 0, duration: 0.3 }),
      });
    };

    updateFilters(filter);

    // filters.forEach((filter) => {
    //   filter.addEventListener("click", (e) => {
    //     setFilter(e.target.getAttribute("data-filter"));
    //     console.log(filter);
    //     updateFilters(filter);
    //   });
    // });

    // return () => {
    //   Flip().kill();
    // };
  }, [items, filters, filter]);

  return (
    <Container>
      <Tab ref={tab}>
        <TabSelect
          //   onClick={handleShowAll}
          onClick={(e) => handleFilter(e)}
          className="filter"
          data-filter="item"
        >
          All
        </TabSelect>
        <TabSelect
          onClick={(e) => handleFilter(e)}
          //   onClick={handleFilterWorks}
          className="filter"
          data-filter="work"
        >
          Works
        </TabSelect>
        <TabSelect
          onClick={(e) => handleFilter(e)}
          //   onClick={handleFilterPersonal}
          className="filter"
          data-filter="personal"
        >
          Personal Projects
        </TabSelect>
      </Tab>
      <Wrapper ref={card}>
        {data.map((work, i) => (
          <Product
            key={i}
            img={work.image}
            title={work.name}
            href={work.url}
            className={work.class}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Works;
