import React from "react";
import logo from "../resources/logo-hamper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCartShopping,
  faPerson,
  faSearch,
  faBars,
  faUser,
  faShop,
  faLeaf,
  faAppleWhole,
  faDrumstickBite,
  faCow,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export const PrimaryNavigation = () => {
  return (
    <div className="row m-auto text-light align-items-center">
      <div className="d-block d-md-none col-2">
        <button
          className="btn btn-outline-none"
          type="button"
          data-toggle="collapse"
          data-target="#primaryNav"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon className="fa-icons" icon={faBars} />
        </button>
      </div>
      <div className="col-8 col-md-2">
        <div>
          Tasty
          <img src={logo} alt="" />
          Daily
        </div>
      </div>
      <nav className="d-none d-md-block col-8 navbar navbar-expand-lg navbar-dark bg-transparent text-light ">
        <div
          className=" collapse navbar-collapse justify-content-center"
          id="primaryNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-5">
              <Link className="nav-link">
                <FontAwesomeIcon className="fa-icons mx-2" icon={faShop} />
                <span>Shop</span>
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link">
                <FontAwesomeIcon className="fa-icons mx-2" icon={faLeaf} />
                <span>Vegies</span>
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link">
                <FontAwesomeIcon className="fa-icons" icon={faAppleWhole} />
                <span>Fruits</span>
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link">
                <FontAwesomeIcon
                  className="fa-icons mx-2"
                  icon={faDrumstickBite}
                />
                <span>Meat</span>
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link">
                <FontAwesomeIcon className="fa-icons mx-2" icon={faCow} />
                <span>Dairy</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="col-2 col-md-2 navbar navbar-expand-lg">
        <div className="action-container row m-auto px-lg-5 collape navbar-collapse">
          <div className="col d-none d-md-block">
            <FontAwesomeIcon className=" action link-scale" icon={faUser} />
          </div>
          <div className="col">
            <FontAwesomeIcon className=" action link-scale" icon={faHeart} />
          </div>
          <div className="col">
            <FontAwesomeIcon className="action  link-scale" icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};
