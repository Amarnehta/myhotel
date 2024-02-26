// NavbarComponent.js
import React from 'react';
import '../App.css';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, } from 'react-router-dom';
import LoginPopup from './loginpop';
import SignupPopup from './signup';
const NavbarComponent = () => {
    return (
        <Navbar expand="xl">
            <Container style={{ marginTop: "-30px" }}>
                {/* Left side: Logo */}
                <Navbar.Brand className='Navbar-nav.brand' as={Link} to="/">
                    <Image src="https://i.pinimg.com/originals/7d/7c/8a/7d7c8afbe5f6b9bed2dd41bd71437b89.png" alt="Your Logo" style={{ width: '150px', height: '150px' }} />
                </Navbar.Brand>

                {/* Right side: Menu items */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='navbar-nav .nav-link'>
                        <ScrollLink
                            to="cards" // Specify the ID of the section to scroll to
                            smooth={true}
                            duration={10}
                        >
                            <Nav.Link className="nav-link">
                                BookRooms
                            </Nav.Link>
                        </ScrollLink>
                        <ScrollLink
                            to="services" // Specify the ID of the section to scroll to
                            smooth={true}
                            duration={10}
                        >
                            <Nav.Link className="nav-link">
                                Services
                            </Nav.Link>
                        </ScrollLink>
                        <ScrollLink
                            to="about" // Specify the ID of the section to scroll to
                            smooth={true}
                            duration={10}
                        >
                            <Nav.Link className="nav-link">
                                About
                            </Nav.Link>
                        </ScrollLink>

                        <ScrollLink
                            to="contact" // Specify the ID of the section to scroll to
                            smooth={true}
                            duration={10}
                        >
                            <Nav.Link className="nav-link">
                                Contact
                            </Nav.Link>
                        </ScrollLink>


                        {/* Dropdown for Login */}
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <NavDropdown.Item className='NavDrop-down'>
                                <LoginPopup/>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='NavDrop-down'>
                                <SignupPopup/>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
