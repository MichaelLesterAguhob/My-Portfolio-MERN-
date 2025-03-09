import React from "react";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Skills from "./Skills.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "./Projects.jsx";
import Footer from "../components/Footer.jsx"; 

const Main = () => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-gray-800 to-gray-700 w-full relative">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
    </div>
  );
};

export default Main;
