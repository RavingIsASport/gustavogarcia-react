import React from "react";
import picture from "../../assets/gusGarcia.jpg";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiHandlebarsdotjs,
  SiAmazonaws,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { LiaNode } from "react-icons/lia";

export default function Home() {
  return (
    <div className="grid grid-rows-1 items-center gap-8 pt-5">
      {/* first container */}
      <div className="flex flex-wrap justify-center md:grid md:grid-rows-1 gap-3 md:gap-4 mt-12 mb-24 md:mt-6 md:mb-8 mx-5 rounded p-4">
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
          <div className="mr-auto">
            <a
              href={`${process.env.PUBLIC_URL}/resume/GustavosResume2023.pdf`}
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <button
                type="button"
                className="bg-red-500 p-1 rounded-md text-sm hover:bg-red-700 font-mono"
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Second constainer */}
      <div className="grid grid-cols-1 gap-4 justify-center py-5 bg-gray-100">
        <div className="m-auto">
          <h3 className="text-gray-900 text-lg md:text-3xl font-medium font-mono tracking-tighter mb-6">
            Full Stack Web Developement
          </h3>
        </div>
        <h1 className="m-auto text-red-500 font-mono tracking-tighter text-lg md:text-2xl">
          Front End
        </h1>
        <div className="grid grid-cols-4 justify-items-center md:w-1/2 md:m-auto">
          <SiJavascript className="text-gray-500 text-3xl md:text-5xl" />
          <SiHtml5 className="text-gray-500 text-3xl md:text-5xl" />
          <SiCss3 className="text-gray-500 text-3xl md:text-5xl" />
          <SiBootstrap className="text-gray-500 text-3xl md:text-5xl" />
        </div>
        <div className="grid grid-cols-3 justify-items-center w-3/4 m-auto ">
          <SiReact className="text-gray-500 text-3xl md:text-5xl" />
          <SiNextdotjs className="text-gray-500 text-3xl md:text-5xl" />
          <SiTailwindcss className="text-gray-500 text-3xl md:text-5xl" />
        </div>
        <h1 className="m-auto text-red-500 font-mono tracking-tighter text-lg md:text-2xl mt-4">
          Back End
        </h1>
        <div className="grid grid-cols-4 justify-items-center md:w-1/2 md:m-auto">
          <LiaNode className="text-gray-500 text-3xl md:text-5xl" />
          <SiExpress className="text-gray-500 text-3xl md:text-5xl" />
          <SiHandlebarsdotjs className="text-gray-500 text-3xl md:text-5xl" />
          <SiPython className="text-gray-500 text-3xl md:text-5xl" />
        </div>
        <div className="grid grid-cols-3 justify-items-center w-3/4 m-auto my-2">
          <SiMongodb className="text-gray-500 text-3xl md:text-5xl" />
          <SiMysql className="text-gray-500 text-3xl md:text-5xl" />
          <SiAmazonaws className="text-gray-500 text-3xl md:text-5xl" />
        </div>
      </div>
      {/* third container */}
      <div className=" bg-gray-400 text-gray-900 rounded-xl m-5 px-8 py-4 tracking-tight text-center md:w-2/4 md:mx-auto">
        <p className="text-sm font-mono tracking-tighter md:text-base">
          Certified Full Stack Web Developer from SMU Coding Bootcamp. My
          programming language of choice is Javascript, but also know Python.
          With Javascript I use NodeJS for my backend, MangoDb as my database,
          Mongoose as my ORM, and React takes care of my front end. I currently
          work in the food industry but I've decided to take a different career
          path, and jump into the programming industry.
        </p>
      </div>
    </div>
  );
}
