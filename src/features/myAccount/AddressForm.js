import React, { useEffect, useState } from "react";
import { State, City } from "country-state-city";
import { useUserContext } from "../../hooks/useUserContext";
import { useApi } from "../../hooks/useApi";

export const AddressForm = ({ setShow, formData }) => {
  const { user } = useUserContext();

  const [statesInIndia, setStatesInindia] = useState(
    State.getStatesOfCountry("IN")
  );
  const [citiesInState, setCitiesInState] = useState([]);
  const { isLoading, error, requestApi } = useApi();

  //form data start
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetDetails, setStreetDetails] = useState("");
  const [areaDetails, setAreaDetails] = useState("");
  const [countrySelected, setCountrySelected] = useState("India");
  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(formData.data);
    if (formData?.data) {
      const {
        name,
        street,
        area,
        city,
        state,
        country,
        pin_code,
        phone_number,
        email,
      } = formData?.data;
      setFirstName(name.split(" ").slice(0, 1));
      setLastName(name.split(" ").slice(-1));
      setStreetDetails(street);
      setAreaDetails(area);
      setCitySelected(city);
      setStateSelected(state);
      setCountrySelected(country);
      setPhoneNumber(phone_number);
      setPinCode(pin_code);
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    const stateCode = statesInIndia.find(
      (state) => state.name === stateSelected
    )?.isoCode;

    setCitiesInState(City.getCitiesOfState("IN", stateCode));
  }, [stateSelected]);

  const handleStateSelection = (e) => {
    const state = statesInIndia.find((state) => state.name === e.target.value);
    setStateSelected(state.name);
    setCitiesInState(City.getCitiesOfState("IN", state.isoCode));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const data = {
      name: firstName + " " + lastName,
      phone_number: phoneNumber,
      email: email,
      street: streetDetails,
      area: areaDetails,
      city: citySelected,
      state: stateSelected,
      pin_code: pinCode,
      country: countrySelected,
    };
    if (formData?.type === "Billing Address") {
      requestApi("/user/user-details", "PUT", { billing_address: data }).then((data)=>{
        if(!data.error)
        {
          setShow(false)
        }
      })
    }
    if (formData?.type === "Shipping Address") {
      requestApi("/user/user-details", "PUT", { shipping_address: data }).then((data)=>{
        
        if(!data.error)
        {
          setShow(false)
        }
      })
    }
  };

  return (
    <form className="row d-flex " action="">
      <div className="row">
        <h3>{formData?.type}</h3>
      </div>
      <div className="col-12 col-lg-6">
        <div className="form-group">
          <label htmlFor="first-name" className="fw-lighter my-2">
            <small>First Name *</small>
          </label>
          <input
            type="text"
            id="first-name"
            className="form-control"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name" className="fw-lighter my-2">
            <small>Last Name *</small>
          </label>
          <input
            type="text"
            id="last-name"
            className="form-control"
            placeholder="Last Name"
            required
            tabIndex={2}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company-name" className="fw-lighter my-2">
            <small>Company Name (optional)</small>
          </label>
          <input
            type="text"
            id="company-name"
            className="form-control"
            placeholder="Company Name "
            tabIndex={3}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <fieldset disabled>
            <label htmlFor="country" className="fw-lighter my-2">
              <small>Country \ Region *</small>
            </label>
            <input
              type="text"
              id="company-name"
              value={countrySelected}
              className="form-control"
            />
          </fieldset>
        </div>
        <div className="form-group">
          <label htmlFor="street" className="fw-lighter my-2">
            <small>Street Details*</small>
          </label>
          <input
            type="text"
            id="street"
            className="form-control my-2"
            placeholder="Building Number"
            required
            tabIndex={4}
            value={streetDetails}
            onChange={(e) => setStreetDetails(e.target.value)}
          />
          <input
            type="text"
            id="company-name"
            className="form-control my-2"
            placeholder="Area"
            value={areaDetails}
            onChange={(e) => setAreaDetails(e.target.value)}
          />
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="form-group">
          <label htmlFor="state" className="fw-lighter my-2">
            <small>State *</small>
          </label>
          <select
            name="state"
            required
            className="form-control"
            value={stateSelected}
            onChange={handleStateSelection}
            tabIndex={5}
          >
            {statesInIndia.map((state) => (
              <option key={state?.isoCode} value={state?.name}>
                {state?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city" className="fw-lighter my-2">
            <small>City *</small>
          </label>
          <select
            name="city"
            id=""
            className="form-control"
            required
            value={citySelected}
            onChange={(e) => setCitySelected(e.target.value)}
            tabIndex={6}
          >
            {citiesInState.length > 0 &&
              citiesInState.map((state, index) => (
                <option key={index} value={state?.name}>
                  {state?.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="pin-code" className="fw-lighter my-2">
            <small>Pin-Code *</small>
          </label>
          <input
            type="number"
            name="pin-code"
            max={6}
            required
            tabIndex={7}
            className="form-control"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact" className="fw-lighter my-2">
            <small>Phone Number</small>
          </label>
          <input
            type="tel"
            name="contact"
            className="form-control"
            tabIndex={8}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="fw-lighter my-2">
            <small>Email</small>
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            tabIndex={9}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row m-auto my-4 ">
          <button
            tabIndex={10}
            className="btn btn-outline-success w-auto m-auto rounded-5 px-4 py-1"
            type="submit"
            onClick={handleSubmitForm}
            disabled={isLoading}
          >
            Save
          </button>
        </div>
        {error && (
          <div className="row text-center text-warning fw-lighter">{error}</div>
        )}
      </div>
    </form>
  );
};
