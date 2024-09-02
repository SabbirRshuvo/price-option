import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
    // .then((res) => {
    //   if (!res.ok) {
    //     throw new Error("res is error");
    //   }
    //   return res.json();
    // })
    // .then((data) => {
    //   setPhones(data.data);
    // });
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone - name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phoneWithFakeData);
      });
  }, []);
  return (
    <div>
      <h2 className="text-2xl bg-green-200 p-2 text-red-500">
        Phones: {phones.length}
      </h2>
      <BarChart width={600} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Phones;
