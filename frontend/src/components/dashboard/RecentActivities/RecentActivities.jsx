import "./RecentActivities.css";

function RecentActivities() {

  const activities = [
    {
      id: 1,
      text: "Engineer uploaded road progress photos",
      time: "2 mins ago",
      type: "update",
    },
    {
      id: 2,
      text: "₹2 Cr released for Canal Project (Buxar)",
      time: "15 mins ago",
      type: "fund",
    },
    {
      id: 3,
      text: "NH-27 Highway project marked DELAYED",
      time: "1 hour ago",
      type: "alert",
    },
    {
      id: 4,
      text: "Citizen complaint submitted for water pipeline",
      time: "3 hours ago",
      type: "complaint",
    },
    {
      id: 5,
      text: "Project approved by District Officer",
      time: "5 hours ago",
      type: "approval",
    },
  ];

  return (
    <div className="activity-container">

      <h2>Recent Activities</h2>

      <ul className="activity-list">

        {activities.map((item) => (
          <li key={item.id} className={`activity-item ${item.type}`}>

            <div className="activity-text">
              {item.text}
            </div>

            <div className="activity-time">
              {item.time}
            </div>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default RecentActivities;