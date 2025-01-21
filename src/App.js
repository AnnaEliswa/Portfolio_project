import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-custom min-vh-100 d-flex flex-column">
        <div className="container py-5 d-flex justify-content-center align-items-center flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h1 className="display-3 fw-bold text-main">
                    Welcome to My Portfolio
                  </h1>
                  <p className="lead text-secondary mt-3">
                    Hi, I am Anna
                  </p>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="mt-auto py-3 bg-dark text-white text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
          </p>
          <p>
            <a href="/contact" className="text-decoration-none text-light">
              Get in Touch
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
