import React from "react";
import ProjectsData from "../../assets/projectsImgs/index";

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-1 text-gray-900 md:grid-cols-3 justify-items-center h-full ">
        {ProjectsData.map((data) => (
          <div className="bg-gray-300 m-8 p-2 rounded-md ">
            <img src={data.project} className="" alt={data.name} />
            <h1 className="text-lg font-mono">{data.name}</h1>
            <p className="text-xs">{data.description}</p>
            <div className="my-2">
              <a
                href={data.url}
                className="text-gray-700 font-bold hover:text-red-400 border-b-2 border-b-red-500"
              >
                Deployed
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
