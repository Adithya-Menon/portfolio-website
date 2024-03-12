import React from 'react';
import About from '../about-component/about-component';
import Carousel from '../carousel-component/carousel-component';
import slides from '../assets/projectImages.json';
import './homepage.css';

function Home() {
  return (
    <div className="home-container">
      <div className="aboutCard">
        <About />
      </div>

      <div className="projects-container">
        <h2>Projects</h2>
        <Carousel data={slides} />
      </div>
    </div>
  );
}

export default Home;
