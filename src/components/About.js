import React from 'react';
import './About.css'; // Importa o CSS específico do About

const About = ({ id, content }) => {
  return (
    <section id={id} className="about-section">
      <div className="about-container">
        <img src="/images/about-image.png" alt="About Hypers Kids Africa" className="about-image" />
        <div className="about-text-content">
          <h2>{content.aboutTitle}</h2>
          <p>{content.aboutText}</p>
        </div>
      </div>
    </section>
  );
};

export default About;