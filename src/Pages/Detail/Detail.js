import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Detail = () => {
    let { id } = useParams();
    
    const [techdata, setTechdata] = useState([]);
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setTechdata(data))
    }, [])
    console.log(techdata, id);

    useEffect(() => {
        const found = techdata.find((item) => item.id === +id)
        setDetail(found);
    }, [techdata])
  
    
    return (
        <Container className="my-5">
            <Row className="my-5 justify-content-center align-items-center">
                <div className="col-md-6 mt-5 py-5">
                    <h3>Tech Services: {id} </h3>
                    <img className="img-fluid" src={detail?.img} alt="" />
                </div>
                <div className="col-md-6 mt-5 py-5">
                    <h3>Name: {detail?.name}</h3>
                    <p><strong>Desription:</strong> {detail?.description} </p>
                    <p><strong>Review:</strong> {detail?.review} <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} /> </p>
                    <p><strong>People Like:</strong> <FontAwesomeIcon icon={faThumbsUp} style={{ color: "green" }} /> 5k</p>
                    <Button>USD: ${detail?.price}</Button>
                </div>
            </Row>
        </Container>
    );
};

export default Detail;