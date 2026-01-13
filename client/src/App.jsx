import React from "react";
import Side from "./components/Side";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
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
      {/* Sidebar fixed */}
      <Side className=" bg-gray-100 min-h-screen p-4"/>

      {/* Scrollable main content */}
      <main className="ml-10 flex-1 p-8">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
