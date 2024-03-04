import React from 'react';
import './about.css'; 

function About () {
  return (
    <div className="about-me-container">
    <div className="about-me-card">
      <img src={require('../assets/pphoto.jpeg')} alt="Adithya Ajay Menon photo" />
      <div className="content">
        <h2>About Me</h2>
        <p>
        Hey there! I'm currently diving deep into a M.Sc. in Business Analytics at the University of Galway, mixing my love for tech with a passion for crunching numbers and making data-driven decisions. 
      </p>
      <p>
        My journey began with technical sales, where I mastered the art of aligning sales strategies with the latest market trends, always with an eye on keeping customers happy and driving business forward.
        Tech-wise, I'm all about creating sleek, user-friendly dashboards. I've got a knack for breaking down complex tech talk into bite-sized, engaging stories that stick. 
      </p>
      <p>
        Through ups and downs, I've learned to ride the market waves, tweaking sales pitches to keep our numbers climbing. Currently, I'm upskilling at lightning speed, focusing on how analytics can turn data into gold for savvy business strategies. 
        Looking ahead, I'm on the hunt for roles where I can blend my tech skills and budding analytics knowledge to tackle business puzzles head-on.
      </p>
      </div>
    </div>
    </div>
  );
}

export default About;

      