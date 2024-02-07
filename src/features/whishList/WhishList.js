import React from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export const WhishList = () => {
  const { user } = useUserContext();
  const navigate=useNavigate();

  return (
    <section className="row m-auto py-3 px-2">
      {!user?.likedItems && (
        <div className="col-12 py-5">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <FontAwesomeIcon
              icon={faHeartBroken}
              className="text-danger display-3"
            />
            <p>No items availabel in WhishList</p>
            <button className="btn-outline-primary rounded-5 px-3" onClick={()=>{navigate("/")}}>
              <span className="mx-2">Go to Home</span>{" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} />{" "}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
