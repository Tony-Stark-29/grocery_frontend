import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./shop.css";

export const ProductQuantityBtn = ({ quantity, setQuantity }) => {
  console.log(setQuantity);
  const handleIncrement = () => {
    console.log("inc");
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    console.log("dec");
    setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="  d-flex flex-row justify-contenet-center border border-success align-items-center rounded-5">
      <button
        className="w-auto p-0 btn-outline-primary border-0 rounded-start-5"
        onClick={handleDecrement}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <div className="text-center px-1">{quantity}</div>
      <button
        className="w-auto p-0 btn-outline-primary border-0 rounded-end-5"
        onClick={handleIncrement}
      >
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </div>
  );
};
