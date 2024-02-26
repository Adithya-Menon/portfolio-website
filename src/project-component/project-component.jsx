import React from 'react';
import Iframe from 'react-iframe'

function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      <h3>Power BI Dashboard - Supermaret Sales Data</h3>
      <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiMzEyNDE3ZTUtMzM5Yi00Y2Y4LWE4NzUtM2I5MGIzNWEwMGFlIiwidCI6IjEzZTNiMTg2LWM0NDYtNGFhYi05YzZkLTlhYjliYjc2ODE2YyIsImMiOjh9"
        width="640px"
        height="320px"
        id="powerBI"
        className=""
        display="block"
        position="relative"/>
    </div>
  );
}

export default Projects;
