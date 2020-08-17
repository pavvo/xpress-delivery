import React from "react";

const InputField = (props) => {
  return (
    <div className="mb-4 mt-6">
      <label className="block text-sm font-bold mb-2">{props.label}</label>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        label={props.label}
        required
      />
    </div>
  );
};

export default InputField;
