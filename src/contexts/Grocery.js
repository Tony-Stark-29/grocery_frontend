import { createContext, useReducer } from "react";

const initialState = {
  products: [],
  categories: [],
};

export const GroceryContext = createContext();

const groceryReducer = (state, action) => {
  switch (action.type) {
    //Products
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCTS":
      console.log(state.products);
      const data=[...action.payload,...state.products]; 
      return { ...state, products:[...new Map(data.map((m) => [m.name, m])).values()] };
    case "DELETE_PRODUCT":
      const filtered = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, products: filtered };

    
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    default:
      return state;
  }
};

export const GroceryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groceryReducer, initialState);

  return (
    <GroceryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GroceryContext.Provider>
  );
};
