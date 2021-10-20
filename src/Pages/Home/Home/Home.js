import React from 'react';
import Blood from '../Blood/Blood';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Blog from '../Blog/Blog';
import Care from '../Care/Care';

const Home = () => {
    return (
        <div id="home"> 
            <Slider></Slider>
            <Features></Features>
            <Services></Services>
            <Blood></Blood>
            <Blog></Blog>
            <Care></Care>            
        </div>
    );
};

export default Home;