import React from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const UserProfileCard = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  return (
    <div className="row m-auto py-3">
      {user && (
        <div>
          <div>
            <FontAwesomeIcon icon={faUser} />{" "}
            <span>{user?.first_name + " " + user?.last_name}</span>
          </div>
          <div className="my-2">
            <button
              className="btn btn-outline-info  mx-2"
              onClick={() => navigate("/shop/myaccount")}
            >
              My Account
            </button>
            <button
              className="btn btn-outline-danger mx-2"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        </div>
      )}
      {!user && (
        <div className="my-2">
          <h5 className="display-5">
            <FontAwesomeIcon icon={faUser} />
          </h5>
          <h6>Login in with Phone number</h6>
          <button
            className="btn btn-outline-success mx-2"
            onClick={() => navigate("/shop/myaccount/login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
