import React from 'react';
import About from '../about-component/about-component';
import MyCv from '../assets/Resume.pdf'
import './about-page.css'

function AboutPage() {
  return (
    <div className = "aboutPage">
    <div className = "Card">
      <About />
    </div>

    <div>
    <a href={MyCv} download="MyCv.pdf" className="btn">Download CV</a>
    </div>

    <div>
        <p>Skills</p>
    </div>

    </div>
  );
}

export default AboutPage;