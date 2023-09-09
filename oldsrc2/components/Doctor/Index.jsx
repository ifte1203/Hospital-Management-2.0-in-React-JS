import { NavLink } from "react-router-dom";
import Layout from "../Layout";
import DoctorCard from "../DoctorCard";
import { doctorData } from "../../json/data";

const Index = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-4 col-3">
          <h4 className="page-title">Doctors</h4>
        </div>
        <div className="col-sm-8 col-9 text-right m-b-20">
          <NavLink
            to={"/doctor/create"}
            className="btn btn-primary btn-rounded float-right"
          >
            <i className="fa fa-plus" /> Add Doctor
          </NavLink>
        </div>
      </div>
      <div className="row doctor-grid">
        {doctorData.map((doctor, key) => {
          return (
            <>
              <DoctorCard
                key={key}
                id={doctor.id}
                name={doctor.name}
                img={doctor.img}
                designation={doctor.designation}
                location={doctor.location}
              />
            </>
          );
        })}
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
    </>
  );
};

export default Index;
