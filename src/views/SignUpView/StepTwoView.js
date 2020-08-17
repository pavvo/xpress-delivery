import React, { useState } from "react";

import ErrorMessage from "../../components/ErrorMessage";
import InputField from "../../components/InputField";
import BackButton from "../../components/BackButton";
import AuthButton from "../../components/AuthButton";

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
      <InputField
        id={"confirmPassword"}
        type={"password"}
        placeholder={"Confirm password"}
        name={"confirmPassword"}
        value={confirmPassword}
        onChange={setconfirmPassword}
        label={"Confirm password"}
      />{" "}
      <AuthButton handleClick={handleClick} />
      <BackButton goBack={goBack} />
    </React.Fragment>
  );
};

export default StepTwoView;
