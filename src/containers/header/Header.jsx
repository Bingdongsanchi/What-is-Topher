import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/IMG_5127 2.jpeg';
import './header.css';

const Header = () => (
  <div className="topher__header section__padding" id="home">
    <div className="topher__header-content">
      <h1 className="gradient__text">Let&apos;s Build the future coffee notebook with Topher AI</h1>
      <p>Come feed Topher the coffee AI. Record your coffee wherever you go and whenever you drink coffee! The Data you put in will help us build the best coffee notebook for everyone!</p>

      <div className="topher__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="topher__header-content__people">
        <img src={people} alt='people'/>
        <p>9,99999 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="topher__header-image">
      <img src={ai} alt=''/>
    </div>
  </div>
);

export default Header;