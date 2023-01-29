import React from "react";
import resume from "../../assets/GustavoResume2023.pdf";
import picture from "../../assets/gusGarcia.jpg";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-screen pt-8">
      <div className="flex justify-center">
        <img
          src={picture}
          className="w-40 md:w-56 rounded-full"
          alt="Gustavo Garcia"
        ></img>
      </div>

      <div className="md:w-2/4 md:mx-auto bg-slate-100/60 rounded-xl px-8 py-4 md:px-8 tracking-tight text-center">
        <p className="text-sm font-mono md:text-base">
          Aspiring web developer. Currently enrolled in the SMU Coding Bootcamp.
          I love playing video games and watching sports, mostly soccer. Some of
          my coding skills are Javascript, NodeJS, ReactJS, MongoDB, and Good
          ol' HTML. I currently work in the food industry but I've decided to
          take a different career path, and jump into the programming industry.
        </p>
        <button
          type="button"
          className="m-3 p-2 bg-cyan-600 hover:bg-cyan-300 hover:text-slate-700 rounded-lg text-slate-200"
        >
          <a
            target="_blank"
            rel="noreferrer"
            className="nav-link active text-reset text-md font-medium"
            href={resume}
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}
