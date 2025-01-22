import React from 'react';
import './Projects.css'; // Link to the CSS file
import FPGAImage from '../assets/FPGA.jpg';
import UUV from '../assets/UUV.jpg';
const Projects = () => {
  return (
    <div className="projects-container py-5">
      <h2 className="projects-title text-center">My Projects</h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-4">
          <div className="card">
          <img src={UUV} className="card-img-top" alt="UUV Project" />
            <div className="card-body">
              <h5 className="card-title">Unmanned Underwater Vehicle</h5>
              <p className="card-text">
               Developed an unmanned underwater vehicle for surveillance and object retrieval in the underwater environment.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <div className="card">
          <img src={FPGAImage} className="card-img-top" alt="FPGA Project" />
            <div className="card-body">
            <h5 className="card-title">FPGA Car Parking System</h5>
              <p className="card-text">
                Implemented a car parking system using FPGA that indicates the visitor the available car parking slots.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://assets.rbl.ms/25583540/origin.jpg" 
              className="card-img-top"
              alt="Project 3"
            />
            <div className="card-body">
            <h5 className="card-title">Sign Language to Speech Converter</h5>
              <p className="card-text">
                Successfully developed a sign language to speech converter using Arduino,bridging the communication barriers between sign language users and others.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
