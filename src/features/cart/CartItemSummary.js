import React from "react";
import { useCartContext } from "../../hooks/useCartContext";

export const CartItemSummary = () => {
  const { cart } = useCartContext();

  return (
    <>
      {cart &&
        cart.map((item) => (
          <div className=" my-1 d-flex flex-row justify-content-between ">
            <div className="fw-lighter">
              <span>{item?.name}</span>
              <span className="mx-2">x</span>
              <span>{item?.quantity}</span>
            </div>
            <div>
              <span className="fw-bolder text-success ">
                {item?.quantity * item?.price}
              </span>
            </div>
          </div>
        ))}
    </>
  );
};
