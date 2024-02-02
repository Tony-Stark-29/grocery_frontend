import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <section className="row m-auto py-5">
      <div className="col-12 py-5 d-flex flex-column align-items-center justify-content-center ">
        <div className="display-3 my-2 text-danger">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className="my-2">
          <h4>Your cart is currently empty</h4>
        </div>
        <div className="my-2">
          <button className="btn btn-outline-success rounded rounded-5"
            onClick={()=>navigate("/shop")}
          >
            <small>
              <strong>Return to Shop</strong>
            </small>
          </button>
        </div>
      </div>
    </section>
  );
};
