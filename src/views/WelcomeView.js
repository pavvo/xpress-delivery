import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../data/AuthContext";

import logo from "../assets/img/Logo.png";
import logoText from "../assets/img/logo_text.png";

const WelcomeView = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return isAuth ? (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <React.Fragment>
      <div
        className="w-fUll flex flex-col items-center my-auto justify-center h-screen pt-16"
        style={{
          background:
            "linear-gradient(0deg, #027aff 0%, #2bdff3 100%, rgba(236, 236, 236, 0.0001)",
        }}
      >
        <img src={logo} alt="logo" className="w-16 mb-8" />
        <img src={logoText} alt="logo" className="w-36" />
        <span className="text-xl my-5 text-white">
          Business. Done Smoothly.
        </span>
        <Link to="/signin">
          <button
            className="my-8 py-3 font-semibold"
            style={{
              backgroundColor: "white",
              boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.15)",
              color: "#0786FE",
              minWidth: "350px",
            }}
          >
            Sign In
          </button>
        </Link>

        <Link to="/signup">
          <button
            className="py-3 font-semibold"
            style={{
              backgroundColor: "transparent",
              color: "white",
              minWidth: "350px",
              border: "1px solid white",
            }}
          >
            Sign Up
          </button>
        </Link>

        <div className="mt-40">
          <span
            style={{
              color: "white",
            }}
          >
            VERSION 1.0.1.0 BETA
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WelcomeView;
