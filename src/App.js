
import './index.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import Experience from './components/Experience';
import Footer from "./components/Footer";
import SlideShow from './components/SlideShow';
import Project from './components/Project';

function App() {
  return (
    <div>
        <Navbar />
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
    </div>
  );
}

export default App;
