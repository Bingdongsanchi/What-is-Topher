import React from 'react';
import possibilityImage from '../../assets/tasting.webp';
import './possibility.css';

const Possibility = () => (
  <div className="topher__possibility section__padding" id="possibility">
    <div className="topher__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="topher__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Describle the coffee <br />as detailed as possible</h1>
      <p>Every single detail matters, be a part of the coffee database. provide us all the detail of the coffee you drink, and help us make the dream into reality.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;