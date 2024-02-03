import React, { useEffect, useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import toast, { Toaster } from "react-hot-toast";
import { useApi } from "../../hooks/useApi";

export const AccountDetails = () => {
  const { user } = useUserContext();
  const { error, isLoading, requestApi }=useApi();

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(()=>{

    setFirstName(user?.first_name||"");
    setlastName(user?.last_name||"");
    setDisplayName(user?.display_name||"");
    setPhoneNumber(user?.phone_number||"");
    setEmail(user?.email||"");

  },[user])

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToUpdate={first_name:firstName,last_name:lastName,display_name:displayName,phone_number:phoneNumber,email:email};
    const res=requestApi("/user/user-details","PUT",dataToUpdate);

    if(error)
    {
      toast.error(error);
    }

    if(res)
    {
      toast.success("Updated")
    }


  };

  return (
    <div className="row">
      <form className="col-12 col-lg-6">
        <div className="form-group my-2">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            className="form-control"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="display-name">Display Name</label>
          <input
            type="text"
            name="display-name"
            className="form-control"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="form-group my-2">
          <fieldset disabled>
            <label htmlFor="contact">Phone Number</label>
            <input
              type="text"
              name="contact"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row m-auto">
          <button
            className="btn btn-outline-success rounded-5 px-4 w-auto m-auto "
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Save
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};
