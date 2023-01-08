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
                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                <h3>Johnthan Doe - UX Designer</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block" src={user2} />

                <Carousel.Caption>
                <p>"behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                <h3>Simab Dave - Web Designer</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block" src={user1} />

                <Carousel.Caption>
                <p>"far from the countries Vokalia and Consonantia, Far far away, behind the word mountains,  there live the blind texts. "</p>
                <h3>Maccy Doe - Front End</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <div className="clearfix"></div>
        </section>
    )
}
export default Testmonials;