import React, { useEffect, useRef, useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faIndianRupee,
  faIndianRupeeSign,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import "./cart.css";
import { EmptyCart } from "./EmptyCart";
import { useApi } from "../../hooks/useApi";

export const Cart = () => {

 

  const angleDown = (
    <FontAwesomeIcon
      onClick={() => setAccordinIcon(angleUp)}
      icon={faAngleDown}
    />
  );
  const angleUp = (
    <FontAwesomeIcon
      onClick={() => setAccordinIcon(angleDown)}
      icon={faAngleUp}
    />
  );
  const couponAccordin = useRef(null);
  const { cart, subTotal ,dispatch} = useCartContext();
  const [accordinIcon, setAccordinIcon] = useState(angleDown);

  
  const toggleAccordin = () => {
    couponAccordin.current.classList.toggle("show");
  };

  if(cart.length ===0)
  {
    return <EmptyCart/>
  }

  return (
    <section className="cart-container row m-auto p-3 border">
      <div className="col-12 col-md-8">
        <div className="row m-auto">
          <div className="col-7">
            <h6>Product</h6>
          </div>
          <div className="col-3 text-center">
            <h6>Quantity</h6>
          </div>
          <div className="col-2 text-center">
            <h6>Subtotal</h6>
          </div>
        </div>

        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="row m-auto my-2 py-2 align-items-center  border-bottom">
              <div className="col-7 ">
                <div className="row m-auto">
                  <div className="col-3 border rouned-3 p-0">
                    <img
                      className="img-fluid "
                      src={item?.imageUrl}
                      alt={item?.name}
                    />
                  </div>
                  <div className="col d-flex flex-column align-items-center justify-content-center ">
                    <h5 className="w-auto">{item?.name}</h5>
                    <p><strong><span><FontAwesomeIcon icon={faIndianRupeeSign} /></span><span>{item?.price }</span></strong></p>
                  </div>
                </div>
              </div>
              <div className="col-3 text-center">
                <p>{item?.quantity}</p>
              </div>
              <div className="col-2 text-center text-success">
                <p><strong><span><FontAwesomeIcon icon={faIndianRupeeSign} /></span><span>{item?.price * item?.quantity}</span></strong></p>
              </div>
            </div>
          ))
        ) : (
          <div className="row m-auto justify-content-center py-2 text-danger">
            No Items In Cart
          </div>
        )}
      </div>
      <div className="col-12 col-md-4 align-self-end rounded border border-success">
        <div className="row m-auto border-bottom my-3 py-2">
          <div className="col-12 d-flex flex-row align-items-center">
            <h5 className=" w-75  ">Coupon Code</h5>{" "}
            <div className="w-25 text-end">
              <span onClick={toggleAccordin}>{accordinIcon}</span>
            </div>
          </div>
          <div
            className="col-12 collapse "
            id="coupon-accordin"
            ref={couponAccordin}
          >
            <input type="text" className="form-control" placeholder="REP50" />
          </div>
        </div>
        <div className="row m-auto border-bottom align-items-center my-2">
          <div className="col-6">
            <h5 className=" ">SubTotal</h5>{" "}
          </div>
          <div className="col-6 text-end fs-5">
            <p className="text-success">
              <FontAwesomeIcon icon={faIndianRupee} />{" "}
              <strong>{subTotal}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
