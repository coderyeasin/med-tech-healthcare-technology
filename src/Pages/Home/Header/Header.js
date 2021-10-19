import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const { user, logout } = useFirebase();

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
                    <Nav.Link className="text-primary" href="#link">Features</Nav.Link>
                    <NavDropdown className="text-primary" title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Brain Surgery</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Health Checkup</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Cell in Brain</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Mental Surgery</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Neuron Surgery</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Get More Services</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-primary" href="#home">MedTechs</Nav.Link>
                            <Nav.Link className="text-primary" href="#home">
                                {user.email ?
                                    <img width="30px" height="30px" className="img-fluid rounded-circle" src={user.photoURL} alt="" />
                                    || `${user.displayName}`
                                : <FontAwesomeIcon icon={faUser} />}</Nav.Link>
                        </Nav>
                        <Link onClick={logout} to="/login" className="appoin rounded-pill text-light px-3">
                            {user.email ? 'Logout' : 'Login'}
            </Link>
                    </Navbar.Collapse>
                
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;