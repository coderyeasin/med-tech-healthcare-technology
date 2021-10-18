import React from 'react';
import Blood from '../Blood/Blood';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Features></Features>
            <Services></Services>
            <Blood></Blood>
            <Footer></Footer>
        </div>
    );
};

export default Home;