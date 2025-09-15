import React from 'react';
import LanguageSelector from './LanguageSelector';

const Navbar = ({ language, setLanguage, content }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Hypersmeme</a>
      </div>
      <div className="navbar-links">
        <a href="#about">{content.menu.about}</a>
        <a href="#roadmap">{content.menu.roadmap}</a>
        <a href="#social">{content.menu.social}</a>
      </div>
      <div className="navbar-lang">
        <LanguageSelector language={language} setLanguage={setLanguage} selectLanguageText={content.selectLanguage} />
      </div>
    </nav>
  );
};

export default Navbar;