import React from 'react';
import yourPhoto from '../../assets/images/profile-picture.jpg';
import '../styles/AboutMe.css';

// AboutMe component definition
export default function AboutMe() {
  return (
    <div className="about-section">
      <h1>About Me</h1>
      <img src={yourPhoto} alt="Your Name" className="about-photo" />
      <p className="about-text">
        Hi, I'm Yega Cho, a passionate Full Stack Web Developer with a knack for creating engaging and user-centric web applications. 
        My journey in web development started with an intensive Full Stack Development Bootcamp, 
        where I gained hands-on experience in technologies like React, Node.js, Express, and MongoDB, among others.
      </p>
      <p className="about-text">
        Throughout the bootcamp, I developed a range of projects that demonstrate my ability to solve real-world problems. 
        For instance, my project 'CineSearch' allows users to explore movies and TV shows, offering a seamless browsing experience. 
        Another notable project is an e-commerce platform, showcasing my skills in handling backend functionalities and database management. 
      </p>
      <p className="about-text">
        I am continually exploring new technologies and methodologies to enhance my skill set. 
        My aim is to build solutions that not only meet user needs but also push the boundaries of what's possible in web development. 
        I'm excited about the opportunity to bring my blend of creative and technical skills to a dynamic team.
      </p>
    </div>
  );
}