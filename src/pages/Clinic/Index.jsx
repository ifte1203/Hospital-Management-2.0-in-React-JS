import React, { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
import rowData from "../../Data";
import { render } from "react-dom";

const data = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Sara",
    age: 25,
  },
];

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    // alert("alert");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.id, //alternate way
        id: "sno", //id required if you use accessorFn instead of accessorKey
        header: <h3>S.No.</h3>,
        // Header: <i style={{ color: "red" }}>Sno.</i>, //optional custom markup
        Cell: ({ renderedCellValue }) => renderedCellValue,
      },
      {
        accessorFn: (row) => row.code, //alternate way
        id: "code", //id required if you use accessorFn instead of accessorKey
        header: "Clinic Code",
        Cell: ({ renderedCellValue }) => renderedCellValue, //optional custom markup
      },
      {
        accessorFn: (row) => row.name, //alternate way
        id: "name", //id required if you use accessorFn instead of accessorKey
        header: "Clinic Name",
        Cell: ({ renderedCellValue }) => renderedCellValue, //optional custom markup
      },
      {
        accessorFn: (row) => row.name, //alternate way
        id: "parent", //id required if you use accessorFn instead of accessorKey
        header: "Parent Clinic",
        Cell: ({ renderedCellValue }) => "N/A", //optional custom markup
      },
      {
        id: "action",
        header: "Action",
        Cell: ({ row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <>
              {/* <button
                className="btn btn-show"
                onClick={() => handleShow(original.id)}
              >
                Show
              </button> */}
              <NavLink
                className="btn btn-warning"
                to="/clinic/show/22"
                // onClick={() => handleShow(original.id)}
              >
                <i className="fa fa-eye"></i>
              </NavLink>
              &nbsp;&nbsp;
              <NavLink
                className="btn btn-info"
                onClick={() => alert(original.id)}
              >
                <i className="fa fa-pencil"></i>
              </NavLink>
              &nbsp;&nbsp;
              <a
                className="btn btn-danger"
                href="#"
                style={{ textDecoration: "none" }}
                data-toggle="modal"
                data-target={`#delete_clinic${original.id}`}
              >
                <i className="fa fa-trash" />
              </a>
              <div
                id={`delete_clinic${original.id}`}
                className="modal fade delete-modal"
                role="dialog"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body text-center">
                      <img
                        src="assets/img/sent.png"
                        alt=""
                        width="50"
                        height="46"
                      />
                      <h3>Are you sure want to delete this Doctor?</h3>
                      <input type="text" value={original.id} />
                      <div className="m-t-20">
                        {" "}
                        <a
                          href="#"
                          className="btn btn-white"
                          data-dismiss="modal"
                        >
                          Close
                        </a>
                        <button type="submit" className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <Layout>
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">View All Clinics</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <NavLink
                to={"/create-clinic"}
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Clinic
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="table-responsive">
                <table className="table table-border table-striped custom-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>Sr No.</th>
                      <th>Cliniuc Code</th>
                      <th>Clinic Name</th>
                      <th>Parent Clinic</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Freeze</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rowData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>100{index}</td>
                        <td>{data.name}</td>
                        <td>N/A</td>
                        <td>
                          <button className="btn btn-warning">
                            <i className="fa fa-eye"></i>
                          </button>
                        </td>
                        <td>
                          <NavLink
                            to={`/edit-clinic/${index + 1}`}
                            className="btn btn-primary"
                          >
                            <i className="fa fa-pencil"></i>
                          </NavLink>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            data-toggle="modal"
                            data-target="#delete_clinic"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>\
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
              <MaterialReactTable columns={columns} data={rowData} />
            </div>
          </div>
          {/* {isModalOpen && (
            <div className="modal fade show" tabIndex="-1" role="dialog">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body text-center">
                    <img
                      src="assets/img/sent.png"
                      alt=""
                      width="50"
                      height="46"
                    />
                    <h3>Are you sure you want to delete this Doctor?</h3>
                    <div className="m-t-20">
                      <a
                        href="#"
                        className="btn btn-white"
                        onClick={closeModal}
                      >
                        Close
                      </a>
                      <button type="submit" className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-backdrop fade show"></div>
            </div>
          )} */}
        </div>
      </Layout>
    </>
  );
};

export default Index;
