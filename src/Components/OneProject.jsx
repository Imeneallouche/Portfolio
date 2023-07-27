import React from "react";
import { ProjectsInfo } from "../Data/ProjectsInfo";

const OneProject = ({ ProjectIndex }) => {
  return (
    <div className="flex flex-col justify-between flex-shrink-0 w-96 bg-dark-grey border border-grey">
      <div>
        <img
          src={require(`../Assets/Projects/${ProjectsInfo[ProjectIndex].title}/${ProjectsInfo[ProjectIndex].img}.png`)}
          alt="h"
          className="w-full"
        />
      </div>

      <div className="h-16 flex items-center">
        <p className="px-5 text-light-brown font-semibold ">
          {" "}
          {ProjectsInfo[ProjectIndex].detail}{" "}
        </p>
      </div>
      <div className="h-16 flex items-center">
        <h1 className="px-5 text-3xl text-light-grey font-bold">
          {" "}
          {ProjectsInfo[ProjectIndex].title}
        </h1>
      </div>
      <div className=" h-36 flex items-start">
        <p className="px-5 text-light-grey">{ProjectsInfo[ProjectIndex].description} </p>
      </div>

      <p className="text-light-brown font-semibold px-5 pb-2">technologies: </p>
      <div className="flex px-5 items-center">
        {ProjectsInfo[ProjectIndex].technologies.map((technology, index) => (
          <img
            className="ml-2"
            src={require(`../Assets/Technologies/${technology}.png`)}
            alt=""
          />
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="border px-12 py-5 text-red mr-5 border-red hover:text-brown hover:border-brown w-fit">
          learn more
        </button>
      </div>
    </div>
  );
};

export default OneProject;
