import Navbar from "../../components/common/Navbar/Navbar";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="dashboard-content">
          <h1>InfraTrack Dashboard</h1>

          <div className="cards">
            <div className="card">Total Projects</div>
            <div className="card">Funds Released</div>
            <div className="card">Ongoing Works</div>
            <div className="card">Corruption Alerts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;