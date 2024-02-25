import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './project-component/project-component';
import About from './about-component/about-component';
import Home from './homepage-component/homepage-component';
import Navbar from './Navbar';
import "./styles.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
