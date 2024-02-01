import { createContext, useEffect, useReducer } from "react";

const initialState = {
  cart: [],
  subTotal: 0,
};

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "SUB_TOTAL":
      return { ...state, subTotal: action.payload };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const total =
      state.cart.length > 0
        ? state.cart
            .map((item) => Number(item?.price) * Number(item?.quantity))
            .reduce((sum, price) => price + sum)
        : 0;
    console.log(total);
    dispatch({type:"SUB_TOTAL",payload:total});
  },[state.cart]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
