import React from "react";
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import user1 from './../../assets/user1.jpg'
import user2 from './../../assets/user2.jpg'

const Testmonials = () => {
    return(
        <section className="slider">
            <h2>Testmonials</h2>
            <Carousel>
            <Carousel.Item>
                <img className="d-block" src={user1} />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block" src={user2} />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block" src={user1} />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </section>
    )
}
export default Testmonials;