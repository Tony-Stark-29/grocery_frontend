import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const icon_style = { color: "var(--navbar-text-primary)" };

export const HeaderAdvertisement = () => {
  return (
    <div className="advertisement-container container-flex d-none d-md-block p-1 ">
      <div className="row align-items-center justify-content-start m-auto p-2">
        <div className="col-6 col-md-6 text-start">
          <span>
            <FontAwesomeIcon icon={faTruck} style={icon_style} /> Delivery from
            10.00 Am to 10.00 Pm
          </span>
        </div>
        <div className="col-4 col-md-6  text-end">
          <span className="mx-3">
            <FontAwesomeIcon icon={faPhone} style={icon_style} /> +91 9028479854
          </span>
          <span className="mx-3">
            <FontAwesomeIcon icon={faEnvelope} style={icon_style} />{" "}
            tastyDaily@info
          </span>
        </div>
      </div>
    </div>
  );
};
