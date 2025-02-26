import React, {useState} from 'react'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`bg-gray-800 p-4 shadow-lg ${isMenuOpen ? 'absolute w-full' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">MLCA Portfolio</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
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
        className={`sm:hidden xs:hidden bg-gray-800 text-white space-y-4 p-4 transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-4'}`}
        style={{ overflow: 'hidden' }}
      >
        <a href="/" className="block hover:text-gray-400">Home</a>
        <a href="#about" className="block hover:text-gray-400">About</a>
        <a href="#services" className="block hover:text-gray-400">Services</a>
        <a href="#contact" className="block hover:text-gray-400">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar