import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Blood.css';

const Blood = () => {
    return (
        <Container className="cover py-5">
            <Row className="align-items-center">
                <div className="col-md-6">
                <div className="text-center w-75 mx-auto donor px-3">
                <h3>Donate Blood, Save Life | Blood Campaign</h3>
                <p>Over one hundred million units of blood are donated each year throughout the world. This activity reviews donor eligibility and selection, adverse effects of donation, and pathogen reduction and inactivation for donated blood. This activity highlights the role of the interprofessional team in ensuring appropriate protocol is followed.</p>
                </div>
                </div>

                <div className="col-md-6">
        
            <div className="text-center w-75 mx-auto donor px-3">
            <h3>Patient Safety</h3>
            <p>For a patient, a diagnostic error can mean the difference between life and death. While estimates vary, likely more than 100,000 Americans die or are permanently disabled each year due to medical diagnoses that initially miss conditions or are wrong or delayed.</p>
                    </div>
                    
            <div className="text-center w-75 mx-auto donor px-3">
            <h3>Patient Community</h3>
            <p>that account for nearly three-fourths of all serious harms from diagnostic errors. The team’s findings, based on analysis of a large repository of malpractice insurance claims, are described in a paper published online today in the journal Diagnosis.</p>
            </div>
        </div>      
            </Row>
    </Container>
    );
};

export default Blood; 
