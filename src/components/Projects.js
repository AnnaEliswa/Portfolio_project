import React from 'react';

const Projects = () => {
  return (
    <div className="container py-5">
      <h2>My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="project1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Description of project 1</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="project2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Description of project 2</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="project3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Description of project 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
