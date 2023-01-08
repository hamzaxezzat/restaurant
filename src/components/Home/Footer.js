import React from "react";
import social from "./../../assets/footerIcons.png"
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
                    <img src={social} />
                </div>
                <p>© 2021. Foodera. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;