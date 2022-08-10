import React from "react";
// import portLogo from '../../logo.svg';
import "./footer.css";

const Footer = () => (
    <div className="port__footer section__padding">
        <div className="port__footer-heading">
            <h1 className="gradient__text">
                Living, learning, & leveling up one day at a time.
            </h1>
        </div>

        <div className="port__footer-btn">
            <p>Contact Me</p>
        </div>

        <div className="port__footer-links">
            <div className="port__footer-links_logo">
                {/* <img src={portLogo} alt="port_logo" /> */}
                <h1>Aryan Rajoria</h1>
                <p>
                    Lodha Belmondo, Pune <br /> e19cse319@bennett.edu.in
                </p>
            </div>
            <div className="port__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="port__footer-links_div">
                <h4>Extras</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="port__footer-links_div">
                <h4>Get in touch</h4>
                
            </div>
        </div>

        <div className="port__footer-copyright">
            <p>
                UI/UX taken from AR shakir{" "}
                <a href="https://www.arshakir.com/project/freebie-gpt-3-landing-page">
                    click here
                </a>
            </p>
        </div>
    </div>
);

export default Footer;
