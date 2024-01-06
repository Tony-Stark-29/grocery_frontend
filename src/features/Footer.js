import React from "react";
import logo from "../resources/logo-hamper.png";
export const Footer = () => {
  return (
    <footer className="container-flex text-light ">
      <div className="container">
      <div className="row m-auto align-items-center justify-content-start">
        <div className="col-12 col-md-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
          <div>
            Tasty
            <img src={logo} alt="" />
            Daily
          </div>
          <div>
            <p className="text-justify">
              We're Tasty Daily Shop, an innovative team of food engineers. Our
              unique model minimizes fresh food handling by up to 85%, sourcing
              locally and dispatching within hours through cold chain logistics
              in eco-friendly containers.
            </p>
          </div>
          <div></div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <nav className="navbar ">
            <ul className="navbar-nav">
              <li className="nav-items">Contacts</li>
              <li className="nav-items">Products</li>
              <li className="nav-items">Blog</li>
              <li className="nav-items">Services</li>
            </ul>
          </nav>
        </div>
        <div className="col-12 col-md-6 col-lg-3">e</div>
      </div>
      </div>
    </footer>
  );
};
