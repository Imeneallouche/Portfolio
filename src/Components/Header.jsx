import React from "react";
import SideBar from "./SideBar";
import { HeaderInfos } from "../Data/HeaderInfos";

function Header() {
  return (
    <div className="h-screen flex flex-col">
      <SideBar />
      <div className="grow flex">
        <div className="flex-1 flex flex-col justify-center items-center pl-36">
          <div>
            <h1 className="text-light-grey my-3 text-base">
              {HeaderInfos.salutation}
            </h1>
            <h2 className="text-5xl font-bold my-5"> {HeaderInfos.name}</h2>
            <h3 className="my-3 text-light-grey text-lg">
              {HeaderInfos.occupation}
            </h3>
            <h4 className="text-lg text-light-grey py-3">
              {HeaderInfos.description}
            </h4>
            <div className="flex my-5">
              <button className="border px-12 py-5 text-red mr-5 border-red hover:text-brown hover:border-brown">
                Hire me
              </button>
              <button className="bg-red text-white p-12 py-5 hover:bg-brown">
                Resume
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img className="m-0 p-0" src={require("../Assets/pic.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
