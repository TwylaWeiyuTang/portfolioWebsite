import { useLayoutEffect, useRef } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

import './App.css';
import GsapEmpire from './Components/gsap/GsapEmpire';
import Header from './Components/header/Header';
import ContactPage from './Screens/contact/ContactPage';
import HomeScreen from './Screens/homepage/HomeScreen';
import WorkEmpire from './Screens/website-empire-clinic/WorkEmpire';
import ScrollTriggerProxy from './Components/ScrollTriggerProxy';
import About from './Screens/about/About';
import Footer from './Components/footer/Footer';
import NotFound from './Screens/not-found/NotFound';
import PageLayout from './Components/PageLayout';
import WorkDisplore from './Screens/website-displore/WorkDisplore';
import WorkVibe from './Screens/website-vibe/WorkVibe';

function App() {
  const containerRef = useRef(null)
  const location = useLocation()

  useLayoutEffect(() => {
    let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale'); 
let mouseX = 0;
let mouseY = 0;

gsap.to({}, {
  duration:0.016, 
  repeat: -1,
  onRepeat: function(){
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      }
    })
  }
});

window.addEventListener('mousemove', (e)=> {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

cursorScale.forEach(link => {
  link.addEventListener('mousemove', ()=> {
    cursor.classList.add('grow'); 
    if (link.classList.contains('small')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
  
  link.addEventListener('mouseleave', ()=> {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
})
  })

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
        {/* <div className="cursor"></div> */}
        
        <Routes>
          <Route element={<PageLayout />}>
          <Route exact path='/' element={<HomeScreen />} />
          <Route path='work-empire-clinic-website' element={<WorkEmpire />} />
          <Route path='work-displore-website' element={<WorkDisplore />} />
          <Route path='work-vibe-ecommerce' element={<WorkVibe />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='about-me' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
      </>
  );
}

export default App;
