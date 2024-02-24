import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './project-component/project-component';
import About from './about-component/about-component';
import Home from './homepage-component/homepage-component';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
