import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/about" element={<About />} /> {/* Use element instead of component */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={
          <div className="container py-5">
            <h1>Welcome to My Portfolio</h1>
            <p>Explore my projects, learn more about me, or get in touch.</p>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
