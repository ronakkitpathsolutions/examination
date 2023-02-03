import React from "react";

const CustomInput = ({ handleChange, ...props }) => {
  return (
    <input
      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      onChange={handleChange}
      {...props}
    />
  );
};

export default CustomInput;
