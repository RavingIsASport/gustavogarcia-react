import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const linkStyle =
    "block w-full text-center px-4 py-2 text-sm md:text-base font-medium text-gray-800 md:text-gray-100 hover:text-red-400 " +
    "md:border-b-2 md:border-transparent md:hover:border-red-500 transition-colors duration-200";

  return (
    <nav className="bg-gray-800 backdrop-blur-sm border-b border-neutral-800 shadow-md fixed w-full z-30 top-0 left-0">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-NovaSquare font-bold tracking-tight text-red-50 hover:text-white transition"
        >
          {"<>"}Gustavo Garcia{"</>"}
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-red-300 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:static absolute left-0 top-full w-full md:w-auto bg-white/95 md:bg-transparent border-t border-neutral-800 md:border-none transition-all duration-200 z-20 ${
            menuOpen ? "flex flex-col" : "hidden"
          }`}
        >
          {["Home", "Projects", "Contact"].map((text) => (
            <li key={text} className="md:ml-6">
              <Link
                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                onClick={handleClick}
                className={linkStyle}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
