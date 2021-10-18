import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const[service, setService]= useState([])
    
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <Container>
            <div className="my-5">
            <h3 className="text-primary text-uppercase mb-5">Our Services</h3>
            <div className="grid-service">
            {
                service.map(item => <Service key={item.id} item={item}></Service>)
            }
           </div>
        </div>
        </Container>
    );
};

export default Services;