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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Features</Nav.Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Brain Surgery</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Health Checkup</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Cell in Brain</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Mental Surgery</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Neuron Surgery</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Get More Services</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Blog</Nav.Link>
                    <Nav.Link href="#home">Contact</Nav.Link>
                        </Nav>
                        <Button className="btn btn-primary rounded-pill text-light">Login</Button>
                    </Navbar.Collapse>
                
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;