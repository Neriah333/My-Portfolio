import React from "react";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Services from "./pages/Servicecards";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <div className="flex">
      
      

      {/* Scrollable main content */}
      <main className="ml-0 p-0 md:ml-3 md:p-3 flex-1">

        <Navbar/>
        
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
