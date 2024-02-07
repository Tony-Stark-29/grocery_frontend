import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../hooks/useCartContext";
import {
  faAngleDown,
  faAngleUp,
  faBuildingColumns,
  faCreditCard,
  faCreditCardAlt,
  faIndianRupee,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { CartItemSummary } from "./CartItemSummary";

export const CartTotal = () => {
  const navigate = useNavigate();
  const { cart, subTotal, dispatch } = useCartContext();

  return (
    <div
      className=" border border-success rounded p-2    "
      style={{ zIndex: "1" }}
    >
      <div className="row m-auto my-3 py-2">
        <div className="d-flex flex-row justify-content-between">
          <h5 className=" ">Cart Items</h5>
          <h5 className=" ">
            <span className="fs-6 pe-2">Price</span>
          </h5>
        </div>
        <div className="row m-auto">
          <CartItemSummary/>
        </div>
      </div>

      <div className="row d-flex flex-row align-items-center m-auto border-bottom border-top  py-2 my-2">
        <div className="col-6">
          <h5 className=" ">SubTotal</h5>
        </div>
        <div className="col-6 text-end fs-5">
          <span className="text-success">
            <FontAwesomeIcon icon={faIndianRupee} /> <strong>{subTotal}</strong>
          </span>
        </div>
      </div>

      <div className="row m-auto mb-3">
        <button
          className="btn btn-success rounded-5 px-3 py-1 w-auto m-auto"
          onClick={() => navigate("/shop/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
