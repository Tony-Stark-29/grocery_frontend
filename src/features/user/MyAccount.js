import React, { useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

export const MyAccount = () => {
  const { dispatch:userContextDispatch,user } = useUserContext();
  const navigate=useNavigate();

  useEffect(() => {

    console.log("MyAccount - ",user);

  }, [user]);

  const handleLogOut=()=>{

    userContextDispatch({type:"LOGOUT"});
    navigate("/");



  }

  return <section>
    <div className="row m-auto justify-content-end">
      <button className="btn btn-outline-danger w-auto" onClick={handleLogOut}>Logout</button>
    </div>
  </section>;
};
