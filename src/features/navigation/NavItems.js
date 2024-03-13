import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faLeaf,
  faAppleWhole,
  faDrumstickBite,
  faCow,
  faLemon,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export const NavItems = () => {
  return (
    <>
      <li className="nav-item mx-3 ">
        <Link className="nav-link " to="/shop">
          <FontAwesomeIcon className="fa-icons mx-2  " icon={faShop} />
          <span>Shop</span>
        </Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-link" to="/shop/vegetables">
          <FontAwesomeIcon className="fa-icons mx-2" icon={faLeaf} />
          <span>Vegies</span>
        </Link>
      </li>
      <li className="nav-item mx-3">
        <Link to="/shop/salad" className="nav-link">
          <FontAwesomeIcon className="fa-icons mx-2" icon={faLemon} />{" "}
          <span>Salad</span> 
        </Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-link" to="/shop/fruits">
          <FontAwesomeIcon className="fa-icons" icon={faAppleWhole} />
          <span>Fruits</span>
        </Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-link" to="/shop/meat">
          <FontAwesomeIcon className="fa-icons mx-2" icon={faDrumstickBite} />
          <span>Meat</span>
        </Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-link" to="/shop/dairy">
          <FontAwesomeIcon className="fa-icons mx-2" icon={faCow} />
          <span>Dairy</span>
        </Link>
      </li>
    </>
  );
};
