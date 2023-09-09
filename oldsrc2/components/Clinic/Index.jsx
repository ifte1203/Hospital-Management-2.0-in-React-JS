import React from "react";
import { NavLink } from "react-router-dom";
import { clinicData } from "../../json/data";

const Index = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-4 col-3">
          <h4 className="page-title">Clinics</h4>
        </div>
        <div className="col-sm-8 col-9 text-right m-b-20">
          <NavLink
            to={"/clinic/create"}
            className="btn btn btn-primary btn-rounded float-right"
          >
            <i className="fa fa-plus"></i> Add Clinic
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-border table-striped custom-table datatable mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {clinicData.map((data) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <img
                            width="28"
                            height="28"
                            src="/public/assets/img/user.jpg"
                            className="rounded-circle m-r-5"
                            alt=""
                          />
                          &nbsp;
                          {data.name}
                        </td>
                        <td>{data.address}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="edit-patient.html"
                              >
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_patient"
                              >
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
