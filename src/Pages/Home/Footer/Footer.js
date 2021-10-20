import React from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer py-3">
            <Container>
                <Row className="d-flex justify-content-center align-items-center text-light">
                    <div className="col-md-3">
                        <h3>Address</h3>
                        <address>
                        <p><FontAwesomeIcon icon={faLocationArrow} />  Location: 143 Gordon Terrace Embarrassing <br />NG33 0ZT United Kingdom</p>
                        <p>   <FontAwesomeIcon icon={faPhone} />  Email: info@healthcare.com</p>
                        <p><FontAwesomeIcon icon={faEnvelope} />  Phone: +1800 326 3264</p>
                        </address>
                    </div>
                    <div className="col-md-3 "> <h3>Social Media</h3>
                        <ul className="list-unstyled ">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>WhatsApp</li>
                    </ul>
                    </div>
                    <div className="col-md-3"> <h3>Quick Links</h3>
                    <ul className="list-unstyled">
                            <li>Home</li>
                            <li>Doctor's Chamber</li>
                            <li>About us</li>
                            <li>Career</li>
                            <li>Vision & Mission</li>
                    </ul>
                    </div>
                    <div className="col-md-3"> <h3>Subscribe</h3>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Don't Miss Update"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2"className="text-light bg-primary">@Email.com</InputGroup.Text>
                    </InputGroup>
                    </div>
                </Row>
            </Container>
            <p className="mt-3 text-center">
                <small className="text-center text-light px-2 py-2 bottom-bar w-50 rounded-pill mx-auto">MedTech 2021 @ All Rights Reserved</small>
            </p>
        </div>
    );
};

export default Footer;