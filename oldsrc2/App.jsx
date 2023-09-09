import { useState } from "react";

import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/font-awesome.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/select2.min.css";
import "../public/assets/css/bootstrap-datetimepicker.min.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Doctor from "./pages/Doctor";
import Clinic from "./pages/Clinic";
import Patient from "./pages/Patient";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctor" element={<Doctor entityType="doctor" />} />
          <Route
            path="/doctor/create"
            element={<Doctor entityType="create" />}
          />
          <Route
            path="/doctor/edit/:Id"
            element={<Doctor entityType="edit" />}
          />
          <Route path="/clinic" element={<Clinic entityType="clinic" />} />
          <Route
            path="/clinic/create"
            element={<Clinic entityType="create" />}
          />
          <Route path="/patient" element={<Patient entityType="patient" />} />
          <Route
            path="/patient/create"
            element={<Patient entityType="create" />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
