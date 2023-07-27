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
            Full Stack Web Development
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
      <div className="flex flex-wrap gap-4 p-4">
        <h1 className="text-gray-200 font-mono text-lg font-semibold">
          About Me
        </h1>
        <p className="text-sm font-mono tracking-tighter md:text-base">
          Certified Full Stack Web Developer from SMU Coding Bootcamp. I've been
          programming since about 2020, and have been in love with it ever
          since. My preferred language is javascript, but I practice with Python
          as well. While I'm not coding I really enjoy gaming, working out, and
          making music.
        </p>
      </div>
    </div>
  );
}
