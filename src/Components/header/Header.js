import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { ReactComponent as TLogo } from "../../images/logoT.svg";
import "./headerStyle.scss";

const Header = () => {
  const handleCollapse = () => {
    console.log("handleCollapse");
    var nav = document.getElementById("basic-navbar-nav");
    // var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    // btn.classList.add("collapsed");
  };

  const location = useLocation();
  const navTab = useRef();

  useEffect(() => {
    if (
      // location.pathname === "/work-displore-website" ||
      // location.pathname === "/work-empire-clinic-website" ||
      // location.pathname === "/work-vibe-ecommerce"
      location.pathname.includes("work") ||
      location.pathname.includes("project")
    ) {
      navTab.current.style.color = "#000";
    } else {
      navTab.current.style.color = "#eadede";
    }
  }, [location, navTab]);

  return (
    <div className="header">
      <Navbar scrolling expand="lg">
        <Container style={{ maxWidth: "95vw" }}>
          <Navbar.Brand as={NavLink} to="/">
            <TLogo style={{}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" ref={navTab}>
              <Nav.Link
                as={NavLink}
                to="/work"
                className="header-items "
                onClick={handleCollapse}
              >
                Work
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about-me"
                className="header-items "
                onClick={handleCollapse}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className=" header-items "
                onClick={handleCollapse}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
