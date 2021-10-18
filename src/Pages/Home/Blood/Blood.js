import React from 'react';
import donors from '../../../Images/Blooddonation.jpg';
import './Blood.css';

const Blood = () => {
    return (
        <div className="cover d-xl-flex justify-content-center align-items-center">
            <img className="w-25" src={donors} alt="" />
            <div className=" px-5 text-light">
            <h3>Donate Blood, Save Life | Blood Campaign</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea mmodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </div>
        </div>
    );
};

export default Blood; 
