import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle =
    "mb-4 bg-red-500 text-gray-200 p-1 rounded-full text-center md:bg-transparent md:border-b-2 md:border-b-red-500 md:hover:border-b-gray-400 md:hover:text-red-500 md:rounded-none";

  const [showBtn, setBtn] = useState(true);

  function handleClick() {
    setBtn((showBtn) => !showBtn);
    console.log("succes");
  }

  return (
    <nav className="font-mono flex justify-between pt-3 rounded-b-md md:py-4">
      <div className="mt-2">
        <Link
          to="/"
          className="text-md ml-2 md:text-xl font-thin border-b-2 border-b-red-500"
        >
          {"<>"}Gustavo Garcia{"</>"}
        </Link>
      </div>
      <button
        className="md:hidden mr-2 bg-red-500 hover:bg-red-700 rounded-md p-1"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <ul
        className={`${
          showBtn ? "-right-24 " : " right-0 "
        } flex flex-col text-xs fixed top-11 py-5 px-4 rounded-b-md md:right-0 md:flex-row md:top-0 md:gap-8 md:text-base md:absolute transition-all durantion-1000 ease-in-out`}
      >
        <Link onClick={handleClick} to="/" className={`${linkStyle}`}>
          Home
        </Link>

        <Link onClick={handleClick} to="/projects" className={`${linkStyle}`}>
          Projects
        </Link>

        <Link onClick={handleClick} to="/contact" className={`${linkStyle}`}>
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
