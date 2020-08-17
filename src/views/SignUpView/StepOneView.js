import React, { useState } from "react";

import ErrorMessage from "../../components/ErrorMessage";

const StepOneView = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (firstName.length === 0 || lastName.length === 0 || phoneNumber === 0) {
      setError("Please fill all the fields.");
    } else {
      setError("");
      props.updateUser(firstName, lastName, phoneNumber);
      props.setCurrentStep(props.currentStep + 1);
    }
  };

  return (
    <React.Fragment>
      <ErrorMessage errorMessage={error} />
      <div className="mb-4 mt-6">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          First Name
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          placeholder="First name"
          name="firstName"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 mt-6">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Last Name
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          placeholder="Last name"
          name="lastName"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 mt-6">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Phone Number
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="phone"
          placeholder="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full text-white font-bold py-3 px-4 mb-10 mt-6 focus:outline-none"
        style={{
          background:
            "linear-gradient(164.58deg, #027AFF -91.84%, #2BDFF3 213.97%)",
        }}
        onClick={(e) => handleClick(e)}
      >
        Next
      </button>
    </React.Fragment>
  );
};

export default StepOneView;
