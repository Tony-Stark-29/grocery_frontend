import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../resources/icons/favicon.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faChevronRight,
  faClose,
  faCow,
  faDrumstickBite,
  faHeart,
  faLeaf,
  faRightFromBracket,
  faShop,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

export const MobileNavigation = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mobile-only-navigation offcanvas   d-block d-lg-none offcanvas-start text-light "
      tabIndex="-1"
      id="mobileNav"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header  ">
        <h5
          className="offcanvas-title fw-bolder w-auto m-auto "
          id="offcanvasLabel"
        >
          Tasty
          <img src={logo} alt="" />
          Daily
        </h5>
        <div
          className=" bg-transparent fs-3 fw-bolder text-light"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          {" "}
          <FontAwesomeIcon icon={faClose} />{" "}
        </div>
      </div>
      <div
        className="offcanvas-body d-flex flex-column justify-content-between  "
        style={{ height: "90%" }}
      >
        <nav className=" navbar-nav ">
          <ul className="fs-3 text-start  nav d-flex flex-column text-center">
            <li className="nav-item">
              <div className="user-info-card"></div>
            </li>
            <li className="nav-item m-0">
              <Link
                className="nav-link d-flex flex-row justify-content-between align-items-center"
                to="/shop"
              >
                <span>
                  <FontAwesomeIcon className="fa-icons mx-2  " icon={faShop} />
                  Shop
                </span>
                <FontAwesomeIcon
                  className="justify-self-end"
                  icon={faChevronRight}
                />
              </Link>
            </li>
            <li className="nav-item m-0">
              <Link
                className="nav-link   d-flex flex-row justify-content-between align-items-center"
                to="/shop/vegetables"
              >
                <span>
                  <FontAwesomeIcon className="fa-icons mx-2" icon={faLeaf} />
                  Vegies
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className="nav-item m-0">
              <Link
                className="nav-link d-flex flex-row justify-content-between align-items-center"
                to="/shop/fruits"
              >
                <span>
                  <FontAwesomeIcon
                    className="fa-icons mx-2"
                    icon={faAppleWhole}
                  />
                  Fruits
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className="nav-item m-0">
              <Link
                className="nav-link d-flex flex-row justify-content-between align-items-center"
                to="/shop/meat"
              >
                <span>
                  <FontAwesomeIcon
                    className="fa-icons mx-2"
                    icon={faDrumstickBite}
                  />
                  Meat
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li className="nav-item m-0">
              <Link
                className="nav-link d-flex flex-row justify-content-between align-items-center"
                to="/shop/dairy"
              >
                <span>
                  <FontAwesomeIcon className="fa-icons mx-2" icon={faCow} />
                  Dairy
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="d-flex flex-row fw-bolder   py-3 align-items-center justify-content-evenly">
          <Link to="/shop/myaccount">
            <FontAwesomeIcon className="fa-icons fs-3" icon={faUser} />
          </Link>
          <Link to="/shop/cart">
            <FontAwesomeIcon className="fa-icons fs-3" icon={faShoppingCart} />
          </Link>
          <Link to="/shop/liked-items">
            <FontAwesomeIcon className="fa-icons fs-3" icon={faHeart} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon
              className="text-danger fs-3"
              icon={faRightFromBracket}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
