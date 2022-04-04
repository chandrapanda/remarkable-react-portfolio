import React from "react";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CV from "./components/CV";
import Contact from "./components/Contact";

// Render single instances of each component
function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <CV />
      <Contact />
    </div>
  );
}

export default App;
