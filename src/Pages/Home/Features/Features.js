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
                    <Card className="p-3  text-center">
                    <FontAwesomeIcon className="mx-auto fs-1 title"  icon={faAmbulance} />
                        <Card.Body>
                        <Card.Title>Emergency Care</Card.Title>
                        <Card.Text>
                       
The 108 Emergency Ambulance Service is a 24x7 service, which anyone can avail by dialling the number 108 on their phone during the case of any emergency.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 text-center">
                        <FontAwesomeIcon className="mx-auto fs-1 title" icon={faHandHoldingMedical} />
                        <Card.Body>
                        <Card.Title>Blood Test</Card.Title>
                        <Card.Text>
                        Any healthy adult, both male and female, can donate blood. Men can donate safely once in every three months while women can donate every four months. Donor should be in the age group of 18 to 65 years.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 text-center">
                        <FontAwesomeIcon className="mx-auto fs-1 title" icon={faTeethOpen} />
                        <Card.Body>
                        <Card.Title>Dental Care </Card.Title>
                        <Card.Text>
                        when you need routine preventive care like regular teeth cleanings, exams, and X-rays. They will also do fillings and provide other basic dental care
                        </Card.Text>
                        </Card.Body>
                </Card>
                <Card className="p-3 text-center">
                        <FontAwesomeIcon className="mx-auto fs-1 title" icon={faHeartbeat} />
                        <Card.Body>
                        <Card.Title>Heart disease</Card.Title>
                        <Card.Text>
                        The term “heart disease” refers to several types of heart conditions. In the United States, the most common type of heart disease is coronary artery disease (CAD), which can lead to heart attack.
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