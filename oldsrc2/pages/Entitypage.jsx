import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Form from "../components/Common/Form";
import Patient from "../components/Patient/Index";

const Entitypage = () => {
  const { entityType } = useParams();

  const renderEntity = (entityData) => {
    return (
      <Layout>
        <div className="content">
          <h1>{entityData.name}</h1>
          <p>{entityData.description}</p>
        </div>
      </Layout>
    );
  };
  const renderForm = () => {
    const fields = [
      {
        name: "clinic_name",
        label: "Clinic Name",
        type: "text",
        col: "col-lg-12",
      },
      {
        name: "registration_number",
        label: "Registration Number",
        type: "text",
        col: "col-lg-6",
      },
      {
        name: "clinic_loyalty_number",
        label: "Clinic Loyalty Centre No.",
        type: "text",
        col: "col-lg-6",
      },
      {
        name: "email",
        label: "email",
        type: "email",
        col: "col-lg-6",
      },
      {
        name: "phone",
        label: "phone",
        type: "number",
        col: "col-lg-6",
      },

      // Add more fields with different input types
    ];
    const handleFormSubmit = (data) => {
      console.log("working");
      console.log(data);
    };
    return (
      <Layout>
        <div className="content">
          <h4 className="page-title">Add Clinic</h4>

          <Form
            fields={fields}
            title="Add Clinic"
            onSubmit={handleFormSubmit}
            btnText={"Create"}
          />
        </div>
      </Layout>
    );
  };
  return (
    <>
      {entityType === "doctor" && <Patient />}
      {entityType === "patients" && <Patient />}
      {entityType === "create-patient" &&
        renderEntity({ name: "dcotor 1", description: "hi dcotr" })}
      {entityType === "create-clinic" && renderForm()}
    </>
  );
};

export default Entitypage;
