import React from 'react';
import './Header.css'; // Importa o CSS específico do Header

const Header = ({ content }) => {
  return (
    <header className="App-header" id="home">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h1>{content.title}</h1>
            <h2>{content.subtitle}</h2>
            <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="pump-button">
              {content.buyButton}
            </a>
          </div>
          <img src="/images/header-image.png" alt="Hypers Kids Africa illustration" className="header-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;