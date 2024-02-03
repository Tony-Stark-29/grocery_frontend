import React from "react";
import logo from "../../resources/icons/favicon.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavItems } from "./NavItems";
import { NavigationUtilities } from "./NavigationUtilities";

export const PrimaryNavigation = () => {
  return (
    <div className=" row m-auto  text-light align-items-center justify-content-between p-2 ">
      <div className="d-block d-lg-none col-2">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <FontAwesomeIcon
            className="navbar-toggle-icon fa-icons"
            icon={faBars}
          />
        </button>
      </div>
      <div className="col-8 col-md-3 col-xl-2 text-center">
        <div>
          Tasty
          <img src={logo} alt="" />
          Daily
        </div>
      </div>
      <nav className="col-8 d-none d-lg-block navbar  navbar-expand-lg navbar-dark bg-transparent text-light ">
        <div
          className=" collapse navbar-collapse d-flex flex-column flex-md-row justify-content-center  "
          id="primaryNav"
        >
          <ul className="navbar-nav ">
            <NavItems />
          </ul>
        </div>
      </nav>
      <div className="col-2 col-md-1 col-xl-2 navbar navbar-expand-lg ">
        <NavigationUtilities />
      </div>
    </div>
  );
};
