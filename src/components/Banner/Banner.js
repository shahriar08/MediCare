import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from './b-11.jpg';
import banner2 from './b-12.jpg';
import banner3 from './b-13.jpg';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel opacity-75"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='carousel-f1'>Your Health</h1>
                        <h1 className='carousel-f2'>Our First Priority</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel opacity-75"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='carousel-f1'>Your Health</h1>
                        <h1 className='carousel-f2'>Our First Priority</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel opacity-75"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='carousel-f1'>Your Health</h1>
                        <h1 className='carousel-f2'>Our First Priority</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;