import React from "react";
import Form from "../../components/Common/Form";
import Layout from "../../components/Layout";

const Create = () => {
  const fields = [
    { name: "clinic_name", label: "Clinic Name", type: "text" },
    { name: "registration_number", label: "Registration Number", type: "text" },
    { name: "clinic_name", label: "Clinic Name", type: "text" },
    { name: "registration_number", label: "Registration Number", type: "text" },
    // Add more fields with different input types
  ];

  const handleFormSubmit = (data) => {
    // Handle form submission for the first component
    console.log("Form data:", data);
  };

  return (
    <Layout>
      <h1>First Component</h1>
      <Form
        fields={fields}
        title="Add Clinic"
        onSubmit={handleFormSubmit}
        btnText={"Update"}
      />
    </Layout>
  );
};

export default Create;
