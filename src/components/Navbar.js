import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showBtn, setBtn] = useState(true);

  function handleClick() {
    setBtn((showBtn) => !showBtn);
    console.log("succes");
  }

  return (
    <nav className="flex justify-between bg-slate-100/50 py-1 rounded-b-md md:py-4">
      <div>
        <Link to="/" className="text-2xl ml-1 md:text-3xl">
          Gustavo Garcia
        </Link>
      </div>
      <button className="md:hidden mr-2" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <div
        className={`${
          showBtn
            ? "fixed top-14 -right-20 transition-all durantion-1000 ease-in-out text-xl flex flex-col gap-5 md:static"
            : " transition-all durantion-1000 ease-in-out text-base flex flex-col absolute right-0 top-12 py-10 bg-slate-100/50 px-7 rounded-b-md"
        }`}
      >
        <ul className="md:flex md:gap-8 md:mr-11 md:text-xl">
          <Link to="/">
            <li className="mb-2 hover:text-cyan-700">Home</li>
          </Link>

          <Link to="/projects">
            <li className="mb-2 hover:text-cyan-700">Projects</li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-cyan-700">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
