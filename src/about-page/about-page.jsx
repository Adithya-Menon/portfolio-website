import React from 'react';
import About from '../about-component/about-component';
import MyCv from '../assets/Resume.pdf';
import './about-page.css';

function AboutPage() {
  // Sample skills data based on your previous experience
  const skillsList = ["JavaScript", "Python", "ReactJS", "MS Excel", "MS Power BI", "HubSpot CRM", "AWS"];

  return (
    <div className="aboutPage">
      <div className="Card">
        <About />
      </div>

      <div className="skillsSection">
        <p>Skills</p>
        <div className="skillsCards">
          {skillsList.map((skill, index) => (
            <div key={index} className="skillCard">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div>
        <a href={MyCv} download="MyCv.pdf" className="btn">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
