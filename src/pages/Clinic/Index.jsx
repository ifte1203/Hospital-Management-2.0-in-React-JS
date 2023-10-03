import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import Layout from "../../components/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClinics, deleteClinic } from "../../slice/clinicSlice";
// Icons
import { Trash, Eye, Pencil } from "lucide-react";
import { toast } from "react-toastify";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, deleted, clinic } = useSelector((state) => state.clinic);
  console.log(clinic);

  useEffect(() => {
    dispatch(getClinics());
  }, [dispatch]);

  useEffect(() => {
    if (deleted) {
      toast.success("Clinic Deleted Successfully!");
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns = useMemo(
    () => [
      {
        accessorFn: (row, index) => index + 1, //alternate way
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
              <NavLink className="" to={`/clinic/show/${original.clinic_id}`}>
                <Eye color="blue" />
              </NavLink>
              &nbsp;&nbsp;
              <NavLink className="" to={`/clinic/edit/${original.clinic_id}`}>
                <Pencil />
              </NavLink>
              &nbsp;&nbsp;
              <a
                className=""
                href="#"
                style={{ textDecoration: "none" }}
                data-toggle="modal"
                data-target={`#delete_clinic${original.clinic_id}`}
              >
                <Trash color="red" />
              </a>
              <div
                id={`delete_clinic${original.clinic_id}`}
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
                      <input type="hidden" value={original.clinic_id} />
                      <div className="m-t-20">
                        {" "}
                        <a
                          href="#"
                          className="btn btn-white"
                          data-dismiss="modal"
                        >
                          Close
                        </a>
                        <button
                          onClick={() => {
                            dispatch(deleteClinic(original.clinic_id));
                          }}
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
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
              <MaterialReactTable columns={columns} data={clinic} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
