import React, { useEffect, useState } from "react";
import { doctorData } from "../../json/data";
import { useParams } from "react-router-dom";
import Form from "../Common/Form";

const Edit = () => {
  const { Id } = useParams();
  const doctorId = parseInt(Id, 10);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchedData = doctorData.find((obj) => obj.id === doctorId);
    console.log("Fetched Data:", fetchedData);
    setData(fetchedData);
  }, [doctorId]); // Use Id as a dependency to refetch data when it changes

  const handleFormSubmit = (data) => {
    // Handle form submission for the first component
    console.log("Form data:", data);
  };

  const fields = [
    {
      name: "doctor_image",
      label: "Doctor Image",
      type: "file",
      col: "col-lg-12",
    },
    {
      name: "doctor_name",
      label: "Doctor Name",
      value: data && data.name,
      type: "text",
      col: "col-lg-12",
    },
    {
      name: "qualification",
      label: "Qualification",
      value: data && data.designation,
      type: "text",
      col: "col-lg-6",
    },
    {
      name: "Address",
      label: "Address",
      value: data && data.location,
      type: "textarea",
      col: "col-lg-12",
    },

    // Add more fields with different input types
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="page-title">Edit Doctor</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          {data && (
            <Form
              fields={fields}
              initialData={data}
              title="Edit Doctor"
              onSubmit={handleFormSubmit}
              btnText={"Update Doctor"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;
