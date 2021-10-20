import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../Images/Slider/first_slider.jpg';
import slide2 from '../../../Images/Slider/second_slider.jpg';
import slide3 from '../../../Images/Slider/third_slider.jpg';
import './Slider.css';

const Slider = () => {

    return (
        <div  className="slider-container">
            <Carousel>
                    <Carousel.Item className="py-5">
                        <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        />
                        <Carousel.Caption className="w-50 mx-auto caption">
                        <h3>Front Line Doctor's</h3>
                        <p>We have Some Awesome Stuff & Doctor's, Who take all responsibilities for patients in COVID-19.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="py-5">
                        <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                        />

                        <Carousel.Caption className="w-50 mx-auto caption">
                        <h3>Simple Surgery</h3>
                        <p>How to burn your weight, She's provided Awesome Fitness Tips, Follow Dr.Nourine</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="py-5">
                        <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                        />

                        <Carousel.Caption className="w-50 mx-auto caption">
                        <h3>Collab with online Patients</h3>
                        <p>we have also online doctor's platform for our beloved patients, send a message now... </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
        </div>
    );
};

export default Slider;