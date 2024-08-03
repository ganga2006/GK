import React, { useState } from 'react';
import './Navbar.css';
import logo from '../image/Logo without tagline.png'; // Correct path to the image
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);


    return (
        <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" className="navbar">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    height="85"
                    width="150"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><Link to='/' style={{ color: '#F9ED32', textDecoration: 'none' }}>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/compare' style={{ color: '#F9ED32', textDecoration: 'none' }}>Compare</Link></Nav.Link>
                    <Nav.Link><Link to='/prebook' style={{ color: '#F9ED32', textDecoration: 'none' }}>Pre-Book</Link></Nav.Link>
                    <Nav.Link><Link to='/about' style={{ color: '#F9ED32', textDecoration: 'none' }}>About Us</Link></Nav.Link>
                    <Nav.Link><Link to='/contact' style={{ color: '#F9ED32', textDecoration: 'none' }}>Contact Us</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
