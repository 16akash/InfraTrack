import "./FundingChart.css";

import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,

} from "recharts";

function FundingChart() {

  const data = [

    {
      name: "NH-27 Highway",
      sanctioned: 120,
      used: 85,
      remaining: 35,
    },

    {
      name: "Canal Project",
      sanctioned: 50,
      used: 30,
      remaining: 20,
    },

    {
      name: "Water Pipeline",
      sanctioned: 20,
      used: 12,
      remaining: 8,
    },

  ];

  return (

    <div className="funding-container">

      <h2>Funding Analytics</h2>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey="sanctioned" fill="#3b82f6" />

          <Bar dataKey="used" fill="#22c55e" />

          <Bar dataKey="remaining" fill="#ef4444" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default FundingChart;