import React from "react";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Skills from "./Skills.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "./Projects.jsx";
import Footer from "../components/Footer.jsx";

const Main = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default Main;
