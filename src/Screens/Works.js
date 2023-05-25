import styled from "styled-components";
import { Product } from "../Components/projects/web-dev/WebDevelopment";
import { useState } from "react";
import { Flip } from "gsap/Flip";
import img1 from "../images/empireThumbnail.png";
import img2 from "../images/sushibathumbnail.png";
import img3 from "../images/vibethumbnail.png";
import ftPWC from "../images/ft-pwc.png";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

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
  height: 40vh;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TabSelect = styled.button`
  background: none;
  border: none;
  width: 20%;
  color: #eadede;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.5s ease;
  padding-bottom: 0;
  border-bottom: none;

  :hover {
    transform: translateY(-5px);
  }

  :active,
  :focus,
  ::selection {
    padding-bottom: 5px;
    border-bottom: 2px solid #eadede;
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
`;

const data = [
  {
    id: 0,
    name: "ft-pwc",
    url: "/work-ft-pwc",
    category: "work",
    image: ftPWC,
    class: "item work",
  },
  {
    id: 1,
    name: "empire-clinic",
    url: "/work-empire-clinic-website",
    category: "work",
    image: img1,
    class: "item work",
  },
  {
    id: 2,
    name: "coco-da-explore",
    url: "/work-coco-da-explore",
    category: "personal projects",
    image: img2,
    class: "item personal",
  },
  {
    id: 3,
    name: "displore",
    url: "/work-coco-da-explore",
    category: "personal projects",
    image: img2,
    class: "item personal",
  },
];

const Works = () => {
  const [filter, setFilter] = useState();
  //   const [isWork, setIsWork] = useState(false);
  //   const [isPersonal, setIsPersonal] = useState(false);

  //   const handleFilterWorks = () => {
  //     if (isPersonal) {
  //       setIsPersonal(false);
  //     }
  //     setIsWork(true);
  //   };

  //   const handleFilterPersonal = () => {
  //     if (isWork) {
  //       setIsWork(false);
  //     }
  //     setIsPersonal(true);
  //   };

  //   const handleShowAll = () => {
  //     setIsPersonal(false);
  //     setIsWork(false);
  //   };

  const filters = gsap.utils.toArray(".filter"),
    items = gsap.utils.toArray(".item");

  const handleFilter = (e) => {
    setFilter(e.target.getAttribute("data-filter"));
  };

  useLayoutEffect(() => {
    const updateFilters = (filterClass) => {
      const state = Flip.getState(items);

      console.log(filterClass);

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
      <Tab>
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
      {/* {!isPersonal && !isWork && ( */}
      <Wrapper>
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
      {/* )} */}
      {/* {isPersonal && (
        <Wrapper>
          {data
            .filter((a) => a.category === "personal projects")
            .map((project, i) => (
              <Product
                key={i}
                img={project.image}
                title={project.name}
                href={project.url}
                className="item personal"
              />
            ))}
        </Wrapper>
      )}
      {isWork && (
        <Wrapper>
          {data
            .filter((a) => a.category === "work")
            .map((project, i) => (
              <Product
                key={i}
                img={project.image}
                title={project.name}
                href={project.url}
                className="item work"
              />
            ))}
        </Wrapper>
      )} */}
    </Container>
  );
};

export default Works;
