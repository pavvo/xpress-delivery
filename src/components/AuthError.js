import React from "react";

const AuthError = (props) => {
  return props.authError.length > 0 ? (
    <div className="flex items-center justify-start my-4">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">{props.authError}</span>
      </div>
    </div>
  ) : null;
};

export default AuthError;
