import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Living, learning, & leveling up one day at a time.</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Contact Me</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <h1>Aryan Rajoria</h1>
        <p>Lodha Belmondo, Pune <br /> e19cse319@bennett.edu.in</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Extras</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Lodha Belmondo, Pune</p>
        <p>+91-9082879883</p>
        <p>e19cse319@bennett.edu.in</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>UI/UX taken from AR shakir <a href="https://www.arshakir.com/project/freebie-gpt-3-landing-page">click here</a></p>
    </div>
  </div>
);

export default Footer;
