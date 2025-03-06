import React from "react";
import Home from "./Home.js";
import Services from "./Services.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js"; 

const Main = () => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-gray-800 to-gray-700 w-full relative">
        <Navbar />
        <Home />
        <Services />
        <Footer />
    </div>
  );
};

export default Main;
