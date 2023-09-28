import React from "react";
import { SideBarElements } from "../Data/Sidebar";
import { useToast } from "@chakra-ui/toast";

import { Link } from "react-scroll";
function SideBar() {
  const toast = useToast();

  const handleRouting = (completed) => {
    if (!completed) {
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
    <div className="flex justify-between items-center px-10">
      <div className="pr-20">
        <img
          src={require("../Assets/logo.png")}
          className="w-40 h-40 cursor-pointer"
          alt="logo"
        />
      </div>

      <ul className="flex justify-between flex-1">
        {SideBarElements.map((element, index) => (
          <li
            className={`px-5 py-3 hover:text-brown cursor-pointer ${
              element.different
                ? "text-red border border-red hover:border-brown"
                : "text-light-grey"
            }`}
            onClick={() => handleRouting(element.completed)}
          >
            <Link to={element.id} spy={true} smooth={true} duration={250}>
              {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
