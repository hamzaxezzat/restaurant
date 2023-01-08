import React from "react";
import { Container } from "react-bootstrap";
import aboutusimg1 from './../../assets/1.png'
import './Aboutus.css'
const Aboutus = () =>{
    return(
        <section className="aboutus">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={aboutusimg1} title="image Aboutus"/>
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. </p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus;