import React from 'react';
import Blood from '../Blood/Blood';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Features></Features>
            <Services></Services>
            <Blood></Blood>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;