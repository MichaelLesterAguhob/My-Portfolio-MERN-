import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Main from "./pages/Main.jsx";
import Blog from "./pages/Blog.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full ">
        <div className="min-h-[100vh] bg-gradient-to-r from-gray-800 to-gray-700 w-full relative">
          <h1>....</h1>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login/mlca" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
