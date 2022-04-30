import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="main-container">
         {/* ######################################       NAVBAR   #################################### */}
      <nav className="navbar">
        <span className="select-language">
          <a href="#">Idioma:</a>
        </span>
        <span className="language">
          <a href="#">English</a>
        </span>
        <span className="language">
          <a href="#">Portuguese</a>
        </span>
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a href="about">Sobre mim</a>
        </span>
        <span>
          <a href="#">Skills</a>
        </span>
        <span>
          <a href="#">Projetos</a>
        </span>
        <span>
          <a href="#">Contato</a>
        </span>
      </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
