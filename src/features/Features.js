import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle,faHandshakeAngle, faCreditCard, faShield } from "@fortawesome/free-solid-svg-icons";

export const Features = () => {
  return (
    <section className="container my-4">
      <div className="row gx-3 align-items-center justify-content-center m-auto">
        <div className="feature-card col-12 col-md-6 col-lg-3 m-4 m-md-0">
          <div className="row m-auto">
            <FontAwesomeIcon icon={faMotorcycle} />
          </div>

          <div className="row card-content m-auto">
            <h5>Free Delivery Across the US!</h5>
            <p>Free delivery for all orders above $100</p>
          </div>
        </div>
        <div className="feature-card col-12 col-md-6 col-lg-3 m-4 m-md-0">
          <div className="row m-auto">
            <FontAwesomeIcon icon={faShield} />
          </div>

          <div className="row card-content m-auto">
            <h5>100% Satisfaction Guarantee!</h5>
            <p>Providing help in case of dissatisfaction</p>
          </div>
        </div>
        <div className="feature-card col-12 col-md-6 col-lg-3 m-4 m-md-0">
          <div className="row m-auto">
            <FontAwesomeIcon icon={faHandshakeAngle} />
          </div>

          <div className="row card-content m-auto">
            <h5>Top-Notch Support</h5>
            <p>Chat with us if you’ve any questions</p>
          </div>
        </div>
        <div className="feature-card col-12 col-md-6 col-lg-3 m-4 m-md-0">
          <div className="row m-auto">
          <FontAwesomeIcon icon={faCreditCard } />
          </div>

          <div className="row card-content m-auto">
            <h5>Secure Payments</h5>
            <p>We use safest payment technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};
