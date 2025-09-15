import React from 'react';

const LanguageSelector = ({ language, setLanguage, selectLanguageText }) => {
  return (
    <div className="language-selector">
      
      <button
        onClick={() => setLanguage('pt')}
        className={language === 'pt' ? 'active' : ''}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'active' : ''}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;