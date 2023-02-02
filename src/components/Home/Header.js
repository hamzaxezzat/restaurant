import React from "react";
import './Header.css';

const Header = ()=>{
    return(
        <header>
            <div className="container">
                <div className="col-md-5">
                <h3>Welcome BeHealth Restaurant</h3>
                <h2>LOVES HEALTHY FOOD</h2>
                <p>Best Offer Products 100% Naturan Healthy Food For Your Life</p>
                <div id="header-buttons">
                    <button>Order Now</button>
                    <button>Learn More</button>
                </div>
                </div>
                <div className="col-md-7">

                </div>
            </div>
        </header>
    )
}

export default Header;