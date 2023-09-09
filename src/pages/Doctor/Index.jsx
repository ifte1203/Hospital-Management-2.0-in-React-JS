import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import { doctorData } from "../../Data";

const Index = () => {
  console.log(doctorData);
  return (
    <>
      <Layout>
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Doctors</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <NavLink
                to={"/create-doctor"}
                className="btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus" /> Add Doctor
              </NavLink>
            </div>
          </div>
          <div className="row doctor-grid">
            {doctorData.map((doctor, index) => (
              <div className="col-md-4 col-sm-4 col-lg-3" key={index}>
                <div className="profile-widget">
                  <div className="doctor-img">
                    <a className="avatar" href="#">
                      <img alt="" src={doctor.imgSrc} />
                    </a>
                  </div>
                  <div className="dropdown profile-action">
                    <a
                      href="#"
                      className="action-icon dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <NavLink
                        className="dropdown-item"
                        to={`/edit-doctor/${doctor.id}`}
                      >
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </NavLink>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target={`#delete_doctor${doctor.id}`}
                      >
                        <i className="fa fa-trash-o m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                  <div
                    id={`delete_doctor${doctor.id}`}
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
                          <input type="text" value={doctor.id} />
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
                  <h4 className="doctor-name text-ellipsis">
                    <a href="#">{doctor.name}</a>
                  </h4>
                  <div className="doc-prof">{doctor.specialization}</div>
                  <div className="user-country">
                    <i className="fa fa-map-marker" /> {doctor.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="see-all">
                <a className="see-all-btn" href="javascript:void(0);">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
