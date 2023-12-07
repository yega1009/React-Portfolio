import React from 'react';
import PDF from '../../assets/resume/Resume.pdf'; // Importing the resume PDF file
import '../styles/Resume.css'; // Importing the CSS for styling

// The Resume functional component
export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      {/* The 'href' attribute points to the path of the resume PDF */}
      {/* 'download' attribute suggests a filename for the downloaded file */}
      <a href={PDF} download="Yega_Cho_Resume" className="resume-download-button">Download Resume</a>
      <h2>Proficiencies</h2>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript ES6+</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL, MySQL, NoSQL</li>
        <li>MongoDB, jQuery</li>
        <li>React</li>
      </ul>
    </div>
  );
}
