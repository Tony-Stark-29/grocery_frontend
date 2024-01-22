import { useContext } from "react";
import { UserContext } from "../contexts/User";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context)
    throw Error("UserContext shoud be used inside the UserContextProvider");

  return context;
};

 
