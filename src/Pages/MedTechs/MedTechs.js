import React from 'react';
import { Container, Row } from 'react-bootstrap';
import tech1 from '../../Images/Services/brain-tech.jpg'
import tech2 from '../../Images/Services/diagnose-technology.jpg'
import tech3 from '../../Images/Services/mental-health.jpg'

const MedTechs = () => {
    return (
        <Container className="my-5 py-4">
        <Row>
            <div className="col-md-4 my-5 py-5">
                <h3 className="text-primary text-center"> Brain Tech </h3>
                <img className="img-fluid" src={tech1} alt="" />
            </div>
            <div className="col-md-4 my-5 py-5">
            <h3 className="text-primary text-center"> Diagnose Tech </h3>
                <img className="img-fluid" src={tech2} alt="" />
            </div>
            <div className="col-md-4 my-5 py-5">
            <h3 className="text-primary text-center"> Mental Health</h3>
                <img className="img-fluid" src={tech3} alt="" />
            </div>
       </Row>
    </Container>
    );
};

export default MedTechs;