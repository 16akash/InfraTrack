import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Complaints from "./pages/Complaints/Complaints";

import ProtectedRoute
from "./routes/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />
       <Route
  path="/complaints"
  element={<Complaints />}
/>

        <Route
          path="/dashboard"

          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;