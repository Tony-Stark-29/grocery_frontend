import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import toast, { Toaster } from "react-hot-toast";
import { EmptyWhishlist } from "./EmptyWhishlist";
import { useNavigate } from "react-router-dom";

export const WhishList = () => {
  const [data, setData] = useState(null);
  const { isLoading, requestApi } = useApi();
  const navigate = useNavigate();

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

  return (
    <section className="row m-auto py-3 px-2 d-flex flex-row flex-wrap ">
      {!data   && <EmptyWhishlist />}
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
              <p class="fs-6 card-text text-justify">
                {item?.description.split(" ").slice(0, 15).join(" ")}
              </p>
              <button
                className="btn-outline-primary rounded-5 px-4 m-auto"
                onClick={() =>
                  navigate(`/shop/${item?.category}/${item?.name}/${item?._id}`)
                }
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      <Toaster />
    </section>
  );
};
