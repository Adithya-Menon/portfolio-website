import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './project-component/project-component';
import Home from './homepage-component/homepage-component';
import AboutPage from './about-page/about-page';
import Navbar from './Navbar';
import "./styles.css"

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
