import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

// this component is to give a layout as header-component-footer when it's on homepage, 
// contact page, and work page

const PageLayout = () => {
    const location = useLocation()

  return (
    <>
        {location.pathname !== "/about-me" ? (
          <Header className='cursor-scale' bgcolor='transparent' color='white' />
        ) : <Header bgcolor='white' color='black' />}
        <Outlet />
         {location.pathname !== "/about-me" ? (
          <Footer />
        ) : null}
    </>
  )
}

export default PageLayout