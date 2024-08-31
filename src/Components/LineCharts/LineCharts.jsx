import React from "react";
import { LineChart } from "recharts";

const LineCharts = () => {
  const students = [
    { id: 1, name: "Alice", marks: 85 },
    { id: 2, name: "Bob", marks: 78 },
    { id: 3, name: "Charlie", marks: 92 },
    { id: 4, name: "David", marks: 80 },
    { id: 5, name: "Eva", marks: 88 },
    { id: 6, name: "Frank", marks: 75 },
    { id: 7, name: "Grace", marks: 90 },
    { id: 8, name: "Hannah", marks: 82 },
    { id: 9, name: "Ian", marks: 87 },
    { id: 10, name: "Jack", marks: 79 },
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={students}>
        <Line dataKey="marks" />
        <XAxis dataKey="name" />
      </LineChart>
    </div>
  );
};

export default LineCharts;
