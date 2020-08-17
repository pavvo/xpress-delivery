import React from "react";

const BackButton = (props) => {
  return (
    <div
      className="w-full text-center mb-5 "
      style={{ color: "#027AFF", cursor: "pointer" }}
    >
      <span className="text-center" onClick={(e) => props.goBack(e)}>
        Back
      </span>
    </div>
  );
};

export default BackButton;
