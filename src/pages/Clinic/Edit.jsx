import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getclinicDetails } from "../../slice/clinicSlice";
import ClinicDetail from "../../components/Clinic/ClinicDetail";
import ClininPhone from "../../components/Clinic/ClininPhone";
import ClinicAvailability from "../../components/Clinic/ClinicAvailability";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getclinicDetails(id));
  }, []);

  return (
    <Layout>
      <div className="content">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h4 className="page-title">Edit Clinic</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="container">
              <div id="accordion" className="py-5">
                {/* 1st Accordian */}
                <ClinicDetail />
                {/* 2nd Accordian */}
                <ClininPhone />
                {/* 3rd Accordian */}
                <ClinicAvailability />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
