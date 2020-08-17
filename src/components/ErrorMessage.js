import React from "react";

const ErrorMessage = (props) => {
  return props.errorMessage.length > 0 ? (
    <div
      className="flex items-center justify-start my-4"
      style={{
        width: "100%",
      }}
    >
      <div
        className="w-full text-center bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">{props.errorMessage}</span>
      </div>
    </div>
  ) : null;
};

export default ErrorMessage;
