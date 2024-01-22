import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export const Product = () => {
  const { id } = useParams();

  const { error, isLoading, requestApi } = useApi();
  const [product, setProduct] = useState("");

  useEffect(() => {
    requestApi(`/grocery/product/${id}`, "GET", null).then((data) => {
      setProduct(data?.product);
      console.log(data.product);
    });
  }, []);

  const {name,category,description,stock,unit,offer,price,imageUrl,tags}=product;
  return (
    <section className="container-flex m-auto p-0">
      <div className="row m-auto">
        <div className="col-12 col-md-6">
            <img className="img-fluid" src={imageUrl} alt="product preview" />
        </div>
        <div className="col-12 col-md-6">
            <h3>{name}</h3>
        </div>
      </div>

    </section>
  );
};
