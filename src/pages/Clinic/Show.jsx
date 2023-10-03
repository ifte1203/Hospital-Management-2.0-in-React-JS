import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getclinicDetails } from "../../slice/clinicSlice";

const Show = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { clinicDetail, error, clinic } = useSelector((state) => state.clinic);
  console.log(clinicDetail);

  useEffect(() => {
    dispatch(getclinicDetails(id));
  }, [dispatch, id]);

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
                  <table className="table table-bordered">
                    <tr>
                      <td colSpan={2}>
                        <b>Clinic Name:</b>&nbsp;
                        {clinicDetail && clinicDetail.name}
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
                        <b>Clinic Code:</b>&nbsp;
                        {clinicDetail && clinicDetail.code}
                      </td>
                      <td>
                        <b>Registration No.:</b>&nbsp;
                        {clinicDetail && clinicDetail.registration}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Clinic Loyalty Center No.:</b>&nbsp;
                        {clinicDetail && clinicDetail.clinic_loyalty_centre_no}
                      </td>
                      <td>
                        <b>Clinic type:</b>&nbsp;
                        {clinicDetail && clinicDetail.clinic_type}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Email:</b>&nbsp;{clinicDetail && clinicDetail.email}
                      </td>
                      <td>
                        <b>Phone:</b>&nbsp;{clinicDetail && clinicDetail.phone}
                      </td>
                      <td>
                        <b>Website:</b>&nbsp;
                        {clinicDetail && clinicDetail.website}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Fax:</b>&nbsp;{clinicDetail && clinicDetail.fax}
                      </td>
                      <td>
                        <b>Location Map Url:</b>&nbsp;
                        {clinicDetail && clinicDetail.location_map_url}
                      </td>
                      <td>
                        <b>Time Slot:</b>&nbsp;
                        {clinicDetail && clinicDetail.time_slot}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>GSTIN:</b>&nbsp;
                        {clinicDetail && clinicDetail.gstin_no}
                      </td>
                      <td>
                        <b>Type:</b>&nbsp;{clinicDetail && clinicDetail.type}
                      </td>
                      <td>
                        <b>Telemedicine:</b>&nbsp;
                        {clinicDetail && clinicDetail.telemedicine}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Doctor Presence:</b>&nbsp;
                        {clinicDetail && clinicDetail.doctor_presence}
                      </td>
                      <td>
                        <b>Specialist:</b>&nbsp;
                        {clinicDetail && clinicDetail.specialist}
                      </td>
                      <td>
                        <b>Lab Test:</b>&nbsp;
                        {clinicDetail && clinicDetail.lab_test}
                      </td>
                    </tr>
                  </table>
                </div>

                <h4 className="mt-4">Clinic Addresses</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    {clinicDetail && clinicDetail.clinic_addresses > 0 ? (
                      clinicDetail.clinic_addresses.map((res, key) => {
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
                      })
                    ) : (
                      <tr>
                        <td colSpan={4}>No clinic address available</td>
                      </tr>
                    )}
                  </table>
                </div>

                <h4 className="mt-4">Clinic Contacts</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    {clinicDetail && clinicDetail.clinic_contacts.length > 0 ? (
                      clinicDetail.clinic_contacts.map((res, key) => (
                        <tr key={key}>
                          <th>Mobile Number {key + 1}</th>
                          <td>{res && res.mobile_number}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2}>No clinic contacts available</td>
                      </tr>
                    )}
                  </table>
                </div>

                <h4 className="mt-4">Clinic Availabilities</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>From Time</th>
                        <th>To Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clinicDetail &&
                      clinicDetail.clinic_availabilities.length > 0 ? (
                        clinicDetail.clinic_availabilities.map((res, key) => {
                          return (
                            <>
                              <tr>
                                <td>{res && res.day}</td>
                                <td>{res && res.from_time}</td>
                                <td>{res && res.to_time}</td>
                              </tr>
                            </>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={3}>
                            No clinic availability time available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
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
