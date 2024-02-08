import {
  faPhone,
  faShield,
  faStopwatch,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./promotion.css";
import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";

export const Announcement = () => {
  return (
    <div className="d-none d-lg-block announcement-container text-light container-fluid py-1 ">
      <div className="marquee px-2 py-1 my-0  ">
        <span className=" mx-3 ">
          <FontAwesomeIcon icon={faShield} /> Secure Payment
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faPhone} /> 24/7 Support
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faStopwatch} />
          Speed Delivery
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faTruckFast} /> On time Delivery
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faMessage} /> Top notch Support
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faHeart} /> 100% Satisfaction Guarentee !
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faShield} /> Secure Payment
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faTruck} /> Free Delivery
        </span>
        <span className=" mx-3 ">
          <FontAwesomeIcon icon={faShield} /> Secure Payment
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faPhone} /> 24/7 Support
        </span>
        <span className=" mx-3 ">
          <FontAwesomeIcon icon={faShield} /> Secure Payment
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faPhone} /> 24/7 Support
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faStopwatch} />
          Speed Delivery
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faTruckFast} /> On time Delivery
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faMessage} /> Top notch Support
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faHeart} /> 100% Satisfaction Guarentee !
        </span>
        <span className=" mx-3">
          <FontAwesomeIcon icon={faTruck} /> Free Delivery
        </span>
      </div>
    </div>
  );
};
