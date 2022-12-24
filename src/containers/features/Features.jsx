import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'No pain no gain',
    text: 'The big issue is that data collection of this type is painful. Consider the number of parameters that control how coffee is prepared. There are many parameters that are important. We actually can not reasonably expect a user to record all of them unfortunately.',
  },
  {
    title: 'fill in the gaps where necessary',
    text: 'The AI backend would be the reward: in order for it to learn your preferences and to give it a starting point to adjust from, it needs as much data as you can give it. However, at the beginning we will not have enough data to be able to provide useful feedback.',
  },
  {
    title: 'give the user a good incentive to record things',
    text: 'I think that people who record their coffee recipes and observations in little notebooks are very rarely consistent about doing so. Even though they start with good intentions, they wind up recording sporadically or not at all.',
  },
  {
    title: 'Action speaks louder than words',
    text: 'Let us do it.',
  },
];

const Features = () => (
  <div className="topher__features section__padding" id="features">
    <div className="topher__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="topher__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;