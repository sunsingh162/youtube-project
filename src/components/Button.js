import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="border border-gray-100 bg-gray-300 rounded-lg py-1.5 px-1 m-2">
        {name}
      </button>
    </div>
  );
};

export default Button;
