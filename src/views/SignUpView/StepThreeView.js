import React, { useState } from "react";

import ErrorMessage from "../../components/ErrorMessage";
import InputField from "../../components/InputField";
import BackButton from "../../components/BackButton";
import AuthButton from "../../components/AuthButton";

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
      <ErrorMessage errorMessage={error} />

      <InputField
        id={"businessName"}
        type={"text"}
        placeholder={"Business name"}
        name={"businessName"}
        value={businessName}
        onChange={setBusinessName}
        label={"Business Name"}
      />
      <InputField
        id={"businessAddress"}
        type={"text"}
        placeholder={"Business Address"}
        name={"businessAddress"}
        value={businessAddress}
        onChange={setBusinessAddress}
        label={"Business Address"}
      />
      <InputField
        id={"businessPhoneNumber"}
        type={"text"}
        placeholder={"Business phone Number"}
        name={"businessPhoneNumber"}
        value={businessPhoneNumber}
        onChange={setbusinessPhoneNumber}
        label={"Business phone number"}
      />
      <AuthButton handleClick={handleClick} />
      <BackButton goBack={goBack} />
    </React.Fragment>
  );
};

export default StepThreeView;
