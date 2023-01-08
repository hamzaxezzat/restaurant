import React from "react";
import './Header.css';

const Header = ()=>{
    return(
        <header>
            <div className="container">
                <div className="col-md-5">
                <h2>Good food choices are good investments.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
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