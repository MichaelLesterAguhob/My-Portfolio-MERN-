import React from "react";
import Home from "./Home.js";
import AboutMe from "./AboutMe.js";
import Skills from "./Skills.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js"; 

const Main = () => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-gray-800 to-gray-700 w-full relative">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Footer />
    </div>
  );
};

export default Main;
