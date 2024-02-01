import { useContext } from "react";
import { CartContext } from "../contexts/Cart";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context)
    throw Error("CartContext shoud be used inside the CartContextProvider");

  return context;
};

 
