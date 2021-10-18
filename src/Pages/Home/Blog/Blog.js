import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import blog1 from'../../../Images/happy_patient.jpg'

const Blog = () => {
    return (
        <>
            <Container>
                <Row className="my-5">
                    <div className="col-md-4">
                        <img className="img-fluid" src={blog1} alt="" />
                        <p>lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good 
                            lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good </p>
                        <Button>Details</Button>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={blog1} alt="" />
                        <p>lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good 
                            lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good </p>
                        <Button>Details</Button>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={blog1} alt="" />
                        <p>lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good 
                            lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good lorem ipsum is very foood, good </p>
                        <Button>Details</Button>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Blog;