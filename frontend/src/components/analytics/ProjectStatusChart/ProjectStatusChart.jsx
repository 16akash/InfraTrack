import "./ProjectStatusChart.css";

import {

  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,

} from "recharts";



function ProjectStatusChart() {

  const data = [

    {
      name: "Active",
      value: 86,
    },

    {
      name: "Completed",
      value: 34,
    },

    {
      name: "Delayed",
      value: 12,
    },

  ];



  const COLORS = [
    "#22c55e",
    "#3b82f6",
    "#ef4444",
  ];



  return (

    <div className="chart-container">

      <h2>
        Project Status Analytics
      </h2>


      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={data}

            cx="50%"
            cy="50%"

            outerRadius={120}

            dataKey="value"

            label
          >

            {data.map(
              (entry, index) => (

                <Cell
                  key={`cell-${index}`}

                  fill={
                    COLORS[index]
                  }
                />

              )
            )}

          </Pie>


          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ProjectStatusChart;