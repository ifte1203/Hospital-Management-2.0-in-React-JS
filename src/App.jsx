import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Doctor/Index";
import CreateDoctor from "./pages/Doctor/Create";
import CreateClinic from "./pages/Clinic/Create";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctor" element={<Index />} />
          <Route path="/create-doctor" element={<CreateDoctor />} />
          <Route path="/clinic" element={<CreateClinic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
