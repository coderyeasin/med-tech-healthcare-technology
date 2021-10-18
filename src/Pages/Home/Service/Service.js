import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ item }) => {
    const {name, img, description} = item
    return (
        <div >
            <Card>
            <Card.Img className="img-fluid position-relative service-img"  variant="top" src={img} />
            <Card.Body className="position-absolute top-0 service-body">
                <Card.Title>{name}</Card.Title>
                <Card.Text >
                     {description}
                </Card.Text>
                <Button variant="primary">view Details</Button>
            </Card.Body>
            </Card>

        </div>
    );
};

export default Service;