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

  function hidenav() {
    return showBtn
      ? "fixed top-14 -right-20 transition-all durantion-1000 ease-in-out text-xl flex flex-col gap-5 md:static"
      : " transition-all durantion-1000 ease-in-out text-base flex flex-col absolute right-0 top-11 py-5 px-4 rounded-b-md";
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
      <div className={`${hidenav()}`}>
        <ul className="md:flex md:gap-8 md:mr-11 md:text-base text-xs">
          <Link to="/">
            <li className={`${linkStyle}`}>Home</li>
          </Link>

          <Link to="/projects">
            <li className={`${linkStyle}`}>Projects</li>
          </Link>

          <Link to="/contact">
            <li className={`${linkStyle}`}>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
