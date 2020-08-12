import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Slideshow(){

    const slideStyle = {
        height: '600px',
        boxShadow: '0px 0px 50px #3f0c1f',
        border: '2px solid #3f0c1f',
        padding: '0px'
    }

    return(
        <Carousel className="mt-5 container" style={slideStyle}>
            <Carousel.Item >
                <img
                className="d-block w-100 " style={slideStyle}
                src={require("../images/slideshow/image1.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
                <Carousel.Item >
                <img style={slideStyle}
                className="d-block w-100"
                src={require("../images/slideshow/image2.jpg")}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img style={slideStyle}
                className="d-block w-100"
                src={require("../images/slideshow/image3.jpg")}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img style={slideStyle}
                className="d-block w-100"
                src={require("../images/slideshow/image4.jpg")}
                alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}