import React from "react";
import logo from "../resources/logo-hamper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <footer className="container-flex text-light ">
      <div className="container">
        <div className="row m-auto align-items-center">
          <div className="col-12 col-md-12 col-lg-6 d-flex flex-column">
            <div>
              Tasty
              <img src={logo} alt="" />
              Daily
            </div>
            <div>
              <p className="text-justify" style={{ textAlign: "justify" }}>
                We're Tasty Daily Shop, an innovative team of food engineers.
                Our unique model minimizes fresh food handling by up to 85%,
                sourcing locally and dispatching within hours through cold chain
                logistics in eco-friendly containers.
              </p>
              <p>© 2023 Tasty Daily Grocery WordPress Theme</p>
            </div>
            <div></div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <nav className="navbar justify-content-center ">
              <ul className="navbar-nav m-2">
                <li className="nav-items m-2">Contacts</li>
                <li className="nav-items m-2">Products</li>
                <li className="nav-items m-2">Blog</li>
                <li className="nav-items m-2">Services</li>
              </ul>
              <ul className="navbar-nav m-2">
                <li className="nav-items m-2">Contacts</li>
                <li className="nav-items m-2">Products</li>
                <li className="nav-items m-2">Blog</li>
                <li className="nav-items m-2">Services</li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-row  align-items-center justify-content-evenly fs-3">
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
