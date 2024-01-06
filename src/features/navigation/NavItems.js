import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faLeaf,
  faAppleWhole,
  faDrumstickBite,
  faCow
} from "@fortawesome/free-solid-svg-icons";

export const NavItems = () => {
  return (
    <>
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
          <FontAwesomeIcon className="fa-icons mx-2" icon={faDrumstickBite} />
          <span>Meat</span>
        </Link>
      </li>
      <li className="nav-item mx-5">
        <Link className="nav-link">
          <FontAwesomeIcon className="fa-icons mx-2" icon={faCow} />
          <span>Dairy</span>
        </Link>
      </li>
    </>
  );
};
