import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/tracking">Tracking</Link>
        </li>

        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;