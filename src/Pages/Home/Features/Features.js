import React from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAmbulance, faHandHoldingMedical, faTeethOpen, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
    return (
        <>
         <Container className="my-3">
                <Row>
                <CardGroup>
                    <Card className="p-3">
                    <FontAwesomeIcon className="mx-auto fs-1 text-danger" icon={faAmbulance} />
                        <Card.Body>
                        <Card.Title>Emergency Care</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <FontAwesomeIcon className="mx-auto fs-1 text-success" icon={faHandHoldingMedical} />
                        <Card.Body>
                        <Card.Title>Blood Test</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <FontAwesomeIcon className="mx-auto fs-1 text-warning" icon={faTeethOpen} />
                        <Card.Body>
                        <Card.Title>Dental Care </Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                </Card>
                <Card className="p-3">
                        <FontAwesomeIcon className="mx-auto fs-1 text-info" icon={faHeartbeat} />
                        <Card.Body>
                        <Card.Title>Heart disease</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </Row>
            </Container>
        </>
    );
};

export default Features;