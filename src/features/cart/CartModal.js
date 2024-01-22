import React from "react";
import { CartPreview } from "./CartPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const CartModal = () => {
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
          1
        </small>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <CartPreview />
        </div>
      </div>
    </div>
  );
};
