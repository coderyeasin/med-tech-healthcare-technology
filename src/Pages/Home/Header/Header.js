import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
     <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="text-primary" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-primary" href="#link">About</Nav.Link>
                    <NavDropdown className="text-primary" title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Brain Surgery</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Health Checkup</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Cell in Brain</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Mental Surgery</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Neuron Surgery</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Get More Services</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-primary" href="#home">Blog</Nav.Link>
                    <Nav.Link className="text-primary" href="#home">Contact</Nav.Link>
                        </Nav>
                        <Button className="appoin rounded-pill text-light">Appoinment</Button>
                    </Navbar.Collapse>
                
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;