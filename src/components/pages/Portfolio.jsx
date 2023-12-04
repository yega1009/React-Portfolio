import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons
// Import your project images
import projectImage1 from '../../assets/images/cine-search.png';
import projectImage2 from '../../assets/images/critter-sitter.png';
import projectImage3 from '../../assets/images/code-quiz.png';
import projectImage4 from '../../assets/images/weather-dashboard.png';
import projectImage5 from '../../assets/images/workday-scheduler.png';
import projectImage6 from '../../assets/images/password-generator.png';
import '../styles/Portfolio.css';

// The Portfolio functional component
export default function Portfolio() {
  // Array of projects
  const projects = [
    {
      title: "CineSearch",
      image: projectImage1,
      deployLink: "https://team-ccmy.github.io/Cine-Search/",
      repoLink: "https://github.com/Team-ccmy/Cine-Search"
    },
    {
      title: "Critter Sitter",
      image: projectImage2,
      deployLink: "https://desolate-cliffs-01368-b072fa39f7d0.herokuapp.com/",
      repoLink: "https://github.com"
    },
    {
      title: "Code Quiz",
      image: projectImage3,
      deployLink: "https://yega1009.github.io/Code-Quiz/",
      repoLink: "https://github.com/yega1009/Code-Quiz"
    },
    {
      title: "Weather Dashboard",
      image: projectImage4,
      deployLink: "https://yega1009.github.io/Weather-Dashboard/",
      repoLink: "https://github.com/yega1009/Weather-Dashboard"
    },
    {
      title: "Workday Scheduler",
      image: projectImage5,
      deployLink: "https://yega1009.github.io/Work-Day-Scheduler/",
      repoLink: "https://github.com/yega1009/Work-Day-Scheduler"
    },
    {
      title: "Password Generator",
      image: projectImage6,
      deployLink: "https://yega1009.github.io/Password-Generator-By-Yega/",
      repoLink: "https://github.com/yega1009/Password-Generator-By-Yega"
    },
  ];

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects-container">
        {/* Mapping over each project to create a card for each */}
        {projects.map((project, index) => (
          <div key={index} className="project-card">          
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              {/* Overlay for links that appears on hover */}
              <div className="project-overlay">
                {/* Link to deployed project */}
                <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> {/* External link icon */}
                </a>
                {/* Link to project repository */}
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> {/* GitHub icon */}
                </a>
              </div>
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
