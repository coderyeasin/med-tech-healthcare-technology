import React from 'react';
import { Row } from 'react-bootstrap';
import './Care.css';

const Care = () => {
    return (
        <div className="care-doctor py-5">
            <h3 className="text-center w-50 mx-auto p-3 care">MedTech For Surgery</h3>
            <Row  className="text-center mx-auto care">
            <div className="col-lg-3">
                <h3 className="py-3">Plastic Surgery Statistics</h3>
                <p>Within the following pages, we present some of the most common benefits and risks of these procedures. No surgical procedure is without risk. A discussion of all potential benefits and complications should be held during consultation with a board-certified plastic surgeon.</p>
          
                </div>
                <div className="col-lg-3">
                <h3 className="py-3">Reconstructive Surgery</h3>
                <p>Within the following pages, we present some of the most common benefits and risks of these procedures. No surgical procedure is without risk. A discussion of all potential benefits and complications should be held during consultation with a board-certified plastic surgeon.</p>       
                </div>
                <div className="col-lg-3">
                <h3 className="py-3">Constructive Surgery</h3>
                <p>Within the following pages, we present some of the most common benefits and risks of these procedures. No surgical procedure is without risk. A discussion of all potential benefits and complications should be held during consultation with a board-certified plastic surgeon.</p>       
                </div>
                <div className="col-lg-3">
                <h3 className="py-3">Plastic Surgery</h3>
                <p>Within the following pages, we present some of the most common benefits and risks of these procedures. No surgical procedure is without risk. A discussion of all potential benefits and complications should be held during consultation with a board-certified plastic surgeon.</p>       
        </div>
       </Row>
    </div>
    );
};

export default Care;

/*       <h3 className="text-center w-25 mx-auto care">Plastic Surgery </h3>
                <h3 className="text-center w-25 mx-auto care">Reconstructive Surgery </h3>
                <h3 className="text-center w-25 mx-auto care">Constructive Surgery</h3> */