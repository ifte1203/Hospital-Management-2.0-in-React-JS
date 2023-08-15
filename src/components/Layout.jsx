import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <Sidebar />
        <div className="page-wrapper">{children}</div>
      </div>
    </>
  );
};

export default Layout;
