import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = ({ id, content }) => { // 1. O 'id' já está sendo recebido
  return (
    // 2. O 'id' já está sendo aplicado corretamente aqui
    <footer id={id} className="app-footer">
      <h3>{content.followUs}</h3>
      <SocialLinks />
      <p>&copy; 2025 Hypers Kids Africa. {content.rightsReserved}</p>
    </footer>
  );
};

export default Footer;