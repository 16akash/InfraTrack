import "./Navbar.css";

import { useNavigate }
from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );



  const handleLogout = () => {

    // Remove token
    localStorage.removeItem(
      "token"
    );

    // Remove user
    localStorage.removeItem(
      "user"
    );

    // Redirect login
    navigate("/login");
  };



  return (

    <div className="navbar">

      <h2>
        Infrastructure Monitoring System
      </h2>


      <div className="navbar-right">

        <span>
          {user?.name}
        </span>

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;