import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import DoctorIndex from "./pages/Doctor/Index";
import CreateDoctor from "./pages/Doctor/Create";
import ClinicIndex from "./pages/Clinic/Index";
import CreateClinic from "./pages/Clinic/Create";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Auth/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctor" element={<DoctorIndex />} />
          <Route path="/create-doctor" element={<CreateDoctor />} />
          <Route path="/clinic" element={<ClinicIndex />} />
          <Route path="/create-clinic" element={<CreateClinic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
