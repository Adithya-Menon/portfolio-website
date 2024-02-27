import React from 'react';
import About from '../about-component/about-component';
import Carousel from '../carousel-component/carousel-component';
import slides from '../assets/projectImages.json';
import './homepage.css'

function Home() {
  return (
    <div className= "aboutCard">
      <About ></About>
      <Carousel data={slides}/>
    </div>
  );
}

export default Home;
