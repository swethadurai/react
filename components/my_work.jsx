import React from 'react';
import './Myworks.css'; // Ensure styles are imported properly
import andrology from './images/andrology.png';

const Myworks = () => {
  // Sample data array for your projects
  const projects = [
    { id: 1, imageUrl: andrology, title: 'Andrology Center', description: 'This is the description of Project 1.' },
    { id: 2, imageUrl: './images/iotics.jpg', title: 'iotics', description: 'This is the description of Project 2.' },
    { id: 3, imageUrl: './images/project3.jpg', title: 'Project 3', description: 'This is the description of Project 3.' },
    { id: 4, imageUrl: './images/project4.jpg', title: 'Project 4', description: 'This is the description of Project 4.' },
    { id: 5, imageUrl: './images/project5.jpg', title: 'Project 5', description: 'This is the description of Project 5.' },
    { id: 6, imageUrl: './images/project6.jpg', title: 'Project 6', description: 'This is the description of Project 6.' },
    // { id: 7, imageUrl: './images/project7.jpg', title: 'Project 7', description: 'This is the description of Project 7.' },
    // { id: 8, imageUrl: './images/project8.jpg', title: 'Project 8', description: 'This is the description of Project 8.' },
    // { id: 9, imageUrl: './images/project9.jpg', title: 'Project 9', description: 'This is the description of Project 9.' },
    // { id: 10, imageUrl: './images/project10.jpg', title: 'Project 10', description: 'This is the description of Project 10.' },
    // { id: 11, imageUrl: './images/project11.jpg', title: 'Project 11', description: 'This is the description of Project 11.' },
    // { id: 12, imageUrl: './images/project12.jpg', title: 'Project 12', description: 'This is the description of Project 12.' },
  ];

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <div key={project.id} className="portfolio-card">
          <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
          <div className="portfolio-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Myworks;
