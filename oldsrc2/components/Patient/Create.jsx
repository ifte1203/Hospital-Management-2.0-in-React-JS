import React from "react";
import Form from "../Common/Form";

const Create = () => {
  const fields = [
    {
      name: "patient_name",
      label: "patient Name",
      type: "text",
      col: "col-lg-12",
    },
    {
      name: "patient_age",
      label: "Date of Birth",
      type: "date",
      col: "col-lg-6",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      col: "col-lg-6",
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
      col: "col-lg-6",
    },
    {
      name: "Address",
      label: "Address",
      type: "textarea",
      col: "col-lg-12",
    },

    // Add more fields with different input types
  ];

  const handleFormSubmit = (data) => {
    // Handle form submission for the first component
    console.log("Form data:", data);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="page-title">Add Patient</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <Form
            fields={fields}
            title="Add Patient"
            onSubmit={handleFormSubmit}
            btnText={"Create Patient"}
          />
        </div>
      </div>
    </>
  );
};

export default Create;
