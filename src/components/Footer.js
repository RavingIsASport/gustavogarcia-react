import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="static bg-gray-300 py-5 px-2">
      <div className="py-2">
        <p className="text-gray-900 font-mono text-base">
          {"<>"}Gustavo Garcia{"</>"}
        </p>
        <p className="text-gray-900 font-light text-sm">
          Full Stack Web Developer
        </p>
        <p className="text-red-900 font-extralight">Se habla español.</p>
      </div>

      <Link to="/contact">
        <button className="border-solid border border-red-500 p-2 my-2 font-mono text-xs text-gray-600 hover:bg-slate-100">
          Contact Me
        </button>
      </Link>
    </div>
  );
}
