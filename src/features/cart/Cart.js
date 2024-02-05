import React, { useEffect, useRef, useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";
import { EmptyCart } from "./EmptyCart";
import { useApi } from "../../hooks/useApi";
import { CheckoutCard } from "../checkout/CheckoutCard";
import toast, { Toaster } from "react-hot-toast";

export const Cart = () => {
  const { cart, dispatch } = useCartContext();
  const { error, isLoading, requestApi } = useApi();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  const handleCartItemDelete = async (_id) => {
    requestApi(`/user/cart/${_id}`, "DELETE").then((data) => {
      if (data?.error) {
        toast.error(data.error);
        return;
      }
      toast.success(data.message);
      dispatch({ type: "DELETE_CART_ITEM", payload: { _id } });
    });
  };
  return (
    <section className="cart-container row m-auto p-3 border">
      <div className="col-12 col-md-8 py-2">
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
            <div className="cart-item row m-auto my-2 py-2 align-items-center  border-bottom position-relative">
              <div className="cart-item-delete w-auto position-absolute ">
                <FontAwesomeIcon
                  onClick={() => handleCartItemDelete(item?._id)}
                  icon={faClose}
                  className=""
                />
              </div>
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
                    <p>
                      <strong>
                        <span>
                          <FontAwesomeIcon icon={faIndianRupeeSign} />
                        </span>
                        <span>{item?.price}</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3 text-center">
                <p>{item?.quantity}</p>
              </div>
              <div className="col-2 text-center text-success">
                <p>
                  <strong>
                    <span>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />
                    </span>
                    <span>{item?.price * item?.quantity}</span>
                  </strong>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="row m-auto justify-content-center py-2 text-danger">
            No Items In Cart
          </div>
        )}
      </div>
      <div className="col-12 col-md-4 position-relative ">
        <CheckoutCard />
      </div>
      <Toaster />
    </section>
  );
};
