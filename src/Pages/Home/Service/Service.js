import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ item }) => {
    const {name, img, description} = item
    return (
        <div className="">
            <Card style={{ }}>
            <Card.Img className="img-fluid"  variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                     {description}
                </Card.Text>
                <Button variant="primary">view Details</Button>
            </Card.Body>
            </Card>

        </div>
    );
};

export default Service;