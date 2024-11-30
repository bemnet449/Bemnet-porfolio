import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/project"
import Technologies from "./components/Technologies";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 bg-gradient-to-r from-[#000000] to-[#0f6d82]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Element name="hero">
            <Hero />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="technologies">
            <Technologies />
          </Element>
          <Element name="projects">
            <Project />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </div>
    </Router>
  );
}

export default App;
