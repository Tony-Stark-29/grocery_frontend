import React, { useEffect, useRef, useState } from "react";
import "./user.css";
import { OtpVerify } from "./OtpVerify";
import { auth } from "../../config/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import loading_spiner_black from "../../resources/tube-spinner-black.svg";
import toast, { Toaster } from "react-hot-toast";

export const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showEnterOpt, setShowEnterOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputNumberRef = useRef();

  useEffect(() => {
    inputNumberRef.current.focus();
  }, []);

  const isValid = (value) => {
    const regex = /^(\+91)?[6-9]\d{9}$/;
    return regex.test(value);
  };

  function onCapthaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            loginUser();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function loginUser(e) {
    e.preventDefault();

    if (!isValid(phoneNumber)) {
      inputNumberRef.current.focus();
      toast.error("Invalid Phone Number");
      return;
    }

    setIsLoading(true);
    onCapthaVerify();

    const formatedPhoneNumber = "+91" + phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, formatedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setIsLoading(false);
        setShowEnterOtp(true);
        toast.success("Otp sent successfully");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }

  return (
    <>
      {!showEnterOpt && (
        <form className="form-group h-100 my-3 my-lg-0 d-flex flex-column align-items-center justify-content-center">
          <div className="text-center">
            <h5 className="fw-bold">Welcome to Tasty Daily </h5>
          </div>

          <div className="input-group my-3">
            <div className="input-group-prepend d-flex flex-row">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                +91
              </span>
            </div>
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              aria-describedby="Mobile NUmber"
              required
              minLength="0"
              maxLength="10"
              ref={inputNumberRef}
              value={phoneNumber}
              onInput={() => setError("")}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {error && <div className="text-center text-warning">{error}</div>}
          <div>
            <button
              className=" btn-outline-primary rounded-5 my-2 px-4"
              type="submit"
              onClick={loginUser}
            >
              Send Otp
              {isLoading && (
                <img
                  src={loading_spiner_black}
                  alt="loading"
                  style={{ width: "30px", height: "30px" }}
                />
              )}
            </button>
          </div>
        </form>
      )}
      {showEnterOpt && <OtpVerify length={6} />}
      <div id="recaptcha-container"></div>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
};
