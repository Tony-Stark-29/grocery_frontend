import React, { useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

export const MyAccount = () => {
  const { dispatch: userContextDispatch, user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("MyAccount - ", user);
  }, [user]);

  const handleLogOut = () => {
    userContextDispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <section className="row m-auto p-0 border rounded-2">
      <div className="col-12 col-lg-3  p-4 border-end">
        <div className="user-greet d-flex flex-column flex-lg-row m-auto align-items-center justify-content-center">
          <div
            className="  rounded-circle border p-3"
            style={{ height: "70px", width: "70px" }}
          >
            <FontAwesomeIcon
              className="display-6 w-auto m-auto"
              icon={faUser}
            />
          </div>
          <div className="w-75 text-center">
            <span className="fw-bolder">Hello ,{user?.display_name}</span>
          </div>
        </div>
        <nav className="navbar ">
          <ul className="navbar-nav d-flex flex-column text-center text-lg-start  w-100">
            <li className="nav-item">
              <Link to={"dashboard"} className="nav-link">
                {" "}
                Dashboard{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"orders"} className="nav-link">
                {" "}
                Orders{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"addresses"} className="nav-link">
                {" "}
                Addresses{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"account-details"} className="nav-link">
                {" "}
                Account Details{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLogOut}>
                <FontAwesomeIcon className="text-success" icon={faRightFromBracket} />{" "}
                <span>Logout</span>{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-12 col-lg-9 p-4 align-self-start">
        <Outlet />
      </div>
    </section>
  );
};
