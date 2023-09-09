import React from "react";
import { NavLink } from "react-router-dom";

const DoctorCard = ({ key, id, img, name, designation, location }) => {
  return (
    <div className="col-md-4 col-sm-4  col-lg-3">
      <div className="profile-widget">
        <div className="doctor-img">
          <a className="avatar" href="profile.html">
            <img alt="" src={img} />
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
            <NavLink className="dropdown-item" to={`/doctor/edit/${id}`}>
              <i className="fa fa-pencil m-r-5" /> Edit
            </NavLink>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#delete_doctor"
            >
              <i className="fa fa-trash-o m-r-5" /> Delete
            </a>
          </div>
        </div>
        <h4 className="doctor-name text-ellipsis">
          <a href="profile.html">{name}</a>
        </h4>
        <div className="doc-prof">{designation}</div>
        <div className="user-country">
          <i className="fa fa-map-marker" /> {location}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
