import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export const NavigationUtilities = () => {
  return (
    <div className="action-container row  m-auto text-center  collape navbar-collapse fs-5">
      <div className="col d-none d-xl-block ">
        <FontAwesomeIcon className=" action link-scale" icon={faUser} />
      </div>
      <div className="col d-none d-xl-block ">
        <FontAwesomeIcon className=" action link-scale" icon={faHeart} />
      </div>
      <div className="col  ">
        <FontAwesomeIcon className="action  link-scale" icon={faCartShopping} />
        <small className="badge badge-danger bg-danger position-absolute top-fixed rounded-circle" style={{fontSize:"10px",top:"-1px"}}>1</small>
      </div>
    </div>
  );
};
