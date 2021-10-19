import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img1 from '../../Images/other/glove-hand.jpg'
import img2 from '../../Images/other/syringe.png'
import img3 from '../../Images/other/doctor-with-stethoscope.jpg'

const Doctors = () => {
    return (
        <Container>
            <Row>
                <div className="col-md-4">
                    <h3 className="text-primary text-center"> Dr. Cale Dodge </h3>
                    <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="col-md-4">
                <h3 className="text-primary text-center"> Dr. Neherika Monju </h3>
                    <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="col-md-4">
                <h3 className="text-primary text-center"> Dr. Sierra Leone </h3>
                    <img className="img-fluid" src={img3} alt="" />
                </div>
           </Row>
        </Container>
    );
};

export default Doctors;