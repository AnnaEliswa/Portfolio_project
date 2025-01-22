import React from 'react';
import './About.css'; // Link to the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Hello! My name is Anna, and I am an Electronics and Communication Engineering (ECE) graduate with a strong passion for web development. 
        I am a self-learner who thrives on taking initiative and continuously expanding my knowledge. 
        My strengths include accountability, perseverance, and adaptibility.
      </p>

      <div className="education">
        <h3 className="section-title">Education</h3>
        <ul className="education-list">
          <li className="education-item">
            <h5>Bachelor of Technology  in Electronics and Communication Engineering</h5>
            <p className="education-details">Rajiv Gandhi Institute of Technology,2024,CGPA: 9.01</p>
          </li>
        </ul>
      </div>

      <div className="skills">
        <h3 className="section-title">Skills</h3>
        <ul className="skills-list">
          <li className="skills-item">HTML</li>
          <li className="skills-item">CSS</li>
          <li className="skills-item">Python</li>
          {/* <li className="skills-item">Problem Solving</li>
          <li className="skills-item">VLSI Design</li>
          <li className="skills-item">IoT Development</li> */}
        </ul>
      </div>
    </div>
  );
};

export default About;
