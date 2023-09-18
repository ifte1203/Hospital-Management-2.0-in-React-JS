import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getclinicDetails } from "../../slice/clinicSlice";

const Show = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { clinicDetail, error, clinic } = useSelector((state) => state.clinic);
  console.log(clinicDetail);

  useEffect(() => {
    dispatch(getclinicDetails(id));
  }, []);

  return (
    <Layout>
      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                {/* <h5 className="card-title">Show Clinic Detail</h5> */}
              </div>
              <div className="card-body">
                <h4>Clinic Detail</h4>
                <div className="table-responsive">
                  {clinicDetail.map((data, key) => {
                    return (
                      <>
                        <table className="table table-bordered">
                          <tr>
                            <td colSpan={2}>
                              <b>Clinic Name:</b>&nbsp;{data && data.name}
                            </td>
                            <td colSpan={2} rowSpan={3} align="center">
                              <img
                                src="https://upload-artifacts-medic.s3.ap-south-1.amazonaws.com/bgimage.jpg"
                                height={100}
                                alt="logo"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Clinic Code:</b>&nbsp;{data && data.code}
                            </td>
                            <td>
                              <b>Registration No.:</b>&nbsp;
                              {data && data.registration}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Clinic Loyalty Center No.:</b>&nbsp;
                              {data && data.clinic_loyalty_centre_no}
                            </td>
                            <td>
                              <b>Clinic type:</b>&nbsp;
                              {data && data.clinic_type}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Email:</b>&nbsp;{data && data.email}
                            </td>
                            <td>
                              <b>Phone:</b>&nbsp;{data && data.phone}
                            </td>
                            <td>
                              <b>Website:</b>&nbsp;{data && data.website}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Fax:</b>&nbsp;{data && data.fax}
                            </td>
                            <td>
                              <b>Location Map Url:</b>&nbsp;
                              {data && data.location_map_url}
                            </td>
                            <td>
                              <b>Time Slot:</b>&nbsp;{data && data.time_slot}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>GSTIN:</b>&nbsp;{data && data.gstin_no}
                            </td>
                            <td>
                              <b>Type:</b>&nbsp;{data && data.type}
                            </td>
                            <td>
                              <b>Telemedicine:</b>&nbsp;
                              {data && data.telemedicine}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Doctor Presence:</b>&nbsp;
                              {data && data.doctor_presence}
                            </td>
                            <td>
                              <b>Specialist:</b>&nbsp;{data && data.specialist}
                            </td>
                            <td>
                              <b>Lab Test:</b>&nbsp;{data && data.lab_test}
                            </td>
                          </tr>
                        </table>
                      </>
                    );
                  })}
                </div>

                <h4 className="mt-4">Clinic Addresses</h4>
                <div className="table-responsive">
                  {clinicDetail &&
                    clinicDetail.map((data, key) => {
                      return (
                        <>
                          <table className="table table-bordered">
                            {data.clinic_addresses &&
                              data.clinic_addresses.map((res, key) => {
                                // console.log("res: " + res.address);
                                // alert(res.address);
                                return (
                                  <>
                                    <tr>
                                      <th>Address</th>
                                      <td>{res && res.address}</td>
                                      <th>Pincode</th>
                                      <td>{res && res.pincode}</td>
                                    </tr>
                                  </>
                                );
                              })}
                          </table>
                        </>
                      );
                    })}
                </div>

                <h4 className="mt-4">Clinic Contacts</h4>
                <div className="table-responsive">
                  {clinicDetail &&
                    clinicDetail.map((data, key) => {
                      return (
                        <>
                          <table className="table table-bordered">
                            {data.clinic_contacts &&
                              data.clinic_contacts.map((res, key) => {
                                return (
                                  <>
                                    <tr>
                                      <th>Mobile Number {key + 1}</th>
                                      <td>{res && res.mobile_number}</td>
                                    </tr>
                                  </>
                                );
                              })}
                          </table>
                        </>
                      );
                    })}
                </div>

                <h4 className="mt-4">Clinic Availabilities</h4>
                <div className="table-responsive">
                  {clinicDetail &&
                    clinicDetail.map((data, key) => {
                      return (
                        <>
                          <table className="table table-bordered">
                            {data.clinic_availabilities &&
                              data.clinic_availabilities.map((res, key) => {
                                return (
                                  <>
                                    <tr>
                                      <th>Day</th>
                                      <td>{res && res.day}</td>
                                      <th>From Time</th>
                                      <td>{res && res.from_time}</td>
                                      <th>To Time</th>
                                      <td>{res && res.to_time}</td>
                                    </tr>
                                  </>
                                );
                              })}
                          </table>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Show;
