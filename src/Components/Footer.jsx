import React, { useState } from "react";
import { ContactInfo } from "../Data/Contact";
import { AboutData } from "../Data/About";
import axios from "axios";

function Footer() {
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const personalContact = [
    { name: "Phone", info: "(+213)699240858" },
    { name: "Email", info: "li_allouche@esi.dz" },
    { name: "Location", info: "Dar Djbel, Béjaia, Algeria" },
  ];

  const handleSubmit = () => {
    console.log("hehehe");
  };
  return (
    <div className="bg-dark-grey w-screen">
      <div className="mx-36 my-12 flex flex-col space-y-20">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-5">
            <h1 className="font-bold text-xl mb-5 text-light-brown underline">
              Personal Contact:
            </h1>

            {personalContact.map((contact, index) => (
              <div className="flex items-center space-x-3">
                <img
                  src={require(`../Assets/socialmedia/${contact.name}.png`)}
                  alt=""
                  className="w-10"
                />
                <p className="text-light-grey"> {contact.info} </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-5">
            <h1 className="font-bold text-xl mb-5 text-light-brown underline">
              Other Sections:
            </h1>

            {AboutData.map((section, index) => (
              <div className="flex items-center space-x-3">
                <p className="text-light-grey hover:underline hover:text-brown cursor-pointer">
                  {" "}
                  {section.label}{" "}
                </p>
              </div>
            ))}
          </div>

          {/*
              
              
              
              
              
              
              
              
              
              
              
              
              
        */}
          <form
            onSubmit={handleSubmit}
            className="py-8 px-12 border rounded-md border-light-brown flex flex-col space-y-5 "
          >
            <div className="mb-5">
              <h1 className="text-xl text-light-grey font-bold">
                Get in Touch:
              </h1>
              <h2 className="text-light-grey">
                Feel free to send a quick message:
              </h2>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b-2 border-light-grey appearance-none dark:text-white dark:border-grey dark:focus:border-light-brown focus:outline-none focus:ring-0 focus:border-light-brown peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-grey dark:text-light-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-brown peer-focus:dark:text-light-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your email
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_subject"
                value={Subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                id="floating_subject"
                className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b-2 border-light-grey appearance-none dark:text-white dark:border-grey dark:focus:border-light-brown focus:outline-none focus:ring-0 focus:border-light-brown peer"
                placeholder=" "
                required
              />
              <label
                for="floating_subject"
                className="peer-focus:font-medium absolute text-sm text-grey dark:text-light-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-brown peer-focus:dark:text-light-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject of the Email
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_message"
                value={Message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="floating_message"
                className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b-2 border-light-grey appearance-none dark:text-white dark:border-grey dark:focus:border-light-brown focus:outline-none focus:ring-0 focus:border-light-brown peer"
                placeholder=" "
                required
              />
              <label
                for="floating_message"
                className="peer-focus:font-medium absolute text-sm text-grey dark:text-light-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-brown peer-focus:dark:text-light-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="border px-12 py-5 text-light-brown border-light-brown hover:text-white hover:bg-light-brown"
            >
              Send Email
            </button>
          </form>
        </div>

        {/*
              
              
              
              
              
              
              
              
              
              
              
              
              
        */}
        <div className="flex justify-center items-center space-x-5">
          {ContactInfo.map((socialmedia, index) => (
            <img
              className="w-10 cursor-pointer"
              src={require(`../Assets/socialmedia/${socialmedia.socialmedia}.png`)}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
