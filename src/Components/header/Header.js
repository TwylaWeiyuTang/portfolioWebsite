import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { ReactComponent as TLogo } from '../../images/logoT.svg'
import './headerStyle.scss'

const Header = () => {
    return (
        <div className='header'>
            <Navbar scrolling expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/"><TLogo style={{width: "80%"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to='/#work' className='header-items nav-link'>Work</Nav.Link>
                    <Nav.Link as={NavLink} to="/about-me" className='header-items nav-link'>About</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" className=' header-items nav-link'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
