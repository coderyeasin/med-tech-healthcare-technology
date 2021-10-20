import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logout } = useAuth();
  
    return (
        <div>
     <Navbar bg="light" fixed="top" collapseOnSelect expand="lg">
            <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center">
                            <HashLink className="text-decoration-none px-3 " to="/home#home">Home</HashLink>
                          <HashLink as={Link} smooth to="/home#services" className="text-decoration-none px-3 text-primary" >Services</HashLink>
                            <Link className="text-decoration-none px-3 " to="/doctors">Doctors</Link>
                            <Link className="text-decoration-none px-3 " to="/medtechs">MedTechs</Link>
                            <Nav.Link className="text-primary" href="#home">
                            {user?.uid &&
                                    `${user?.displayName}`
                                    }
                            </Nav.Link>
                            <Nav.Link className="text-primary" href="#home">
                                {user?.uid ?
                                   <img width="30px" height="30px" className="img-fluid rounded-circle" src={user?.photoURL} alt="" />
                                   :  <FontAwesomeIcon icon={faUser}/>
                                }
                            </Nav.Link>
                                   
                        </Nav>
                        <Link onClick={logout} to="/login" className="appoin rounded-pill text-light px-3 text-decoration-none">
                            {user?.uid ? 'Logout' : 'Login'}
            </Link>
                    </Navbar.Collapse>
                
            </Container>
            </Navbar>
        </div>
    );
};
 
export default Header;