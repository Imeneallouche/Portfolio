import React, { useState } from "react";

import { AboutData } from "../Data/About";
import { SideBarElements } from "../Data/Sidebar";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div
      className="flex flex-col bg-grey justify-center items-center"
      id={SideBarElements[1].id}
    >
      <div className="m-20 w-fit">
        <div className="flex w-full">
          <ul className="flex-1 flex border-b border-b-grey w-full justify-between bg-dark-grey">
            {AboutData.map((element, index) => (
              <li
                className={`flex-1 text-light-grey text-center py-10 cursor-pointer hover:bg-light-brown ${
                  index === currentIndex ? "bg-brown" : "bg-dark-grey"
                }`}
                onClick={(index) => {
                  setCurrentIndex(element.index);
                  console.log(currentIndex);
                }}
              >
                {element.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex bg-dark-grey p-10 items-center">
          <img
            className="w-60 h-60"
            src={require(`../Assets/About/${AboutData[currentIndex].value}.png`)}
            alt="pic"
          />
          <div className="mx-10">
            {AboutData[currentIndex].desc.map((element, index) => (
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-light-brown mr-5 my-8"></div>
                <div className="flex">
                  {element.split(":  ").map((part, index) => (
                    <pre
                      className={`${
                        index === 0 ? "text-light-brown" : "text-light-grey"
                      }`}
                    >
                      {part}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
            <button className="px-5 py-3 hover:text-brown cursor-pointer text-red border border-red hover:border-brown">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
