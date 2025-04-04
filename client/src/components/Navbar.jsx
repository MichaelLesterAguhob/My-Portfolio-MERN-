import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import UserContext from "../userContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className={`bg-gray-800 p-4 shadow-lg w-full fixed top-0 z-20`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <img src="/favicon-32x32.png" /> <a href="/">MLCA</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white text-xl">
          {/* <NavLink
            to="/login/mlca"
            className="hover:text-gray-400 hover:underline"
            onClick={closeMenu}
          >
            login
          </NavLink> */}
          <NavLink
            to="/#home"
            className="hover:text-gray-400 hover:underline"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/#aboutMe"
            className="hover:text-gray-400 hover:underline"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/#skills"
            className="hover:text-gray-400 hover:underline"
            onClick={closeMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/#projects"
            className="hover:text-gray-400 hover:underline"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/#contact"
            className="hover:text-gray-400 hover:underline"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog#main"
            className="hover:text-gray-400 hover:underline"
            onClick={closeMenu}
          >
            Blog
          </NavLink>

          {localStorage.getItem("token") !== null ? (
            <NavLink
              to={"/logout"}
              className="text-red-500 rounded hover:bg-red-500 hover:text-white"
            >
              LogOut
            </NavLink>
          ) : null}
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
        className={`lg:hidden bg-gray-800 text-white space-y-4 p-2 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 transform translate-y-0"
            : "hidden max-h-0 opacity-0 transform translate-y-4"
        }`}
        style={{ overflow: "hidden" }}
      >
        <NavLink
          to="/#home"
          className="block hover:text-gray-400 hover:underline"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/#aboutMe"
          className="block hover:text-gray-400 hover:underline"
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/#skills"
          className="block hover:text-gray-400 hover:underline"
          onClick={closeMenu}
        >
          Skills
        </NavLink>
        <NavLink
          to="/#projects"
          className="block hover:text-gray-400 hover:underline"
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/#contact"
          className="block hover:text-gray-400 hover:underline"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog#main"
          className="block hover:text-gray-400 hover:underline"
          onClick={closeMenu}
        >
          Blog
        </NavLink>

        {localStorage.getItem("token") !== null ? (
            <NavLink
              to={"/logout"}
              className="block py-2 text-red-500 rounded hover:bg-red-500 hover:text-white"
            >
              LogOut
            </NavLink>
          ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
