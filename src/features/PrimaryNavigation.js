import React from "react";
import logo from "../resources/logo-hamper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faBars,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { NavItems } from "./navigation/NavItems";

export const PrimaryNavigation = () => {
  return (
    <div className="row m-auto text-light align-items-center justify-content-between px-2 p-lg-1">
      <div className="d-block d-lg-none col-2">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            className="navbar-toggle-icon fa-icons"
            icon={faBars}
          />
        </button>
      </div>
      <div className="col-8 col-md-3 col-lg-2">
        <div>
          Tasty
          <img src={logo} alt="" />
          Daily
        </div>
      </div>
      <nav className="col-8 d-none d-lg-block navbar  navbar-expand-lg navbar-dark bg-transparent text-light ">
        <div
          className=" collapse navbar-collapse justify-content-center"
          id="primaryNav"
        >
          <ul className="navbar-nav">
            <NavItems />
          </ul>
        </div>
      </nav>
      <div className="col-2 col-md-1 col-lg-2 navbar navbar-expand-lg">
        <div className="action-container row m-auto px-lg-5 collape navbar-collapse">
          <div className="col d-none d-lg-block">
            <FontAwesomeIcon className=" action link-scale" icon={faUser} />
          </div>
          <div className="col d-none d-lg-block">
            <FontAwesomeIcon className=" action link-scale" icon={faHeart} />
          </div>
          <div className="col">
            <FontAwesomeIcon
              className="action  link-scale"
              icon={faCartShopping}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
