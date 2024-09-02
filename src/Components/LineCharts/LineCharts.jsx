import React from "react";
import { LineChart as LChart, Line, XAxis } from "recharts";

const LineCharts = () => {
  const students = [
    { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 88 },
    { id: 2, name: "Bob", math: 78, physics: 82, chemistry: 79 },
    { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 94 },
    { id: 4, name: "David", math: 80, physics: 76, chemistry: 85 },
    { id: 5, name: "Eva", math: 88, physics: 84, chemistry: 90 },
    { id: 6, name: "Frank", math: 75, physics: 80, chemistry: 77 },
    { id: 7, name: "Grace", math: 90, physics: 87, chemistry: 91 },
    { id: 8, name: "Hannah", math: 82, physics: 79, chemistry: 83 },
    { id: 9, name: "Ian", math: 87, physics: 85, chemistry: 88 },
    { id: 10, name: "Jack", math: 79, physics: 81, chemistry: 80 },
  ];

  return (
    <div>
      <LChart width={400} height={400} data={students}>
        <Line dataKey="math" />
        <Line dataKey="physics" />
        <Line dataKey="chemistry" />
        <XAxis />
      </LChart>
    </div>
  );
};

export default LineCharts;
