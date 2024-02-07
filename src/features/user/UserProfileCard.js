import React from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import { auth } from "../../config/firebaseConfig";

export const UserProfileCard = () => {
  const { user, dispatch: userDispatch } = useUserContext();
  const { dispatch: cartDispatch } = useCartContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    cartDispatch({ type: "RESET_CART" });
    userDispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <div className="row m-auto py-3">
      {user && (
        <div>
          <div>
            <FontAwesomeIcon icon={faUser} />{" "}
            <span>{user?.first_name + " " + user?.last_name}</span>
          </div>
          <div className="row m-auto justify-content-evenly my-2">
            <button
              className="btn-outline-primary rounded-5 px-4 m-auto w-auto  "
              onClick={() => navigate("/shop/myaccount")}
            >
              My Account
            </button>
            <button
              className="btn-outline-secondary rounded-5 px-4 m-auto w-auto"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
      {!user && (
        <div className="my-2 row justify-content-center m-auto">
          <h5 className="display-5 text-center">
            <FontAwesomeIcon icon={faUser} />
          </h5>
          <h6>Login in with Phone number</h6>
          <button
            className="btn-outline-primary rounded-5 w-auto  px-4  mx-2"
            onClick={() => navigate("/shop/myaccount/login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
