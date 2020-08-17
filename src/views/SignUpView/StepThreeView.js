import React, { useState } from "react";

const StepThreeView = (props) => {
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessPhoneNumber, setbusinessPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (
      businessName.length === 0 ||
      businessAddress.length === 0 ||
      businessPhoneNumber.length === 0
    ) {
      setError("Please fill all the fields.");
    } else {
      setError("");
      props.updateUser(businessName, businessAddress, businessPhoneNumber);
      props.signUp(props.user.email, props.user.password);
    }
  };

  const goBack = (event) => {
    props.setCurrentStep(props.currentStep - 1);
  };
  return (
    <React.Fragment>
      {error.length > 0 ? (
        <div className="w-full flex items-center justify-start ">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative text-center"
            role="alert"
            style={{
              width: "100%",
            }}
          >
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      ) : null}

      <div className="mb-4 mt-6">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Business Name
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="businessName"
          type="email"
          placeholder="Busines Name"
          name="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 mt-6">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Business Address
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="businessAddress"
          type="address"
          placeholder="Business Address"
          name="businessAddress"
          value={businessAddress}
          onChange={(e) => setBusinessAddress(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 mt-6">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Business Phone number
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="businessPhoneNumber"
          type="tel"
          placeholder="Busines phone number"
          name="businessPhoneNumber"
          value={businessPhoneNumber}
          onChange={(e) => setbusinessPhoneNumber(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full text-white font-bold py-3 px-4 mb-10 mt-6 focus:outline-none"
        type="button"
        style={{
          background:
            "linear-gradient(164.58deg, #027AFF -91.84%, #2BDFF3 213.97%)",
        }}
        onClick={(e) => handleClick(e)}
      >
        Sign up
      </button>
      <div
        className="w-full text-center mb-5 "
        style={{ color: "#027AFF", cursor: "pointer" }}
      >
        <span className="text-center" onClick={(e) => goBack(e)}>
          Back
        </span>
      </div>
    </React.Fragment>
  );
};

export default StepThreeView;
