import React from 'react';

const Header = ({ content }) => {
  return (
    // Adicionamos o id "home" para o link do logo funcionar
    <header className="App-header" id="home">
      <div className="header-content">
        <h1>{content.title}</h1>
        <h2>{content.subtitle}</h2>
        <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="pump-button">
          {content.buyButton}
        </a>
      </div>
    </header>
  );
};

export default Header;