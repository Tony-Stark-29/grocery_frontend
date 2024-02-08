import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import toast, { Toaster } from "react-hot-toast";

export const WhishList = () => {
  const [data, setData] = useState(null);

  const { requestApi } = useApi();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getWhishList = async () => {
      requestApi(`/user/liked-items`, "GET").then((data) => {
        if (data?.error) {
          toast.error(data.error);
        }
        setData(data?.likedItems);
      });
    };

    getWhishList();
  }, []);

  const navigate = useNavigate();

  return (
    <section className="row m-auto py-3 px-2 d-flex flex-row flex-wrap ">
      {!data && (
        <div className="col-12 py-5">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <FontAwesomeIcon
              icon={faHeartBroken}
              className="text-danger display-3"
            />
            <p>No items availabel in WhishList</p>
            <button
              className="btn-outline-primary rounded-5 px-3"
              onClick={() => {
                navigate("/");
              }}
            >
              <span className="mx-2">Go to Home</span>{" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} />{" "}
            </button>
          </div>
        </div>
      )}
      {data &&
        data.map((item) => (
          <div className=" card col-6 col-lg-2 mx-2 p-0 text-center">
            <img
              src={item?.imageUrl}
              className="card-img-top"
              alt="item"
              style={{ minHeight: "100px" }}
            />

            <div className="card-body px-1">
              <h5 class="card-title">{item?.name}</h5>
              <p class="card-text text-justify">
                {item?.description.split(" ").slice(0, 15).join(" ")}
              </p>
              <button className="btn-outline-primary rounded-5 px-4 m-auto">
                Buy
              </button>
            </div>
          </div>
        ))}
      <Toaster />
    </section>
  );
};
