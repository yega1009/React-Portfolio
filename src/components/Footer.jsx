import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons library
import './styles/Footer.css';

// Displays the footer section with social media icons
export default function Footer() {
  return (
    // Footer container
    <footer className="footer">
      {/* GitHub link with icon */}
      <a href="https://github.com/yega1009" target="_blank" rel="noopener noreferrer"><FaGithub /></a>

      {/* LinkedIn link with icon */}
      <a href="https://www.linkedin.com/in/yega-cho-4238681a6/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

      {/* Twitter link and icon */}
      <a href="https://twitter.com/yega1009" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </footer>
  );
}
