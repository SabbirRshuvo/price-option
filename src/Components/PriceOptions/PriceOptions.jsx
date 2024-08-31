import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym during staffed hours",
        "Use of all cardio and weight equipment",
        "One complimentary fitness assessment",
        "Free Wi-Fi",
        "Access to on-demand workout videos",
        "Discounted rate for additional personal training sessions",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "24/7 gym access",
        "Access to all group fitness classes",
        "Use of all cardio and weight equipment",
        "Two complimentary personal training sessions",
        "Access to locker room and shower facilities",
        "Free fitness workshops",
        "Premium fitness workshops",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 69.99,
      features: [
        "24/7 gym access",
        "Unlimited group fitness classes",
        "Use of all cardio and weight equipment",
        "Monthly personal training session",
        "Access to locker room, sauna, and shower facilities",
        "Access to exclusive member events",
        "Free towel service",
      ],
    },
    {
      id: 4,
      name: "VIP Membership",
      price: 99.99,
      features: [
        "24/7 gym access",
        "Unlimited group fitness classes",
        "Use of all cardio and weight equipment",
        "Weekly personal training sessions",
        "Access to locker room, sauna, steam room, and shower facilities",
        "Access to locker room, sauna, steam room, and shower facilities",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl ">Best Prices</h2>
      <div className="grid grid-cols-3 gap-4 m-5 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
