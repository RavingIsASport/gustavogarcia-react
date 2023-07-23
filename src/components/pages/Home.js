import React from "react";
import picture from "../../assets/gusGarcia.jpg";

export default function Home() {
  return (
    <div className="grid grid-rows-1 items-center gap-8 pt-5">
      <div className="flex flex-wrap justify-center md:grid md:grid-rows-1 gap-3 md:gap-4 mt-12 md:mt-6 mx-5 rounded p-4">
        <div id="nameG" className="text-5xl md:text-7xl mr-auto font-mono">
          <h1 className="">Gustavo</h1>
          <h1>Garcia</h1>
        </div>
        <div className="ml-auto">
          <img
            src={picture}
            className="w-32 md:w-56 rounded-full"
            alt="Gustavo Garcia"
          ></img>
        </div>
        <div className="my-3 mr-auto md:mr-0">
          <p className="text-sm md:text-lg">
            Certified Full Stack Web Developer from Dallas, TX.
          </p>
        </div>
      </div>
      <div className="text-lg flex justify-center m-auto md:text-4xl">
        <h3>Full Stack Web Developement</h3>
      </div>
      <div className=" bg-gray-400 text-gray-900 rounded-xl m-5 px-8 py-4 tracking-tight text-center md:w-2/4 md:mx-auto">
        <p className="text-sm font-mono md:text-base">
          Certified Full Stack Web Developer from SMU Coding Bootcamp. My
          programming language of choice is Javascript, but also know Python.
          With Javascript I use NodeJS for my backend, MangoDb as my database,
          Mongoose as my ORM, and React takes care of my front end. I currently
          work in the food industry but I've decided to take a different career
          path, and jump into the programming industry.
        </p>
        <div className="mr-auto m-4">
          <a
            href={`${process.env.PUBLIC_URL}/resume/GustavosResume2023.pdf`}
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <button
              type="button"
              className="bg-red-500 p-1 rounded-md hover:bg-red-700 font-mono"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
