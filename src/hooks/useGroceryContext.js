import { GroceryContext } from "../contexts/Grocery";
import { useContext } from "react";

export const useGroceryContext = () => {
  const context = useContext(GroceryContext);

  if(!context) throw Error("GroceryContext shoud be used inside the GroceryContextProvider");

  return context;

};

 
