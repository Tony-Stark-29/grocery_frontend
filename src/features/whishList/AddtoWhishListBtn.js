import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./whishList.css";
import { useApi } from "../../hooks/useApi";
import toast, { Toaster } from "react-hot-toast";

export const AddtoWhishListBtn = ({ id }) => {
  const { isLoading, requestApi } = useApi();

  const handleAddtoWhishList = async () => {
    requestApi(`/user/liked-items/${id}`, "POST").then((data) => {
      if (data?.error) {
        toast.error(data.error);
      }

      toast.success("Product Added");
    });
  };

  return (
    <>
      <button
        className=" btn-liked-success rounded-circle"
        onClick={handleAddtoWhishList}
        disabled={isLoading}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <Toaster />
    </>
  );
};
