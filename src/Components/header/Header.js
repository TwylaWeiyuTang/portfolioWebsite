import React, { useLayoutEffect, useRef } from "react";
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

  return (
    <div className="header">
      <Navbar scrolling expand="lg">
        <Container style={{ maxWidth: "95vw" }}>
          <Navbar.Brand as={NavLink} to="/">
            <TLogo style={{}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/#work"
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
