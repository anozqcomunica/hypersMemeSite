import React from 'react';
import './SocialLinks.css';

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
      <a href="https://www.instagram.com/hyperskidsafrica" target="_blank" rel="noopener noreferrer">
        {/* Caminho relativo à pasta public */}
        <img src="/icons/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://www.tiktok.com/@hyperskidsafrica23" target="_blank" rel="noopener noreferrer">
        {/* Caminho relativo à pasta public */}
        <img src="/icons/tiktok.svg" alt="Tiktok" />
      </a>
      <a href="https://www.youtube.com/@hyperskidsafrica" target="_blank" rel="noopener noreferrer">
        {/* Caminho relativo à pasta public */}
        <img src="/icons/youtube.svg" alt="YouTube" />
      </a>
    </div>
  );
};

export default SocialLinks;