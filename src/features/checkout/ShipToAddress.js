import React, { useState } from "react";
import { AddressForm } from "../myAccount/AddressForm";
import { useUserContext } from "../../hooks/useUserContext";

export const ShipToAddress = () => {
  const [showShippingAddressForm, setShowShippingAddressForm] = useState(false);
    const {user}=useUserContext();

  return (
    <div className="row m-auto">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          onChange={()=>setShowShippingAddressForm(!showShippingAddressForm)}
        />
        <label class="form-check-label" for="flexCheckChecked">
          Ship to Different Address
        </label>
      </div>
      {showShippingAddressForm && <AddressForm formData={{type:"Shipping Address",data:user?.shipping_address||null}} />}
    </div>
  );
};
