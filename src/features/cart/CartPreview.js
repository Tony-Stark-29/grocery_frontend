import React, { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const CartPreview = () => {
  const { subTotal, cart, dispatch: cartDispatch } = useCartContext();
  const navigate=useNavigate();

  console.log(cart);
  return (
    <>
      <div className="card-header">
        <div className="card-title">Cart Preview</div>
      </div>
      <div className="card-body">
        {cart &&
          cart.slice(0, 2).map((item) => (
            <div className="row m-auto my-2  fs-6   border-bottom align-items-center">
              <div key={item?._id} className="col-4">
                <img
                  className="img-fluid my-3"
                  src={item?.imageUrl}
                  alt="product"
                  style={{ minHeight: "50px", minWidth: "50px" }}
                />
              </div>
              <div className="col-8">
                <div className="row m-auto -bolder ">
                  <div className="col-6"> {item?.name}</div>
                  <div className="col-6">
                    <small className="text-success">
                      {item?.quantity} <span>X</span>
                      <span>
                        <FontAwesomeIcon icon={faIndianRupee} /> {item?.price}{" "}
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className=" row ">
        <div className="col-6 fw-light">SubTotal : </div>
        <div className="col-6">
          <FontAwesomeIcon icon={faIndianRupee} /> {subTotal}
        </div>
      </div>
      <div className="mt-auto">
        <button className="btn btn-outline-success m-1" onClick={()=>navigate("/shop/cart")} >See All </button>
        <button className="btn btn-warning m-1">Checkout </button>
      </div>
    </>
  );
};
