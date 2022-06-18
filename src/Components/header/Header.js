import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Logo from '../Logo';

import './headerStyle.scss'

const Header = () => {
    return (
        <div>
            <Navbar scrolling dark expand="lg" >
            <Container>
                <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={HashLink} to="/#work" className='header-items'>Work</Nav.Link>
                    <Nav.Link as={Link} to="/about" className='header-items'>About</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className=' header-items'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
