import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Sidebar />

      <div className="layout-main">
        <Navbar />

        <div className="layout-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;