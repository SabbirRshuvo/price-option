import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-lime-200 text-black flex flex-col">
      <h2 className="text-4xl">
        price : {price}
        <span className="text-xl">/mon</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
      <div className="pl-5 flex-grow">
        {features.map((feature, id) => (
          <Feature key={id} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-white p-2 rounded-lg hover:bg-lime-200 ">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
