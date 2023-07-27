import React from "react";
import OneProject from "./OneProject";
import { ProjectsInfo } from "../Data/ProjectsInfo";

function Projects() {
  return (
    <div className="bg-dark-grey w-screen">
      <div className="m-36">
        <h1 className=" text-base text-brown">What have I been working on</h1>
        <h2 className="text-4xl font-bold text-light-brown mb-10">
          My projects
        </h2>
        <div className="flex justify-end  ">
          <button className="border border-light-brown px-7 py-4 hover:bg-light-brown">
            {" "}
            {"<-"}{" "}
          </button>
          <button className="border border-light-brown px-7 py-4 hover:bg-light-brown">
            {" "}
            {"->"}
          </button>
        </div>
        <div className="scrollbar-hide mt-5 w-full overflow-x-auto flex space-x-5">
          {ProjectsInfo.map((project, index) => (
            <OneProject key={index} ProjectIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
