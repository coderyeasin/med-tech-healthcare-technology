import React from 'react';
import {Card, Container, Row } from 'react-bootstrap';
import blog1 from '../../../Images/happy_patient.jpg'
import blog2 from '../../../Images/happy_patient_two.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = () => {
    return (
        <>
            <Container className="my-5">
                <h2 className="text-center title">Happy Patients</h2>
                <p className="text-center">Looking for service, see our happy patients what say about us </p>
                <Row className="my-5">
                <div className="col-md-4">               
                        <Card className="blog-article p-3">
                        <img className="img-fluid rounded-circle w-50 h-50 mx-auto" src={blog1} alt="" />
                        <h3 className="py-2">Certified Plastic Surgeon</h3>
                        <p>Choose a board-certified plastic surgeon and be confident you are in the care of a highly trained surgeon you can trust.However, some will become some will become  seriously ill and require medical attention...</p>
                        <p className="text-secondary"><span className="px-2"> <FontAwesomeIcon icon={faComment} />3k comments </span><span className="px-2"> <FontAwesomeIcon icon={faThumbsUp} /> like : 1.5k</span></p>
                        </Card>
                    </div>
                    <div className="col-md-4">               
                        <Card className="blog-article p-3">
                        <img className="img-fluid rounded-circle w-50 h-50 mx-auto" src={blog2} alt="" />
                        <h3 className="py-2">COVID-19 Treatment with care</h3>
                        <p>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention...</p>
                        <p className="text-secondary"><span className="px-2"> <FontAwesomeIcon icon={faComment} />1.5k comments </span><span className="px-2"> <FontAwesomeIcon icon={faThumbsUp} /> like:2.9k</span></p>
                        </Card>
                    </div>
                    <div className="col-md-4">               
                        <Card className="blog-article p-3">
                        <img className="img-fluid rounded-circle w-50 h-50 mx-auto" src={blog1} alt="" />
                        <h3 className="py-2">Plastic and Reconstructive Surgery</h3>
                        <p>plastic surgery techniques or works in conjunction with a plastic surgeon. The official journal of the American Society of Plastic Surgeons, Plastic and Reconstructive Surgery brings subscribers...</p>
                        <p className="text-secondary"><span className="px-2"> <FontAwesomeIcon icon={faComment} />1k comments </span><span className="px-2"> <FontAwesomeIcon icon={faThumbsUp} /> like:2.5k</span></p>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Blog;