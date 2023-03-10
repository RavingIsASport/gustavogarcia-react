import React from "react";
import ProjectsData from "../../assets/projectsImgs/index";

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center h-full n">
        {ProjectsData.map((data) => (
          <div className="bg-slate-100 m-8 p-2 rounded-md border-[1px] border-slate-900">
            <img src={data.project} className="" alt={data.name} />
            <h1 className="text-lg">{data.name}</h1>
            <p className="text-xs">{data.description}</p>
            <div className="my-2">
              <a href={data.url} className="text-lime-600 font-bold ">
                Check It Out
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
