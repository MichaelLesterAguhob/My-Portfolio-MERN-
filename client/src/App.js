import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Main from "./pages/Main.jsx";
import Blog from "./pages/Blog.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full">
        <div className="min-h-[100vh] bg-gradient-to-r from-gray-800 to-gray-700 w-full relative">
          
          <Navbar />
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
