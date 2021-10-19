import Button from '@restart/ui/esm/Button';
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="error text-center my-5 py-5">
            <h2 className="mt-5 text-success">Oops!!! you made a mistake</h2>
            <Button className="btn btn-danger">Go Back</Button>
        </div>
    );
};

export default NotFound;