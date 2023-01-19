import React, { useState } from "react";

function Navbar() {
  const [showBtn, setBtn] = useState(true);

  function handleClick() {
    setBtn((showBtn) => !showBtn);
    console.log("succes");
  }

  return (
    <nav className="flex justify-between">
      <div>
        <h1 className="text-2xl ml-1">Gustavo Garcia</h1>
      </div>
      <div>
        <button className="" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mr-2"
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
            showBtn
              ? "fixed -right-16 "
              : " transition-all durantion-1000 ease-in-out text-xl flex flex-col gap-5 absolute right-4"
          }`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
