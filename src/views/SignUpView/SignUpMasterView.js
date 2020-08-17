import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../data/AuthContext";

import logoForm from "../../assets/img/logo_form.png";
import StepOneView from "./StepOneView";
import StepTwoView from "./StepTwoView";
import StepThreeView from "./StepThreeView";

import ErrorMessage from "../../components/ErrorMessage";

const SignUpMasterView = () => {
  const { signUp, authError } = useContext(AuthContext);

  const [currentStep, setCurrentStep] = useState(1);
  const [user, setUser] = useState({});

  const updateUserStepOne = (firstName, lastName, phoneNumber) => {
    setUser({ ...user, firstName, lastName, phoneNumber });
  };

  const updateUserStepTwo = (email, password, confirmPassword) => {
    setUser({ ...user, email, password, confirmPassword });
  };

  const updateUserStepThree = (
    businessName,
    businessAddress,
    businessPhoneNumber
  ) => {
    setUser({ ...user, businessName, businessAddress, businessPhoneNumber });
  };

  let step = (
    <StepOneView
      updateUser={updateUserStepOne}
      setCurrentStep={setCurrentStep}
      currentStep={currentStep}
    />
  );

  if (currentStep === 2) {
    step = (
      <StepTwoView
        updateUser={updateUserStepTwo}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    );
  } else if (currentStep === 3) {
    step = (
      <StepThreeView
        updateUser={updateUserStepThree}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        signUp={signUp}
        user={user}
      />
    );
  }

  return (
    <div className="w-fUll flex flex-col items-center my-auto justify-center h-screen welcomeView py-16">
      <div style={{ width: "420px" }}>
        <form className="bg-white shadow-md rounded px-16 pt-8 pb-4 items-center">
          <img
            src={logoForm}
            className="pb-12 mx-16 w-40 items-center"
            alt="logo"
          />
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold pb-10">Sign Up</span>
            <span
              className="text-md font-bold pb-10"
              style={{ color: "#0D95FC" }}
            >
              Step {currentStep}/3
            </span>
          </div>
          <ErrorMessage errorMessage={authError} />
          {step}
          <div className="flex items-center justify-center">
            <Link
              to="/signin"
              className="align-baseline text-sm text-blue-500 hover:text-blue-800 mb-2"
              style={{
                color: "grey",
              }}
            >
              Already have an account?
              <span
                style={{
                  color: "#0788FD",
                }}
              >
                <span> </span>
                Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpMasterView;
