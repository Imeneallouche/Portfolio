import React from "react";
import { serviceInfo } from "../Data/Services";
import { SideBarElements } from "../Data/Sidebar";

function Services() {
  return (
    <div className="bg-grey w-screen" id={SideBarElements[3].id}>
      <div className="m-36">
        <h1 className=" text-base text-brown">What Am I providing</h1>
        <h2 className="text-4xl font-bold text-light-brown mb-10">
          My Services
        </h2>

        <div
          className={`flex ${
            serviceInfo.length
              ? "flex-wrap justify-between"
              : "justify-center items-center"
          }`}
        >
          {serviceInfo.length ? (
            serviceInfo.map((testimonial, index) => (
              <div className="flex flex-col h-full w-96 items-center border border-light-brown space-y-3 p-3 rounded-md my-5 mr-5">
                <div className="flex justify-center items-center">
                  <img
                    src={require(`../Assets/Services/${testimonial.img}.png`)}
                    alt=""
                    className="w-16"
                  />
                </div>
                <div className="mx-5 space-y-5">
                  <h1 className="text-center text-xl text-light-brown">
                    {testimonial.title}
                  </h1>
                  <p className="text-light-grey"> {testimonial.text} </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={require("../Assets/EmptySection.png")}
                alt=""
                srcset=""
              />
              <h1 className="text-light-grey">
                There are no services for now.
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
