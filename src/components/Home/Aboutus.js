import React from "react";
import { Container } from "react-bootstrap";
import aboutusImg1 from './../../assets/1.png'
import aboutusImg2 from './../../assets/2.png'
import './Aboutus.css'
const Aboutus = () =>{
    return(
        <>
        <section className="aboutus">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img src={aboutusImg1} title="image Aboutus"/>
                    </div>
                    <div className="col-md-5 information">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. </p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="aboutus">
            <div className="container">
                <div className="row">
                <div className="col-md-5 information">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button>Learn More</button>
                    </div>
                    <div className="col-md-7">
                        <img src={aboutusImg2} title="image Aboutus"/>
                    </div>
                    
                </div>
            </div>
        </section>
        <section className="paralex">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <a href="#"> Watch Our Story</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Aboutus;