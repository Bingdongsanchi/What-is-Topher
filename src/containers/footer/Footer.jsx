import React from 'react';
import gpt3Logo from '../../assets/topher3.svg';
import './footer.css';

const Footer = () => (
  <div className="topher__footer section__padding">
    <div className="topher__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="topher__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="topher__footer-links">
      <div className="topher__footer-links_logo">
        <img src={gpt3Logo} alt="topher_logo" />
        <p>Topher AI & NULI Espresso Machine, <br /> All Rights Reserved</p>
      </div>
      <div className="topher__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="topher__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="topher__footer-links_div">
        <h4>Get in touch</h4>
        <p>Topher AI & NULI Espresso Machine</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="topher__footer-copyright">
      <p>@2022 Topher. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;