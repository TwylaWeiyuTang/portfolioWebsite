import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

// this component is to give a layout as header-component-footer when it's on homepage,
// contact page, and work page

const PageLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname === "/about-me" ? (
        <Footer background={"#735454"} />
      ) : (
        <Footer />
      )}
    </>
  );
};

export default PageLayout;
