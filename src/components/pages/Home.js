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
        <div id="nameG" className=" ">
          <h1 className="font-NovaSquare text-7xl">
            Gustavo
            <br />
            Garcia
          </h1>
        </div>
        <div className="ml-auto">
          <img
            src={picture}
            className="w-32 md:w-56 rounded-full"
            alt="Gustavo Garcia"
          ></img>
        </div>
        <div className="my-3 mr-auto md:mr-0">
          <p className="font-Jost md:text-2xl">
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
                className="bg-red-500 p-1 rounded-md font-Asap hover:bg-red-400"
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
          <h3 className="text-gray-900 text-2xl md:text-3xl font-medium font-NovaSquare tracking-tighter mb-6">
            Full Stack Web Development
          </h3>
        </div>
        <h1 className="m-auto text-red-500 font-Jost tracking-tighter text-xl md:text-3xl">
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
        <h1 className="m-auto text-red-500 font-Jost tracking-tighter text-xl md:text-3xl mt-4">
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
      <div className="flex flex-wrap gap-4 p-8 md:px-64 md:py-20">
        <h1 className="text-red-300 font-NovaSquare text-2xl font-semibold md:text-3xl">
          About Me
        </h1>
        <p className="text-lg font-Jost tracking-tighter md:text-2xl">
          Dedicated and accomplished Full Stack Web Developer with certification
          from the esteemed SMU Coding Bootcamp. My journey in programming
          commenced in 2020, and since then, I have honed my skills and fostered
          a deep passion for the art and science of coding. Proficiency in
          JavaScript, my primary language of choice, is complemented by active
          practice in Python. My commitment to excellence extends beyond the
          realm of coding. When I'm not immersed in the world of programming, I
          find joy in various pursuits. Whether it's delving into the
          intricacies of gaming, maintaining a healthy lifestyle through regular
          workouts, or channeling my creativity into music production, I
          approach every endeavor with a dedication to continuous improvement.
          As a professional who thrives on challenges and embraces learning, I
          am poised to contribute my skills and passion to innovative projects.
          With a solid foundation in Full Stack development, a dynamic skill
          set, and a commitment to staying at the forefront of industry trends,
          I am prepared to bring value to any team or project.
        </p>
      </div>
    </div>
  );
}
