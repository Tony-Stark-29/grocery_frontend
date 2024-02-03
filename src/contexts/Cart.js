import { createContext, useEffect, useReducer } from "react";
import { useApi } from "../hooks/useApi";
import { auth } from "../config/firebaseConfig";

const initialState = {
  cart: [],
  subTotal: 0,
};

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // const prodctExist=state.cart.find((item)=> item?._id===action.payload?._id);
      // if(prodctExist)
      // {
      //   const modified=state.cart.map((item)=> item._id===action.payload?._id?{...item,quantity:item.quantity+1}:item)
      //   return {...state,cart:modified}
      // }
      console.log(action.payload);
      return { ...state, cart: action.payload };

    case "UPDATE_CART":
        return {...state,cart:[...state.cart,action.payload]}
    case "SUB_TOTAL":
      return { ...state, subTotal: action.payload };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { requestApi } = useApi();

  useEffect(() => {
    const total =
      state.cart?.length > 0
        ? state.cart
            .map((item) => Number(item?.price) * Number(item?.quantity))
            .reduce((sum, price) => price + sum)
        : 0;
    console.log(total);
    dispatch({ type: "SUB_TOTAL", payload: total });
  }, [state.cart]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        try {
          const response = await fetch("/user/cart", {
            method: "GET",
            headers: {
              Authorization: "Bearer " + authUser?.accessToken,
            },
          });
          const cartItems = await response.json();
          dispatch({ type: "ADD_TO_CART", payload: cartItems?.cartItems });
        } catch (error) {
          console.error("Error fetching user data from backend:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
