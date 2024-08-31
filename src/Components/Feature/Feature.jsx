import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({ feature }) => {
  return (
    <div>
      <h2>
        <p className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" /> {feature}
        </p>
      </h2>
    </div>
  );
};

export default Feature;
