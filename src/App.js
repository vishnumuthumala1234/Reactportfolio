import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import './index.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from './components/Project';
import Work from "./components/Work";
import Experience from './components/Experience';
import Footer from "./components/Footer";
import SlideShow from './components/SlideShow';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Skills />
      <Education />
      <Project />
      <Work />
      <Experience />
      <Contact />
      <SlideShow />
      <Footer />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
