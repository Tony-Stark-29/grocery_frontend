import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useRef, useState } from "react";
import loading_spinner_black from "../../resources/tube-spinner-black.svg";

export const OtpVerify = ({ length = 4, handleOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(" "));
  const [showResend, setShowResend] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isLoadindg, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  console.log(otp);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    if (timer === 0) setShowResend(true);
    const timeInterval =
      timer > 0 && setInterval(() => setTimer(timer - 1), 1000);

    return () => clearInterval(timeInterval);
  }, [timer]);
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);

    setOtp(newOtp);
    console.log(otp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    if (e === "Backspace") {
      console.log("delete");
    }
  };
  const handleClick = (index) => {
    console.log(index);
  };
  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };
  console.log(inputRefs);
  console.log(timer);

  const otpVerify = (e) => {
    e.preventDefault();
    setIsLoading(false);
    window.confirmationResult
      .confirm(otp.join(""))
      .then(async (res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((error)=>{
        console.log(error);
      });
  };

  return (
    <form className="form-group py-3 h-100 my-3 my-lg-0 d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <h6 className="fw-bold">Enter Otp sent to this number </h6>
      </div>

      <div className="row px-4">
        {otp.map((value, index) => {
          return (
            <input
              type="text"
              className="col form-control text-center m-1"
              ref={(input) => (inputRefs.current[index] = input)}
              key={index}
              value={value}
              onChange={(e) => handleChange(e, index)}
              onClick={handleClick}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
      </div>
      <div className="w-100 px-3 text-end">
        {!showResend && <small>Resend in {timer} </small>}
        {showResend && <small>Resend</small>}
      </div>
      <div>
        <button className="btn btn-outline-success"
        onClick={otpVerify}
        >
          Verify
          {isLoadindg && (
            <img
              src={loading_spinner_black}
              alt="loading"
              style={{ width: "30px", height: "30px" }}
            />
          )}
        </button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};
