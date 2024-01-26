import React from "react";

export const AddToCart = ({ stock, id }) => {
  const handleAddToCart = () => {};

  return (
    <button
      className={`btn  product-cart-icon border fs-5 m-auto ${
        stock === 0 && "disabled"
      }`}
      onClick={() => handleAddToCart(id)}
    >
      <FontAwesomeIcon icon={faCartPlus} />
    </button>
  );
};
