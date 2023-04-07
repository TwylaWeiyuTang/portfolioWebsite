import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";

import "./App.css";
import GsapEmpire from "./Components/gsap/GsapEmpire";
import Header from "./Components/header/Header";
import ContactPage from "./Screens/contact/ContactPage";
import HomeScreen from "./Screens/homepage/HomeScreen";
import WorkEmpire from "./Screens/website-empire-clinic/WorkEmpire";
import ScrollTriggerProxy from "./Components/ScrollTriggerProxy";
import About from "./Screens/about/About";
import Footer from "./Components/footer/Footer";
import NotFound from "./Screens/not-found/NotFound";
import PageLayout from "./Components/PageLayout";
import WorkDisplore from "./Screens/website-displore/WorkDisplore";
import WorkVibe from "./Screens/website-vibe/WorkVibe";
import Loader from "./Components/Loader";

function App() {
  const containerRef = useRef(null);
  // const [playAnimation, setPlayAnimation] = useState(false);
  // useEffect(() => {
  //   const onPageLoad = () => {
  //     setPlayAnimation(true);
  //   };

  //   // Check if the page has already loaded
  //   if (document.readyState === "complete") {
  //     setTimeout(() => {
  //       onPageLoad();
  //     }, 2000);
  //   } else {
  //     window.addEventListener("load", onPageLoad);
  //     // Remove the event listener when component unmounts
  //     return () => window.removeEventListener("load", onPageLoad);
  //   }
  // }, []);

  return (
    <>
      <Loader />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <AnimatePresence>
          <main
            className="App"
            data-scroll-container
            ref={containerRef}
            style={{ overflowX: "hidden" }}
          >
            <Routes>
              <Route element={<PageLayout />}>
                <Route exact path="/" element={<HomeScreen />} />
                <Route
                  path="work-empire-clinic-website"
                  element={<WorkEmpire />}
                />
                <Route
                  path="work-displore-website"
                  element={<WorkDisplore />}
                />
                <Route path="work-vibe-ecommerce" element={<WorkVibe />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="about-me" element={<About />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
