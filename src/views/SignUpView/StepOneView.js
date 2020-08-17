import React, { useState } from "react";

import ErrorMessage from "../../components/ErrorMessage";
import InputField from "../../components/InputField";
import AuthButton from "../../components/AuthButton";

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
      <InputField
        id={"firstName"}
        type={"text"}
        placeholder={"First name"}
        name={"firstName"}
        value={firstName}
        onChange={setfirstName}
        label={"First Name"}
      />
      <InputField
        id={"lastName"}
        type={"text"}
        placeholder={"Last name"}
        name={"lastName"}
        value={lastName}
        onChange={setlastName}
        label={"Last Name"}
      />
      <InputField
        id={"phoneNumber"}
        type={"text"}
        placeholder={"Phone Number"}
        name={"phoneNumber"}
        value={phoneNumber}
        onChange={setphoneNumber}
        label={"Phone number"}
      />
      <AuthButton handleClick={handleClick} />
    </React.Fragment>
  );
};

export default StepOneView;
