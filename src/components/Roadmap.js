import React from 'react';

const Roadmap = ({
  id,
  content: {
    roadmapTitle,
    phase1Title,
    phase1Items,
    phase2Title,
    phase2Items,
    phase3Title,
    phase3Items,
  },
}) => {
  const renderPhase = (title, items) => (
    <div className="roadmap-phase">
      <h3>{title}</h3>
      <ul>
        {items && items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id={id} className="roadmap-section">
      <h2>{roadmapTitle}</h2>
      <div className="roadmap-phases-container">
        {renderPhase(phase1Title, phase1Items)}
        {renderPhase(phase2Title, phase2Items)}
        {renderPhase(phase3Title, phase3Items)}
      </div>
    </section>
  );
};

export default Roadmap;