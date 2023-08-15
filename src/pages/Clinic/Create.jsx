import React from "react";
import Form from "../../components/Common/Form";
import Layout from "../../components/Layout";

const Create = () => {
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
      name: "",
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
    // Handle form submission for the first component
    console.log("Form data:", data);
  };

  return (
    <Layout>
      <div className="content">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="page-title">Add Clinic</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Form
              fields={fields}
              title="Add Clinic"
              onSubmit={handleFormSubmit}
              btnText={"Create"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
