import React from "react";
import Layout from "../components/Layout";
import Index from "../components/Patient/Index";
import Create from "../components/Patient/Create";

const Patient = ({ entityType }) => {
  return (
    <Layout>
      <div className="content">
        {entityType == "patient" && <Index />}
        {entityType == "create" && <Create />}
      </div>
    </Layout>
  );
};

export default Patient;
