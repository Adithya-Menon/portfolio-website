import React from 'react';

function Homepage() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is the description for project 1.',
      imageUrl: 'https://via.placeholder.com/150',
      githubLink: 'https://github.com/example/project1',
      liveDemoLink: 'https://example.com/project1'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is the description for project 2.',
      imageUrl: 'https://via.placeholder.com/150',
      githubLink: 'https://github.com/example/project2',
      liveDemoLink: 'https://example.com/project2'
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h2>{project.title}</h2>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
            <div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
