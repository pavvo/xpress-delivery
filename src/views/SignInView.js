import React, { useContext, useState } from "react";
import { AuthContext } from "../data/AuthContext";

import logoForm from "../assets/img/logo_form.png";

import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";

const SignInView = () => {
  const { signIn, isAuth, authError } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return isAuth ? (
    (window.location.href = "/")
  ) : (
    <div className="w-fUll flex flex-col items-center my-auto justify-center h-screen welcomeView pt-16">
      <div style={{ width: "420px" }}>
        <form
          className="bg-white shadow-md rounded px-16 pt-8 pb-4 items-center"
          onSubmit={handleSubmit}
        >
          <img
            className="pb-12 mx-16 w-40 items-center"
            alt="logo"
            src={logoForm}
          />
          <span className="text-2xl font-bold pb-10">Login</span>

          <ErrorMessage errorMessage={authError} />

          <InputField
            id={"email"}
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            value={email}
            onChange={setEmail}
            label={"Email"}
          />
          <InputField
            id={"password"}
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            value={password}
            onChange={setPassword}
            label={"Password"}
          />
          <div className="flex items-center justify-end">
            <a
              className="align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800 mb-10"
              href="/recover"
              style={{
                color: "#0788FD",
              }}
            >
              Forgot Password?
            </a>
          </div>

          <button className="button-classic" type="submit">
            Sign In
          </button>

          <div className="flex items-center justify-center">
            <a
              href="/signup"
              className="align-baseline text-sm text-blue-500 hover:text-blue-800 mb-2"
              style={{
                color: "grey",
              }}
            >
              Don't have an account?
              <span
                style={{
                  color: "#0788FD",
                }}
              >
                <span> </span>
                Sign up
              </span>
            </a>
          </div>
        </form>
        <p className="text-center text-xs pt-20" style={{ color: "white" }}>
          &copy;VERSION 1.0.1.0 BETA
        </p>
      </div>
    </div>
  );
};

export default SignInView;
