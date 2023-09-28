import React from "react";
import { ContactInfo } from "../Data/Contact";
import { SideBarElements } from "../Data/Sidebar";

function Contact() {
  return (
    <div className="bg-grey" id={SideBarElements[5].id}>
      <div className="m-36">
        <h1 className=" text-base text-brown">social media</h1>
        <h2 className="text-4xl font-bold text-light-brown mb-10">
          Contact Me
        </h2>

        <div className="flex flex-wrap justify-between">
          {" "}
          {ContactInfo.map((contact, index) => (
            <div
              className="w-96 h-28 bg-dark-grey my-5 mr-5 flex justify-between items-center p-5 rounded-lg cursor-pointer hover:border hover:border-light-grey"
              onClick={() => {
                window.open(contact.link, "_blank");
              }}
            >
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl text-white ">
                  {" "}
                  {contact.socialmedia}{" "}
                </h1>
                <h2 className="text-light-brown">{contact.username}</h2>
              </div>
              <div className="">
                <img
                  src={require(`../Assets/socialmedia/${contact.socialmedia}.png`)}
                  alt=""
                  className="w-12"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
