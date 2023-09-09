// import React from "react";
// import { useParams } from "react-router-dom";
// import Layout from "../components/Layout";
// import Form from "../components/Common/Form";
// const Entitypage = () => {
//   const { entityType } = useParams();
//   const renderEntity = (entityData) => {
//     return (
//       <Layout>
//         <div>
//           <h1>{entityData.name}</h1>
//           <p>{entityData.description}</p>
//         </div>
//       </Layout>
//     );
//   };
//   const renderForm = () => {
//     const fields = [
//       {
//         name: "clinic_name",
//         label: "Clinic Name",
//         type: "text",
//         col: "col-lg-12",
//       },
//       {
//         name: "registration_number",
//         label: "Registration Number",
//         type: "text",
//         col: "col-lg-6",
//       },
//       {
//         name: "clinic_loyalty_number",
//         label: "Clinic Loyalty Centre No.",
//         type: "text",
//         col: "col-lg-6",
//       },
//       {
//         name: "email",
//         label: "email",
//         type: "email",
//         col: "col-lg-6",
//       },
//       {
//         name: "phone",
//         label: "phone",
//         type: "number",
//         col: "col-lg-6",
//       },

//       // Add more fields with different input types
//     ];
//     const handleFormSubmit = (data) => {
//       console.log("working");
//       console.log(data);
//     };
//     return (
//       <Layout>
//         <div className="content">
//           <div className="row">
//             <div className="col-lg-8 offset-lg-2">
//               <h4 className="page-title">Add Clinic</h4>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-8 offset-lg-2">
//               <Form
//                 fields={fields}
//                 title="Add Clinic"
//                 onSubmit={handleFormSubmit}
//                 btnText={"Create"}
//               />
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   };
//   return (
//     <>
//       {entityType === "doctor" &&
//         renderEntity({ name: "dcotor 1", description: "hi dcotr" })}
//       {entityType === "clinic" && renderForm()}
//     </>
//   );
// };

// export default Entitypage;

import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Form from "../components/Common/Form";
import NotFound from "./NotFound";
const Entitypage = () => {
  const { entityType } = useParams();

  const renderEntity = (entityData) => {
    return (
      <Layout>
        <div>
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
      // Add more fields with different input types
    ];

    const handleFormSubmit = (data) => {
      console.log("working");
      console.log(data);
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

  const entityConfig = {
    doctor: {
      render: () =>
        renderEntity({ name: "Doctor 1", description: "Hi doctor" }),
    },
    clinic: {
      render: renderForm,
    },
    // Add more entity types and their configuration here
  };

  const config = entityConfig[entityType];

  if (config) {
    return config.render();
  } else {
    return <NotFound />;
  }
};

export default Entitypage;
