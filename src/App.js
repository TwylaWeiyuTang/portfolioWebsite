import { useRef } from 'react';
import { Route, Routes} from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { AnimatePresence } from 'framer-motion';

import './App.css';
import GsapEmpire from './Components/gsap/GsapEmpire';
import Header from './Components/header/Header';
import ContactPage from './Screens/contact/ContactPage';
import HomeScreen from './Screens/homepage/HomeScreen';
import WorkEmpire from './Screens/website-empire-clinic/WorkEmpire';
import ScrollTriggerProxy from './Components/ScrollTriggerProxy';

function App() {
  const containerRef = useRef(null)

  return (
    <>
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
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
        <main className='App' data-scroll-container ref={containerRef}>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route path='/work-empire-clinic-website' element={<WorkEmpire />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
      </>
  );
}

export default App;
