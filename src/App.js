import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Recommendation from './pages/Recommendation';
import ProfessionalProjects from './pages/ProfessionalProjects';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/sobre" element={ <About /> } />
        <Route path="/projetos-pessoais" element={ <Projects /> } />
        {/* <Route path="/projetos-profissionais" element={ <ProfessionalProjects /> } /> */}
        <Route path="/recomendacoes" element={ <Recommendation /> } />
        <Route path="/contato" element={ <Contact /> } />
      </Routes>
    </AppProvider>
  );
}

export default App;
