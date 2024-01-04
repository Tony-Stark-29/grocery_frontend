import React from "react";
import logo from "../resources/logo-hamper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPerson,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const PrimaryNavigation = () => {
  return (
    <div className="row m-auto text-light">
      <div className="col-2">
        <div>
          Tasty
          <img src={logo} alt="" />
          Daily
        </div>
      </div>
      <nav className="col-8 navbar navbar-expand-lg navbar-dark bg-transparent text-light ">
        <div className=" collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-items mx-5">Home</li>
            <li className="nav-items mx-5">Home</li>
            <li className="nav-items mx-5">Home</li>
            <li className="nav-items mx-5">Home</li>
            <li className="nav-items mx-5">Home</li>
          </ul>
        </div>
      </nav>
      <div className="col-2 align-items-center">
        <div className="row align-middle">
          <FontAwesomeIcon className="col" icon={faSearch} />
          <FontAwesomeIcon className="col"  icon={faUser} />
          <FontAwesomeIcon className="col" icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
};
