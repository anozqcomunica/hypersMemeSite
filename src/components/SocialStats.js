import React from 'react';
import './SocialStats.css';

const SocialStats = ({ content }) => {
  // Você pode buscar esses números de uma API no futuro
  const stats = [
    { name: 'Instagram', count: '10.7M+', icon: '/icons/instagram.svg', link: 'https://www.instagram.com/hyperskidsafrica' },
    { name: 'TikTok', count: '3.7M+', icon: '/icons/tiktok.svg', link: 'https://www.tiktok.com/@hyperskidsafrica23' },
    { name: 'YouTube', count: '3.25M+', icon: '/icons/youtube.svg', link: 'https://www.youtube.com/@hyperskidsafrica' },
    { name: 'Twitter', count: '1K+', icon: '/icons/twitter.svg', link: 'https://x.com/hyperskidsmeme' },
    { name: 'Telegram', count: '100+', icon: '/icons/telegram.svg', link: 'https://t.me/HypersKidsAfricaFun' },
  ];

  return (
    <div className="social-stats-strip">
      <div className="stats-container">
        {stats.map((stat) => (
          <a
            key={stat.name}
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="stat-item-link"
          >
            <div className="stat-item">
                <img src={stat.icon} alt={stat.name} className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-count">{stat.count}</span>
                  <span className="stat-name">{content.followers}</span>
                </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialStats;