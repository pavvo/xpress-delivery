import React, { useContext, useState } from "react";
import { AuthContext } from "../data/AuthContext";

import ErrorMessage from "../components/ErrorMessage";

import logoForm from "../assets/img/logo_form.png";

const RecoverView = () => {
  const { recoverPassword, authError } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    recoverPassword(email);
    setEmail("");
  };

  return (
    <div className="w-fUll flex flex-col items-center my-auto justify-center h-screen welcomeView pt-16">
      <div style={{ width: "420px" }}>
        <form
          className="bg-white shadow-md rounded px-16 pt-8 pb-4 items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={logoForm}
            className="pb-12 mx-16 w-40 items-center"
            alt="logo"
          />
          <span className="text-2xl font-bold ">Forgot Password</span>

          <br></br>
          <br></br>
          <span className="text-md">
            Please enter your registered email and we will send you a link to
            reset your password.
          </span>
          <div className="p-1"></div>
          <ErrorMessage errorMessage={authError} />
          <div className="mb-12 mt-6">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            className="w-full text-white font-bold py-3 px-4 mb-10 focus:outline-none"
            type="submit"
            style={{
              background:
                "linear-gradient(164.58deg, #027AFF -91.84%, #2BDFF3 213.97%)",
            }}
          >
            Send
          </button>
        </form>
        <p className="text-center text-xs pt-20" style={{ color: "white" }}>
          &copy;VERSION 1.0.1.0 BETA
        </p>
      </div>
    </div>
  );
};

export default RecoverView;
