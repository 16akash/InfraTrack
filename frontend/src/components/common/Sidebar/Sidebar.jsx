import "./Sidebar.css";

import {
  Link,
} from "react-router-dom";

function Sidebar() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const role = user?.role;

  return (

    <div className="sidebar">

      <h2 className="logo">
        InfraTrack
      </h2>


      <ul className="sidebar-menu">

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>



        {/* ADMIN ONLY */}
        {role === "admin" && (
          <>

            <li>
              <Link to="/projects">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/funding">
                Funding
              </Link>
            </li>

            <li>
              <Link to="/analytics">
                Analytics
              </Link>
            </li>

            <li>
              <Link to="/admin">
                Admin Panel
              </Link>
            </li>

          </>
        )}



        {/* ENGINEER */}
        {role === "engineer" && (
          <>

            <li>
              <Link to="/tracking">
                Tracking
              </Link>
            </li>

            <li>
              <Link to="/projects">
                Assigned Projects
              </Link>
            </li>

          </>
        )}



        {/* CITIZEN */}
        {role === "citizen" && (
          <>

            <li>
              <Link to="/citizen-portal">
                Citizen Portal
              </Link>
            </li>

            <li>
              <Link to="/complaints">
                Complaints
              </Link>
            </li>

          </>
        )}

      </ul>

    </div>
  );
}

export default Sidebar;