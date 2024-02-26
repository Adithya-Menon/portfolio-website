import React from 'react';
import Iframe from 'react-iframe'

function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      <h3>Power BI Dashboard - Supermaret Sales Data</h3>
      <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiMzEyNDE3ZTUtMzM5Yi00Y2Y4LWE4NzUtM2I5MGIzNWEwMGFlIiwidCI6IjEzZTNiMTg2LWM0NDYtNGFhYi05YzZkLTlhYjliYjc2ODE2YyIsImMiOjh9"
        top = "0" 
        left = "0" 
        bottom = "0" 
        right = "0" 
        width = "100%"
        height = "100%"
        border = "none" 
        margin = "0"
        padding = "0"
        z-index = "999999"
        position = "absolute"/>
    </div>
  );
}

export default Projects;
