import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "signup" ? (
            <input type="text" placeholder="Your name" required />
          ) : (
            ""
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{currState === "signup" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By checking, I agree the terms of use and privacy policy</p>
        </div>
        {currState === "signup" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("login")}>Login</span>
          </p>
        ) : (
          <p>
            Create a new account!{" "}
            <span onClick={() => setCurrState("signup")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
