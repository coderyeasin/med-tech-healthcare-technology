import React from 'react';
import { Button, ButtonGroup, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import doctor from '../../../Images/other/care.jpg'

const Login = () => {

    const { handleNamechange, googleSigning, handleEmail, handlePass, githubLogin, handleRegistration, isLogin, toggleLogin, handleResetPass, error } = useFirebase();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.form || '/home';

    const handleGoogleLogin = () => {
        googleSigning()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <>
            <Container className="my-5">
             
                <Row>
                    <div className="col-md-6">
                        <img className="img-fluid" src={doctor} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h3 className="text-primary mb-5 text-center">Please {isLogin ? 'Register' :' Login'}</h3>
                        <Form>
                            {
                                !isLogin && <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control onBlur={handleNamechange} type="text" placeholder="your Name" required />
                                </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control onBlur={handlePass} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onChange={toggleLogin} type="checkbox" label={isLogin ? 'Provide Valid Info' : 'Register'} />
                            </Form.Group>
                            <Button onClick={handleRegistration} className="btn btn-outline-info text-light" variant="primary" type="submit">
                                {isLogin ? 'Login' : 'Register'}
                            </Button>
                            <Button onClick={handleResetPass} className="btn btn-outline-info text-light" variant="primary" type="submit">
                                Reset Pass
                            </Button>
                        </Form>
                        <h3 className="text-success my-3">OR USING THIS:</h3>
                        <ButtonGroup>
                            <Button onClick={handleGoogleLogin}>Google</Button>
                            <Button onClick={githubLogin}>Github</Button>
                            <Button>Facebook</Button>
                            <Button>Phone</Button>
                        </ButtonGroup>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Login;