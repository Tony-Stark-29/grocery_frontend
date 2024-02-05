import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
import { useCartContext } from "../../hooks/useCartContext";
import { useGroceryContext } from "../../hooks/useGroceryContext";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../../config/firebaseConfig";
import { useApi } from "../../hooks/useApi";
import loading_spinner from "../../resources/tube-spinner-light.svg";

export const AddToCart = ({ content = "", stock, id }) => {
  const { cart, dispatch: cartDispatch } = useCartContext();
  const { error, isLoading, requestApi } = useApi();
  const { products } = useGroceryContext();

  const handleAddToCart = async (id) => {
    const itemToAdd = products.find((item) => item?._id === id);

    const payload = {
      _id: itemToAdd._id,
      name: itemToAdd.name,
      price: itemToAdd.price,
      quantity: 1,
      imageUrl: itemToAdd.imageUrl,
    };
    const item = {
      _id: itemToAdd?._id,
      quantity: 1,
    };

    if (auth.currentUser) {
      const res = await requestApi("/user/cart", "POST", { item });

      if (res.error || res.Error) {
        toast.error(res.error,{
          style: {
            width: '500px', 
            textAlign:"left",
            fontSize:"0.9rem"
          },
        });
        return;
      }
      toast.success(res.message);
    }
    cartDispatch({ type: "UPDATE_CART", payload });
  };

  const btnContent = content ? content : <FontAwesomeIcon icon={faCartPlus} />;

  return (
    <>
      <button
        className="btn-cart-success   rounded-5 px-2 "
        onClick={() => handleAddToCart(id)}
        disabled={isLoading}
      >
        {isLoading && <img src={loading_spinner} className="img-fluid  " />}
        {!isLoading && btnContent}
      </button>
      <Toaster containerClassName="container" />
    </>
  );
};
