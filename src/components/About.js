import React from 'react';

const About = ({ id, content }) => {
  return (
    <section id={id} className="about-section">
      <h2>{content.aboutTitle}</h2>
      <p>{content.aboutText}</p>
    </section>
  );
};

export default About;