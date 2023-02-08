import React from "react";
import social from "./../../assets/footerIcons.png"
import payment from "./../../assets/payment.svg"
import './Footer.css'
const Footer = () =>{
    return(
        <footer>
            <div className="column">
                <div className="footer-top">
                    <ul>
                        <li>Register</li>
                        <li>Forum</li>
                        <li>Affiliate</li>
                        <li>FAQ</li>
                    </ul>
                    <img src={social} alt="socialmedias" /> <br/>
                </div>
                <p>© 2021. BeHealth. All rights reserved. <br/>
                <img className="payment-img" src={payment} alt="payment"/>
                </p>
                    

                
            </div>
        </footer>
    )
}
export default Footer;