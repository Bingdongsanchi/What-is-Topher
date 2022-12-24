import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatTopher.css';

const WhatTopher = () => (
  <div className="topher__whattopher section__margin" id="wtopher">
    <div className="topher__whattopher-feature">
      <Feature title="What is Topher" text="Free software that helps regular people improve their coffee brewing technique. It is not only helping people record what they have done and what they have liked but also making AI that understands how each parameter affects flavor and can act like a guide." />
    </div>
    <div className="topher__whattopher-heading">
      <h1 className="gradient__text">The quick brown fox jumped over the lazy dog</h1>
      <p>Explore the Library</p>
    </div>
    <div className="topher__whattopher-container">
      <Feature title="Feedback" text="Feedback for coffee roasters." />
      <Feature title="Platform" text="Platform for recommending for new coffee, new equipment and coffee training." />
      <Feature title="Research" text="Dataset to facilitate coffee research projects." />
    </div>
  </div>
);

export default WhatTopher;