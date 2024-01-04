import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck,faPhone, faVoicemail, faEnvelope} from "@fortawesome/free-solid-svg-icons";


const icon_style={color:"var(--navbar-text-primary)"};

export const HeaderAdvertisement = () => {
  return (
    <div className="advertisement-container container-flex d-none d-md-block p-1 ">
      <div className="row align-items-center justify-content-between m-auto p-2">
        <div className="col-4">
          <span><FontAwesomeIcon icon={faTruck} style={icon_style}/> Delivery from 10.00 Am to 10.00 Pm</span>
        </div>
        <div className="col-4 d-flex flex-row justify-content-evenly">
          <div><FontAwesomeIcon icon={faPhone} style={icon_style} />  +91 9028479854</div>
          <div><FontAwesomeIcon icon={faEnvelope} style={icon_style} />  tastyDaily@info</div>
        </div>
      </div>
    </div>
  );
};
