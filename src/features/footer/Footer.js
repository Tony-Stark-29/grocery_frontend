import React from "react";
import logo from "../../resources/icons/app-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="primary-footer container-flex  ">
      <div className="container">
        <div className="row m-auto align-items-center">
          <div className="col-12 col-md-6 col-lg-3">
            <nav className="navbar justify-content-center justify-content-lg-start ">
              <ul className="navbar-nav flex-column align-items-center align-items-lg-start m-2">
                <li className="nav-items m-2">About us</li>
                <li className="nav-items m-2">Cotnact us</li>
                <li className="nav-items m-2">Refund Policy</li>
                <li className="nav-items m-2">Shipping Policy</li>
                <li className="nav-items m-2">Privacy Policy</li>
                <li className="nav-items m-2">Terms & Condition</li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-md-12 col-lg-6 d-flex flex-column ">
            <div
              className="footer-heading fs-3 fw-bolder text-center my-3"
            >
              Tasty
              <img src={logo} className="img-fluid " alt="" />
              Daily
            </div>
            <div>
              <p className="text-center">
                We're Tasty Daily Shop, an innovative team of food engineers.
                Our unique model minimizes fresh food handling by up to 85%,
                sourcing locally and dispatching within hours through cold chain
                logistics in eco-friendly containers.
              </p>
              <p className="text-center">© 2023 Tasty Daily Grocery</p>
            </div>
            <div></div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="media-links d-flex flex-row  align-items-center justify-content-evenly fs-3">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
