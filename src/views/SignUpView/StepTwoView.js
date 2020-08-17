import React, { useState } from "react";

import ErrorMessage from "../../components/ErrorMessage";

const StepTwoView = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (email.length === 0 || password.length === 0 || confirmPassword === 0) {
      setError("Please fill all the fields.");
    } else if (password !== confirmPassword) {
      setError(`Password doesn't match`);
    } else {
      setError("");
      props.updateUser(email, password, confirmPassword);
      props.setCurrentStep(props.currentStep + 1);
    }
  };

  const goBack = (event) => {
    props.setCurrentStep(props.currentStep - 1);
  };

  return (
    <React.Fragment>
      <ErrorMessage errorMessage={error} />

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 mt-6">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Set Password
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 mt-6">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Confirm Password
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full text-white font-bold py-3 px-4 mb-5 mt-6 focus:outline-none"
        type="button"
        style={{
          background:
            "linear-gradient(164.58deg, #027AFF -91.84%, #2BDFF3 213.97%)",
        }}
        onClick={(e) => handleClick(e)}
      >
        Next
      </button>
      <div
        className="w-full text-center mb-5 "
        style={{ color: "#027AFF", cursor: "pointer" }}
      >
        <span className="text-center" onClick={(e) => goBack(e)}>
          Back
        </span>
      </div>
      {/* <button
        className="w-full font-bold py-3 px-4 mb-5 focus:outline-none"
        type="button"
        style={{
          border: "2px solid #027AFF",
          color: "#027AFF",
        }}
        onClick={(e) => goBack(e)}
      >
        Back
      </button> */}
    </React.Fragment>
  );
};

export default StepTwoView;
