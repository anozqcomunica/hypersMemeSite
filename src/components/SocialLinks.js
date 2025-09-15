import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://x.com/hyperskidsmeme" target="_blank" rel="noopener noreferrer">
        {/* Caminho relativo à pasta public */}
        <img src="/icons/twitter.svg" alt="Twitter" />
      </a>
      <a href="https://t.me/HypersKidsAfricaFun" target="_blank" rel="noopener noreferrer">
        {/* Caminho relativo à pasta public */}
        <img src="/icons/telegram.svg" alt="Telegram" />
      </a>
    </div>
  );
};

export default SocialLinks;