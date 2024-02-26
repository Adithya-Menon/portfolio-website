import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './project-component/project-component';
import About from './about-component/about-component';
import Home from './homepage-component/homepage-component';
import Navbar from './Navbar';
import "./styles.css"

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
