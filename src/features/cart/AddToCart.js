import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
import { useCartContext } from "../../hooks/useCartContext";
import { useGroceryContext } from "../../hooks/useGroceryContext";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../../config/firebaseConfig";
import { useApi } from "../../hooks/useApi";
import loading_spinner from "../../resources/tube-spinner-black.svg";

export const AddToCart = ({ content = "", stock, id }) => {
  const { cart, dispatch: cartDispatch } = useCartContext();
  const { error, isLoading, requestApi}=useApi();
  const { products } = useGroceryContext();
  const currentUser=auth.currentUser;
  console.log(currentUser?.accessToken)

  const handleAddToCart =async (id) => {
    console.log(id);
    const itemToAdd = products?.find((item) => item?._id === id);
    console.log(itemToAdd);
    const payload = {
      _id: itemToAdd?._id,
      name: itemToAdd?.name,
      price: itemToAdd?.price,
      quantity: 1,
      imageUrl: itemToAdd?.imageUrl,
    };
    const item={
      _id:itemToAdd?._id,
      quantity:1,
    }

    const res=await requestApi("/user/cart","POST",{item});
    cartDispatch({ type: "ADD_TO_CART", payload });
    toast.success("Item Added to cart");
  };

  return (
    <>
      <button
        className="btn-cart-success rounded-5 px-2"
        onClick={() => handleAddToCart(id)}
      >
        {isLoading && <img src={loading_spinner} className="img-fluid" /> }
        {!isLoading && content ? content : <FontAwesomeIcon icon={faCartPlus} /> }
        
      </button>
      <Toaster />
    </>
  );
};
