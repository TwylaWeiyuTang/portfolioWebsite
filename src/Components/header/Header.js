import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { ReactComponent as TLogo } from '../../images/logoT.svg'
import './headerStyle.scss'

const Header = ({bgcolor, color}) => {
    return (
        <div className='header'>
            <Navbar scrolling expand="lg" style={{backgroundColor: bgcolor, color: color}} >
            <Container>
                <Navbar.Brand href="/"><TLogo style={{width: "80%"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={HashLink} to="/#work" className='header-items'>Work</Nav.Link>
                    <Nav.Link as={Link} to="/about-me" className='header-items'>About</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className=' header-items'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
