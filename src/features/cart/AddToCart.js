import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
import { useCartContext } from "../../hooks/useCartContext";
import { useGroceryContext } from "../../hooks/useGroceryContext";
export const AddToCart = ({ stock, id }) => {

  const {cart,dispatch:cartDispatch}=useCartContext();
  const {products}=useGroceryContext();

  
  const handleAddToCart = (id) => {
    console.log(id);
    const itemToAdd=products.find((item) => item?._id===id );
    console.log(itemToAdd);
    const payload={_id:itemToAdd?._id,name:itemToAdd?.name , price:itemToAdd?.price , quantity:1 , imageUrl:itemToAdd?.imageUrl }
    cartDispatch({type:"ADD_TO_CART",payload});


  };

  return (
    <button
      className="btn-cart-success rounded-circle px-2"
      onClick={() => handleAddToCart(id)}>
      <FontAwesomeIcon icon={faCartPlus} />
    </button>
  );
};
