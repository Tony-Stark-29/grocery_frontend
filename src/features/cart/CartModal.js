import React from "react";
import { CartPreview } from "./CartPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../hooks/useCartContext";
export const CartModal = () => {

  const {cart}=useCartContext();
  return (
    <div className="  col ">
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        aria-controls="offcanvas"
      >
        <FontAwesomeIcon className=" link-scale " icon={faCartShopping} />
        <small
          className="badge badge-danger bg-danger position-absolute top-fixed rounded-circle"
          style={{ fontSize: "10px", top: "-1px" }}
        >
        {cart?.length || 0}
        </small>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <CartPreview />
        </div>
      </div>
    </div>
  );
};
