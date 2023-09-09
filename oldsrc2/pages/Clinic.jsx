import React from "react";
import Layout from "../components/Layout";
import Index from "../components/Clinic/Index";
import Create from "../components/Clinic/Create";

const Clinic = ({ entityType }) => {
  return (
    <>
      <Layout>
        <div className="content">
          {entityType == "clinic" && <Index />}
          {entityType == "create" && <Create />}
        </div>
      </Layout>
    </>
  );
};

export default Clinic;
