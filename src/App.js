import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'; // Importando a Navbar
import About from './components/About'; // Importando a seção Sobre
import Roadmap from './components/Roadmap'; // Importando o Roadmap
import Footer from './components/Footer'; // Importando o Footer
import { content } from './translations'; // Importando as traduções
import './App.css';

function App() {
  const [language, setLanguage] = useState('pt');

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} content={content[language]} />
      <Header content={content[language]} />
      <About id="about" content={content[language]} />
      <Roadmap id="roadmap" content={content[language]} />
      <Footer id="social" content={content[language]} />
    </div>
  );
}

export default App;