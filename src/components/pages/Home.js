import React from "react";
import resume from "../../resume/gustavoresume.pdf";
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

      <div className=" bg-champagne rounded-xl m-5 px-8 py-4 tracking-tight text-center md:w-2/4 md:mx-auto">
        <p className="text-sm font-mono md:text-base">
          Certified Full Stack Web Developer from SMU Coding Bootcamp. My
          programming language of choice is Javascript, but also know Python.
          With Javascript I use NodeJS for my backend, MangoDb as my database,
          Mongoose as my ORM, and React takes care of my front end. I currently
          work in the food industry but I've decided to take a different career
          path, and jump into the programming industry.
        </p>
        {/* <a className="text-md " href={resume} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="m-3 p-2 bg-sienna hover:bg-chamoisee text-slate-100 hover:text-slate-800 rounded-lg "
          >
            Resume
          </button>
        </a> */}
      </div>
    </div>
  );
}
