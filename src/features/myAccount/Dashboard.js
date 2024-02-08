import {
  faArchive,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./myaccount.css";

export const Dashboard = () => {
  return (
    <div className="row">
      <h4>Overview</h4>
      <div className="overview col-12 col-lg-8  border-end">
        <div className="  d-flex flex-row align-items-center justify-content-between   my-4   px-2 py-1  ">
          <div className=" d-flex flex-row align-items-center">
            <div>
              <FontAwesomeIcon className="fa-icons fs-3 " icon={faArchive} />
            </div>
            <h6 className="fw-bolder text-center mx-2">Total Orders</h6>
          </div>
          <p>
            <strong className="  px-2">6</strong>
          </p>
        </div>
        <div className="  d-flex flex-row align-items-center justify-content-between my-4  px-2 py-1  ">
          <div className=" d-flex flex-row align-items-center">
            <div>
              <FontAwesomeIcon
                className="fa-icons fs-3 "
                icon={faShoppingCart}
              />
            </div>
            <h6 className="fw-bolder text-center mx-2">Cart Items</h6>
          </div>
          <p>
            <strong className="  px-2">6</strong>
          </p>
        </div>
        <div className="  d-flex flex-row align-items-center justify-content-between  my-4  px-2 py-1  ">
          <div className=" d-flex flex-row align-items-center">
            <div>
              <FontAwesomeIcon className="fa-icons fs-3 " icon={faHeart} />
            </div>
            <h6 className="fw-bolder text-center mx-2">Liked Items</h6>
          </div>
          <p>
            <strong className="  px-2">6</strong>
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <h4>Recent Order</h4>
      </div>
    </div>
  );
};
