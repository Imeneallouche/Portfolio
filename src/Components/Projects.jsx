import React, { useRef } from "react";
import OneProject from "./OneProject";
import { ProjectsInfo } from "../Data/ProjectsInfo";

function Projects() {
  const containerRef = useRef();

  const scrollContainer = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };

  const SwipeRight = () => {
    scrollContainer(-30); // Scroll left by 30 pixels
  };

  const SwipeLeft = () => {
    scrollContainer(30); // Scroll right by 30 pixels
  };
  return (
    <div className="bg-dark-grey w-screen">
      <div className="m-36">
        <h1 className=" text-base text-brown">What have I been working on</h1>
        <h2 className="text-4xl font-bold text-light-brown mb-10">
          My projects
        </h2>
        <div className="flex justify-end  ">
          <button
            onClick={SwipeLeft}
            className="border border-light-brown px-7 py-4 hover:bg-light-brown"
          >
            {" "}
            {"<-"}{" "}
          </button>
          <button
            onClick={SwipeRight}
            className="border border-light-brown px-7 py-4 hover:bg-light-brown"
          >
            {" "}
            {"->"}
          </button>
        </div>
        <div
          ref={containerRef}
          className="scrollbar-hide mt-5 w-full overflow-x-auto flex space-x-5"
        >
          {ProjectsInfo.map((project, index) => (
            <OneProject key={index} ProjectIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
