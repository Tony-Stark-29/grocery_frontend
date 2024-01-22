import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { WhishListCard } from "../whishList/WhishListCard";
import "./navigation.css";
import { CartPreview } from "../cart/CartPreview";
import { Link } from "react-router-dom";
import { CartModal } from "../cart/CartModal";
export const NavigationUtilities = () => {
  return (
    <div className="action-container row  m-auto text-center  collape navbar-collapse fs-5">
      <div className="nav-dropdown-container  col d-none d-xl-block ">
        <FontAwesomeIcon className="  link-scale" icon={faUser} />
      </div>
      <div className="nav-dropdown-container col d-none d-xl-block ">
        <FontAwesomeIcon className="  link-scale" icon={faHeart} />
        <div className="nav-dropdown-card card shadow">
          <WhishListCard />
        </div>
      </div>
      <div className="nav-dropdown-container col  d-none d-lg-block ">
        <FontAwesomeIcon className=" link-scale " icon={faCartShopping} />
        <small
          className="badge badge-danger bg-danger position-absolute top-fixed rounded-circle"
          style={{ fontSize: "10px", top: "-1px" }}
        >
          1
        </small>
        <div className="nav-dropdown-card card shadow">
          cart preview
          <CartPreview/>
        </div>
      </div>
      <div className="col  d-block d-lg-none ">
        <CartModal />
      </div>
    </div>
  );
};
