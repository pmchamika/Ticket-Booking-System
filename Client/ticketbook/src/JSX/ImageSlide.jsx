import React, { Component } from 'react';
import slide1 from '../img/slide/1.jpg';
import slide2 from '../img/slide/2.jpg';
import slide3 from '../img/slide/3.jpg';

import { Carousel} from 'react-bootstrap';

export default class ImageSlide extends Component {

    //rendering the image slides on the home page
    render() {
        return (
            <div className="IM" >
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Book Your Ticket Today </h3>
                            <p>Reserve train tickets with convenience and ease any time.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Fast and Secure</h3>
                            <p>Best way to book train tickets in advance.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>User Friendly</h3>
                            <p>Safe, friendly and remarkably hassle-free.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}


