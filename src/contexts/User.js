import { createContext, useEffect, useReducer } from "react";
import { auth } from "../config/firebaseConfig";
const initialState = {
  user: null,
  isAuthenticated: false,
};
export const UserContext = createContext();

const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "LOGOUT":
      auth.signOut();
      return { ...state, ...initialState };

    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        try {
          const response = await fetch(
            `${process.env.REACT_API_BASE_URL || ""}/user/login`,
            {
              method: "GET",
              headers: {
                Authorization: "Bearer " + authUser?.accessToken,
              },
            }
          );
          const userData = await response.json();
          console.log("UserData", userData.user);
          dispatch({ type: "LOGIN", payload: userData?.user });
        } catch (error) {
          console.error("Error fetching user data from backend:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
