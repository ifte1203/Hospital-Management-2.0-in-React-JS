import { useState } from "react";

import "./App.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/font-awesome.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/select2.min.css";
import "../public/assets/css/bootstrap-datetimepicker.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import DoctorIndex from "./pages/Doctor/Index";
import CreateDoctor from "./pages/Doctor/Create";
import EditDoctor from "./pages/Doctor/Edit";
import ClinicIndex from "./pages/Clinic/Index";
import ShowClinic from "./pages/Clinic/Show";
import CreateClinic from "./pages/Clinic/Create";
import EditClinic from "./pages/Clinic/Edit";
import Entitypage from "./pages/Entitypage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/user/Profile";
import EditProfile from "./pages/user/EditProfile";

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
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/doctor" element={<DoctorIndex />} />
          <Route path="/create-doctor" element={<CreateDoctor />} />
          <Route path="/edit-doctor/:id" element={<EditDoctor />} />
          <Route path="/clinic" element={<ClinicIndex />} />
          <Route path="/clinic/show/:id" element={<ShowClinic />} />
          <Route path="/create-clinic" element={<CreateClinic />} />
          <Route path="/edit-clinic/:id" element={<EditClinic />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          {/* <Route path="/entity/:entityType" element={<Entitypage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
