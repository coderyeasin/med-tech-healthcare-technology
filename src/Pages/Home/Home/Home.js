import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Features></Features>
        </div>
    );
};

export default Home;