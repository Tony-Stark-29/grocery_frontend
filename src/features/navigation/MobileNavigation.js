import React from "react";
import { NavItems } from "./NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const MobileNavigation = () => {
  return (
    <div
      className="offcanvas d-block d-lg-none offcanvas-start mobile-only-navigation bg-dark"
      tabIndex="-1"
      id="mobileNav"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header ">
        <h5 className="offcanvas-title text-light" id="offcanvasLabel">
          Tasty Daily
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <nav className=" navbar-nav ">
          <ul className="fs-3 text-start  nav flex-column align-item-evenly">
            <li className="nav-item mx-5">
              <div className="user-info-card"></div>
            </li>
            <NavItems />
          </ul>
        </nav>
      </div>
    </div>
  );
};
