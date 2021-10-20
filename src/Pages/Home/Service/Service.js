import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ item }) => {
    const {id,name, img, description} = item
    return (
        <div >
            <Card>
            <Card.Img className="img-fluid position-relative service-img"  variant="top" src={img} />
            <Card.Body className="position-absolute top-0 service-body">
                <Card.Title>{name}</Card.Title>
                <Card.Text >
                     {description.slice(0, 90)}
                </Card.Text>
                    <Link to={`/detail/${id}`}>
                    <Button variant="primary">view Details</Button>
                    </Link>
            </Card.Body>
            </Card>

        </div>
    );
};

export default Service;