import React from "react";
import Layout from "../components/Layout";
import Index from "../components/Doctor/Index";
import Create from "../components/Doctor/Create";
import Edit from "../components/Doctor/Edit";

const Doctor = ({ entityType }) => {
  return (
    <Layout>
      <div className="content">
        {entityType == "doctor" && <Index />}
        {entityType == "create" && <Create />}
        {entityType == "edit" && <Edit />}
      </div>
    </Layout>
  );
};

export default Doctor;
