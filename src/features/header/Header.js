import React, { useEffect } from "react";
import { PrimaryNavigation } from "../navigation/PrimaryNavigation";
import { MobileNavigation } from "../navigation/MobileNavigation";

export const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const header = document.getElementsByTagName("header")[0];
      if (scrollTop > 50) {
        header.classList.add("shadow-sm");
      } else {
        header.classList.remove("shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className=" bg-light  container-fluid position-sticky sticky-top  ">
      <div className=" ">
        <PrimaryNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};
