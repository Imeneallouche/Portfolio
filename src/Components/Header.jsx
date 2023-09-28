import React from "react";
import SideBar from "./SideBar";
import { HeaderInfos } from "../Data/HeaderInfos";
import { SideBarElements } from "../Data/Sidebar";
import { useToast } from "@chakra-ui/toast";

function Header() {
  const toast = useToast();

  const handleRouting = (completed, link) => {
    if (completed) {
      window.open(link, "_blank");
    } else {
      toast({
        title: "This page is still on work",
        description:
          "For now, you can hire me by sending an email in the contact section",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  return (
    <div className="h-screen flex flex-col" id={SideBarElements[0].id}>
      <SideBar />
      <div className="grow flex">
        <div className="flex-1 flex flex-col justify-center items-center pl-36">
          <div>
            <h1 className="text-light-grey my-3 text-base">
              {HeaderInfos.salutation}
            </h1>
            <h2 className="text-5xl font-bold my-5 text-white">
              {" "}
              {HeaderInfos.name}
            </h2>
            <h3 className="my-3 text-light-grey text-lg">
              {HeaderInfos.occupation}
            </h3>
            <h4 className="text-lg text-light-grey py-3">
              {HeaderInfos.description}
            </h4>
            <h5 className="text-lg text-light-grey py-3">
              I cordially invite you to explore my{" "}
              <a
                className="text-light-brown hover:underline"
                href="https://medium.com/@li_allouche"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium account
              </a>
              , where you'll discover my in-depth writeups on CTF challenges and
              HTB machines.
            </h5>
            <div className="flex my-5">
              <button
                className="border px-12 py-5 text-red mr-5 border-red hover:text-brown hover:border-brown"
                onClick={() => handleRouting(false, null)}
              >
                Hire me
              </button>
              <button
                className="bg-red text-white p-12 py-5 hover:bg-brown"
                onClick={() => handleRouting(true, HeaderInfos.CVlink)}
              >
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
