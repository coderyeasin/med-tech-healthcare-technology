import React from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5 py-3">
            <Container>
                <Row className="d-flex justify-content-left align-items-center text-light">
                    <div className="col-md-3"> <h3>Address</h3>
                        <address>
                        Location: 143 Gordon Terrace Embarrassing NG33 0ZT United Kingdom
                        Email: info@healthcare.com
                        Phone: +1800 326 3264
                        </address>
                    </div>
                    <div className="col-md-3"> <h3>Social Media</h3>
                        <ul className="list-unstyled">
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
                            <li>Vision</li>
                    </ul>
                    </div>
                    <div className="col-md-3"> <h3>Subscribe</h3>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Subscribe with Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2"className="text-light bg-primary">@Email.com</InputGroup.Text>
                    </InputGroup>
                    </div>
                </Row>
            </Container>
            <p className="bottom-bar mt-3">
                <h5 className="text-center text-light py-2">MedTech 2021 @ All Rights Reserved</h5>
            </p>
        </div>
    );
};

export default Footer;