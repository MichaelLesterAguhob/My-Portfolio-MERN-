import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`bg-gray-800 p-4 shadow-lg w-full fixed top-0`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <img src='./favicon-32x32.png' /> <a href="/">MLCA</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white text-xl">
          <a href="#home" className="hover:text-gray-400 hover:underline" onClick={closeMenu}>
            Home
          </a>
          <a href="#aboutMe" className="hover:text-gray-400 hover:underline" onClick={closeMenu}>
            AboutMe
          </a>
          <a href="#skills" className="hover:text-gray-400 hover:underline" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-400 hover:underline" onClick={closeMenu}>
            Projects
          </a>
          <a href="#blog" className="hover:text-gray-400 hover:underline" onClick={closeMenu}>
            Blog
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden bg-gray-800 text-white space-y-4 p-4 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 transform translate-y-0"
            : "hidden max-h-0 opacity-0 transform translate-y-4"
        }`}
        style={{ overflow: "hidden" }}
      >
        <a href="#home" className="block hover:text-gray-400 hover:underline" onClick={closeMenu}>
          Home
        </a>
        <a href="#aboutMe" className="block hover:text-gray-400 hover:underline" onClick={closeMenu}>
          AboutMe
        </a>
        <a href="#skills" className="block hover:text-gray-400 hover:underline" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" className="block hover:text-gray-400 hover:underline" onClick={closeMenu}>
          Projects
        </a>
        <a href="#blog" className="block hover:text-gray-400 hover:underline" onClick={closeMenu}>
          Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
