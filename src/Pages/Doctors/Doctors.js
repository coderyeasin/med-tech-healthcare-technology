import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img1 from '../../Images/other/glove-hand.jpg'
import img2 from '../../Images/other/syringe.png'
import img3 from '../../Images/other/doctor-with-stethoscope.jpg'

const Doctors = () => {
    return (
        <Container className="mt-5 pt-3">
            <h3 className="text-primary text-center mt-5 pt-3">Medical Technology Usage Best Doctors</h3>
            <Row className="my-5">
                <div className="col-md-4 my-5 py-5">
                    <h3 className="text-primary text-center mb-3"> Dr. Cale Dodge </h3>
                    <img className="img-fluid" src={img1} alt="" />
                    <p>"Gary W. Small, Department of Psychiatry and Biobehavioral Sciences and Semel Institute for Neuroscience and Human Behavior, the UCLA Longevity Center, David Geffen School of Medicine at the University of California, Los Angeles, California, US;"</p>
                </div>
                <div className="col-md-4 my-5 py-5">
                <h3 className="text-primary text-center mb-3"> Dr. Neherika Monju </h3>
                    <img className="img-fluid" src={img2} alt="" />
                    <p>"Jooyeon Lee, Department of Psychiatry and Biobehavioral Sciences and Semel Institute for Neuroscience and Human Behavior, the UCLA Longevity Center, David Geffen School of Medicine at the University of California, Los Angeles, California, US;"</p>
                </div>
                <div className="col-md-4 my-5 py-5">
                <h3 className="text-primary text-center mb-3"> Dr. Sierra Leone </h3>
                    <img className="img-fluid" src={img3} alt="" />
                    <p>"Aaron Kaufman, Department of Psychiatry and Biobehavioral Sciences and Semel Institute for Neuroscience and Human Behavior, the UCLA Longevity Center, David Geffen School of Medicine at the University of California, Los Angeles, California, US;"</p>
                </div>
            </Row>
            <Row className="my-5">
                <div className="col-md-4 ">
                    <h3 className="text-primary text-center mb-3"> Dr. Cale Dodge </h3>
                    <img className="img-fluid" src={img1} alt="" />
                    <p>"Gary W. Small, Department of Psychiatry and Biobehavioral Sciences and Semel Institute for Neuroscience and Human Behavior, the UCLA Longevity Center, David Geffen School of Medicine at the University of California, Los Angeles, California, US;"</p>
                </div>
                <div className="col-md-4 ">
                <h3 className="text-primary text-center mb-3"> Dr. Neherika Monju </h3>
                    <img className="img-fluid" src={img2} alt="" />
                    <p>"Jooyeon Lee, Department of Psychiatry and Biobehavioral Sciences and Semel Institute for Neuroscience and Human Behavior, the UCLA Longevity Center, David Geffen School of Medicine at the University of California, Los Angeles, California, US;"</p>
                </div>
                <div className="col-md-4">
                <h3 className="text-primary text-center mb-3"> Dr. Sierra Leone </h3>
                    <img className="img-fluid" src={img3} alt="" />
                    <p>"Aaron Kaufman, Department of Psychiatry and Biobehavioral Sciences and Semel Institute for Neuroscience and Human Behavior, the UCLA Longevity Center, David Geffen School of Medicine at the University of California, Los Angeles, California, US;"</p>
                </div>
           </Row>
        </Container>
    );
};

export default Doctors;