import React from "react";
import { serviceInfo } from "../Data/Services";

function Services() {
  return (
    <div className="bg-grey w-screen">
      <div className="m-36">
        <h1 className=" text-base text-brown">What Am I providing</h1>
        <h2 className="text-4xl font-bold text-light-brown mb-10">
          My Services
        </h2>

        <div
          className={`flex mt-5 w-full ${
            serviceInfo.length
              ? "flex-wrap space-x-5"
              : "justify-center items-center"
          }`}
        >
          {serviceInfo.length ? (
            serviceInfo.map((testimonial, index) => (
              <div className="flex flex-col h-64 w-96 items-center border border-light-brown space-y-10 p-3 rounded-md">
                <div className=" px-5 py-3 rounded-full  bg-light-brown flex justify-center items-center">
                  <img
                    src={require(`../Assets/Services/${testimonial.img}.png`)}
                    alt=""
                    className="w-10 relative"
                  />
                </div>
                <div className="mx-5 space-y-5">
                  <h1 className="text-center text-light-grey">{testimonial.title}</h1>
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
