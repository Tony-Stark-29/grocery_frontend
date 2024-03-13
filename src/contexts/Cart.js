import { createContext, useEffect, useReducer } from "react";
import { auth } from "../config/firebaseConfig";

const initialState = {
  cart: [],
  subTotal: 0,
};

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: action.payload };
    case "UPDATE_CART":
      const prodct = state.cart.find(
        (item) => item?._id === action.payload?._id
      );
      if (prodct) {
        const modified = state.cart.map((item) =>
          item._id === action.payload?._id
            ? {
                ...item,
                quantity: item.quantity + (action.payload?.quantity || 1),
              }
            : item
        );
        return { ...state, cart: modified };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART_ITEM":
      const filtered = state.cart.filter(
        (item) => item._id !== action.payload?._id
      );
      return { ...state, cart: filtered };
    case "SUB_TOTAL":
      return { ...state, subTotal: action.payload };
    case "RESET_CART":
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const total =
      state.cart?.length > 0
        ? state.cart
            .map((item) => Number(item?.price) * Number(item?.quantity))
            .reduce((sum, price) => price + sum)
        : 0;
    dispatch({ type: "SUB_TOTAL", payload: total });
  }, [state.cart]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_BASE_URL||"/user/cart"}`, {
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
