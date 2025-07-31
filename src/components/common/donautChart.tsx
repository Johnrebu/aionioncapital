"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Category A", value: 20 },
  { name: "Category B", value: 80 },
];

const COLORS = ["#5568fe", "#b3c2ff"];

const DonutChart = () => {
  return (
    <div className="flex justify-center items-center">
      <PieChart width={300} height={300}>
        <Legend
          layout="horizontal"
          iconType="rect"
          verticalAlign="top"
          align="center"
        />

        <Tooltip />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          startAngle={90}
          endAngle={-270}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default DonutChart;
