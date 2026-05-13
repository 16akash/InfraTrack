import "./AIAlerts.css";

function AIAlerts() {

  const projects = [

    {
      name: "NH-27 Highway",
      progress: 40,
      budgetUsed: 90,
      status: "Delayed",
    },

    {
      name: "Canal Project",
      progress: 70,
      budgetUsed: 60,
      status: "Active",
    },

    {
      name: "Water Pipeline",
      progress: 20,
      budgetUsed: 30,
      status: "Active",
    },

  ];



  const generateAlert = (project) => {

    if (project.status === "Delayed") {
      return "⚠️ PROJECT DELAYED - Immediate attention required";
    }

    if (project.budgetUsed > 85) {
      return "💰 HIGH BUDGET USAGE - Risk of overspending";
    }

    if (project.progress < 30) {
      return "📉 LOW PROGRESS - Project lagging behind schedule";
    }

    return "🟢 NORMAL";
  };



  return (

    <div className="alert-container">

      <h2>AI Risk Alerts</h2>



      {projects.map((p, index) => (

        <div key={index} className="alert-card">

          <h3>{p.name}</h3>

          <p>
            Progress: {p.progress}%
          </p>

          <p>
            Budget Used: {p.budgetUsed}%
          </p>

          <p className="alert-text">

            {generateAlert(p)}

          </p>

        </div>

      ))}

    </div>
  );
}

export default AIAlerts;