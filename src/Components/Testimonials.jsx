import React from "react";
import { testimonialsInfo } from "../Data/TestimonialsInfo";
import OneTestimonial from "./OneTestimonial";

function Testimonials() {
  return (
    <div className={`bg-dark-grey w-screen`}>
      <div className="m-36">
        <h1 className=" text-base text-brown">What clients say</h1>
        <h2 className="text-4xl font-bold text-light-brown mb-10">
          Testimonials
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
        <div
          className={`flex mt-5 w-full ${
            testimonialsInfo.length
              ? "scrollbar-hide overflow-x-auto space-x-5"
              : "justify-center items-center"
          }`}
        >
          {testimonialsInfo.length ? (
            testimonialsInfo.map((testimonial, index) => (
              <OneTestimonial key={index} TestimonialIndex={index} />
            ))
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={require("../Assets/EmptySection.png")}
                alt=""
                srcset=""
              />
              <h1 className="text-light-grey">
                There are no testimonials for now.
              </h1>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button className="border px-8 py-2 text-light-brown border-light-brown hover:text-brown hover:border-brown">
            + add testimonial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
