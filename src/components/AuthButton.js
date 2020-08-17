import React from "react";

const AuthButton = (props) => {
  return (
    <button className="button-classic" onClick={(e) => props.handleClick(e)}>
      Sign up
    </button>
  );
};

export default AuthButton;
