import React from "react";
import Layout from "../Layout";
import CommonTable from "../Common/CommonTable";
import { NavLink } from "react-router-dom";

const Index = () => {
  const header = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  const record = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
  ];
  return (
    <Layout>
      <div className="content">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-6">
                <h4>Clinic</h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <NavLink
                  to={"/entity/create-clinic"}
                  className="btn btn-primary btn-sm"
                >
                  Create Clinic
                </NavLink>
              </div>
            </div>
          </div>
          <div className="card-body">
            <CommonTable header={header} record={record} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
