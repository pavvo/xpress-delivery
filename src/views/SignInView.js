import React, { useContext, useState } from "react";
import { AuthContext } from "../data/AuthContext";

import logoForm from "../assets/img/logo_form.png";

import AuthError from "../components/AuthError";

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

          <AuthError authError={authError} />

          <div className="mb-4 mt-6">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*******"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
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

          <button
            className="w-full text-white font-bold py-3 px-4 mb-10 focus:outline-none"
            type="submit"
            style={{
              background:
                "linear-gradient(164.58deg, #027AFF -91.84%, #2BDFF3 213.97%)",
            }}
          >
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
