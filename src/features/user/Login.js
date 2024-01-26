import React from "react";
import { LoginForm } from "./LoginForm";
import "./user.css";

export const Login = () => {
  return (
    <div className="col-10 col-8-md col-lg-6 m-auto border border-3 rounded-3 overflow-hidden">
      <div className="row">
        <div className="col-12 col-md-6 p-0 border-end position-relative">
          <img
            className="img-fluid"
            src="https://firebasestorage.googleapis.com/v0/b/grocery-mern-app.appspot.com/o/grocery_app_uploads%2Fimages%2Ffruit-basket-dark-bg.jpg?alt=media&token=562d9845-89ca-4df5-a78d-ffad23f4c403"
            alt="header"
          />
        </div>
        <div className="col-12 col-md-6 px-3">
          <LoginForm />
        </div>
       
      </div>
    </div>
  );
};
