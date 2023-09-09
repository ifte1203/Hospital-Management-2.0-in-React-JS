import React from "react";
import Form from "../../components/Common/Form";
import Layout from "../../components/Layout";

const Edit = () => {
  const handleFormSubmit = (data) => {
    // Handle form submission for the first component
    console.log("Form data:", data);
  };

  return (
    <Layout>
      <div className="content">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="page-title">Edit Clinic</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Clinic Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Registration No. <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Clinic Loyalty Centre No.{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Clinic Type&nbsp;<span className="text-danger">*</span>
                    </label>
                    <select name="clinic_type" className="form-control">
                      <option value="">Select Clinic Type</option>
                      <option value="Clinic">Clinic</option>
                      <option value="Pathology Lab">Pathology Lab</option>
                      <option value="Hospital">Hospital</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Email&nbsp;<span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Alternate Email</label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Mobile&nbsp;<span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="number" />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group gender-select">
                    <label className="gen-label">Type:</label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="type"
                          className="form-check-input"
                        />
                        Onsite
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="type"
                          className="form-check-input"
                        />
                        Nearsite
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group gender-select">
                    <label className="gen-label">TeleMedicine:</label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="telemedicine"
                          className="form-check-input"
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="telemedicine"
                          className="form-check-input"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group gender-select">
                    <label className="gen-label">Doctor Presence:</label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="type"
                          className="form-check-input"
                        />
                        Part time
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="type"
                          className="form-check-input"
                        />
                        Full time
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group gender-select">
                    <label className="gen-label">Specialist:</label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="specialist"
                          className="form-check-input"
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="specialist"
                          className="form-check-input"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group gender-select">
                    <label className="gen-label">Lab Testing:</label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="lab_testing"
                          className="form-check-input"
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="lab_testing"
                          className="form-check-input"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control " />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Area</label>
                        <input type="text" className="form-control " />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>Country</label>
                        <select className="form-control select">
                          <option>USA</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>State/Province</label>
                        <select className="form-control select">
                          <option>California</option>
                          <option>Alaska</option>
                          <option>Alabama</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>City</label>
                        <select className="form-control select">
                          <option>California</option>
                          <option>Alaska</option>
                          <option>Alabama</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>Pin Code</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Phone </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Website</label>
                    <input type="url" name="website" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Fax</label>
                    <input type="text" name="fax" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="form-group">
                    <label>Set Logo</label>
                    <div className="profile-upload">
                      <div className="upload-img">
                        <img alt="" src="assets/img/user.jpg" />
                      </div>
                      <div className="upload-input">
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Location Map URL</label>
                    <input
                      type="text"
                      name="location_map_url"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Time Slot</label>
                    <select className="form-control select">
                      <option>15</option>
                      <option>20</option>
                      <option>30</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">GSTIN</label>
                    <input type="text" name="GSTIN" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Clinic Time availability Table</label>
                <div id="id_days_hours_div">
                  <table
                    className="table table-bordered table-condensed classTableView"
                    id="id_days_hours_table"
                  >
                    <tbody>
                      <tr>
                        <td width="150px">
                          <label className="checkbox">
                            <input
                              type="checkbox"
                              name="monday"
                              id="idMonday"
                              className="classInputCheckbox classClinicTiming"
                            />
                            Monday
                          </label>
                        </td>
                        <td width="350px" id="idMondayTd_0">
                          <div id="idMondayDiv_0">
                            <span>From</span>
                            <select
                              name="mondayFromTime[]"
                              id="idFromTimeMon_0"
                              className="classInputselectTimingTable classFromTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <span>To</span>
                            <select
                              name="mondayToTime[]"
                              id="idToTimeMon_0"
                              className="classInputselectTimingTable classToTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <img
                              alt="Delete"
                              src="images/delete.gif"
                              height="20"
                              width="20"
                              id="idMonDelete_0"
                              onclick="DeleteTableRow(1,this.id)"
                            />
                          </div>
                          <div id="idMondayDiv_2">
                            <span>From</span>
                            <select
                              name="mondayFromTime[]"
                              id="idFromTimeMon_2"
                              className="classInputselectTimingTable classFromTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <span>To</span>
                            <select
                              name="mondayToTime[]"
                              id="idToTimeMon_2"
                              className="classInputselectTimingTable classToTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <img
                              alt="Delete"
                              src="images/delete.gif"
                              height="20"
                              width="20"
                              id="idMonDelete_2"
                              onclick="DeleteTableRow(1,this.id)"
                            />
                          </div>
                        </td>
                        <td width="90px">
                          <center>
                            <input
                              type="button"
                              name="mondayTimeBtn"
                              id="idMondayAddBtn_0"
                              className="btn btn-warning classInputButton"
                              value="Add"
                            />
                          </center>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkbox">
                            <input
                              type="checkbox"
                              name="tuesday"
                              id="idTuesday"
                              className="classInputCheckbox classClinicTiming"
                            />
                            Tuesday
                          </label>
                        </td>
                        <td id="idTuesdayTd_0">
                          <div id="idTuesdayDiv_0">
                            <span>From</span>
                            <select
                              name="tuesdayFromTime[]"
                              id="idFromTimeTue_0"
                              className="classInputselectTimingTable classFromTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <span>To</span>
                            <select
                              name="tuesdayToTime[]"
                              id="idToTimeTue_0"
                              className="classInputselectTimingTable classToTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <img
                              alt="Delete"
                              src="images/delete.gif"
                              height="20"
                              width="20"
                              id="idTueDelete_0"
                              onclick="DeleteTableRow(2,this.id)"
                            />
                          </div>
                        </td>
                        <td>
                          <center>
                            <input
                              type="button"
                              name="tuesdayTimeBtn"
                              id="idTuesdayAddBtn_0"
                              className="btn btn-warning classInputButton"
                              value="Add"
                            />
                          </center>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkbox">
                            <input
                              type="checkbox"
                              name="wednesday"
                              id="idWednesday"
                              className="classInputCheckbox classClinicTiming"
                            />
                            Wednesday
                          </label>
                        </td>
                        <td id="idWednesdayTd_0">
                          <div id="idWednesdayDiv_0">
                            <span>From</span>
                            <select
                              name="wednesdayFromTime[]"
                              id="idFromTimeWed_0"
                              className="classInputselectTimingTable classFromTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <span>To</span>
                            <select
                              name="wednesdayToTime[]"
                              id="idToTimeWed_0"
                              className="classInputselectTimingTable classToTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <img
                              alt="Delete"
                              src="images/delete.gif"
                              height="20"
                              width="20"
                              id="idWedDelete_0"
                              onclick="DeleteTableRow(3,this.id)"
                            />
                          </div>
                        </td>
                        <td>
                          <center>
                            <input
                              type="button"
                              name="wednesdayTimeBtn"
                              id="idWednesdayAddBtn_0"
                              className="btn btn-warning classInputButton"
                              value="Add"
                            />
                          </center>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkbox">
                            <input
                              type="checkbox"
                              name="thursday"
                              id="idThursday"
                              className="classInputCheckbox classClinicTiming"
                            />
                            Thursday
                          </label>
                        </td>
                        <td id="idThursdayTd_0">
                          <div id="idThursdayDiv_0">
                            <span>From</span>
                            <select
                              name="thursdayFromTime[]"
                              id="idFromTimeThu_0"
                              className="classInputselectTimingTable classFromTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <span>To</span>
                            <select
                              name="thursdayToTime[]"
                              id="idToTimeThu_0"
                              className="classInputselectTimingTable classToTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <img
                              alt="Delete"
                              src="images/delete.gif"
                              height="20"
                              width="20"
                              id="idThuDelete_0"
                              onclick="DeleteTableRow(4,this.id)"
                            />
                          </div>
                        </td>
                        <td>
                          <center>
                            <input
                              type="button"
                              name="thursdayTimeBtn"
                              id="idThursdayAddBtn_0"
                              className="btn btn-warning classInputButton"
                              value="Add"
                            />
                          </center>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkbox">
                            <input
                              type="checkbox"
                              name="friday"
                              id="idFriday"
                              className="classInputCheckbox classClinicTiming"
                            />
                            Friday
                          </label>
                        </td>
                        <td id="idFridayTd_0">
                          <div id="idFridayDiv_0">
                            <span>From</span>
                            <select
                              name="fridayFromTime[]"
                              id="idFromTimeFri_0"
                              className="classInputselectTimingTable classFromTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <span>To</span>
                            <select
                              name="fridayToTime[]"
                              id="idToTimeFri_0"
                              className="classInputselectTimingTable classToTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <img
                              alt="Delete"
                              src="images/delete.gif"
                              height="20"
                              width="20"
                              id="idFriDelete_0"
                              onclick="DeleteTableRow(5,this.id)"
                            />
                          </div>
                        </td>
                        <td>
                          <center>
                            <input
                              type="button"
                              name="fridayTimeBtn"
                              id="idFridayAddBtn_0"
                              className="btn btn-warning classInputButton"
                              value="Add"
                            />
                          </center>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkbox">
                            <input
                              type="checkbox"
                              name="saturday"
                              id="idSaturday"
                              className="classInputCheckbox classClinicTiming"
                            />
                            Saturday
                          </label>
                        </td>
                        <td id="idSaturdayTd_0">
                          <div id="idSaturdayDiv_0">
                            <span>From</span>
                            <select
                              name="saturdayFromTime[]"
                              id="idFromTimeSat_0"
                              className="classInputselectTimingTable classFromTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <span>To</span>
                            <select
                              name="saturdayToTime[]"
                              id="idToTimeSat_0"
                              className="classInputselectTimingTable classToTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <img
                              alt="Delete"
                              src="images/delete.gif"
                              height="20"
                              width="20"
                              id="idSatDelete_0"
                              onclick="DeleteTableRow(6,this.id)"
                            />
                          </div>
                        </td>
                        <td>
                          <center>
                            <input
                              type="button"
                              name="saturdayTimeBtn"
                              id="idSaturdayAddBtn_0"
                              className="btn btn-warning classInputButton"
                              value="Add"
                            />
                          </center>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkbox">
                            <input
                              type="checkbox"
                              name="sunday"
                              id="idSunday"
                              className="classInputCheckbox classClinicTiming"
                            />
                            Sunday
                          </label>
                        </td>
                        <td id="idSundayTd_0">
                          <div id="idSundayDiv_0">
                            <span>From</span>
                            <select
                              name="sundayFromTime[]"
                              id="idFromTimeSun_0"
                              className="classInputselectTimingTable classFromTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <span>To</span>
                            <select
                              name="sundayToTime[]"
                              id="idToTimeSun_0"
                              className="classInputselectTimingTable classToTimings"
                            >
                              <option value="00:00">00:00</option>
                              <option value="00:15">00:15</option>
                              <option value="00:30">00:30</option>
                              <option value="00:45">00:45</option>
                              <option value="01:00">01:00</option>
                              <option value="01:15">01:15</option>
                              <option value="01:30">01:30</option>
                              <option value="01:45">01:45</option>
                              <option value="02:00">02:00</option>
                              <option value="02:15">02:15</option>
                              <option value="02:30">02:30</option>
                              <option value="02:45">02:45</option>
                              <option value="03:00">03:00</option>
                              <option value="03:15">03:15</option>
                              <option value="03:30">03:30</option>
                              <option value="03:45">03:45</option>
                              <option value="04:00">04:00</option>
                              <option value="04:15">04:15</option>
                              <option value="04:30">04:30</option>
                              <option value="04:45">04:45</option>
                              <option value="05:00">05:00</option>
                              <option value="05:15">05:15</option>
                              <option value="05:30">05:30</option>
                              <option value="05:45">05:45</option>
                              <option value="06:00">06:00</option>
                              <option value="06:15">06:15</option>
                              <option value="06:30">06:30</option>
                              <option value="06:45">06:45</option>
                              <option value="07:00">07:00</option>
                              <option value="07:15">07:15</option>
                              <option value="07:30">07:30</option>
                              <option value="07:45">07:45</option>
                              <option value="08:00">08:00</option>
                              <option value="08:15">08:15</option>
                              <option value="08:30">08:30</option>
                              <option value="08:45">08:45</option>
                              <option value="09:00">09:00</option>
                              <option value="09:15">09:15</option>
                              <option value="09:30">09:30</option>
                              <option value="09:45">09:45</option>
                              <option value="10:00">10:00</option>
                              <option value="10:15">10:15</option>
                              <option value="10:30">10:30</option>
                              <option value="10:45">10:45</option>
                              <option value="11:00">11:00</option>
                              <option value="11:15">11:15</option>
                              <option value="11:30">11:30</option>
                              <option value="11:45">11:45</option>
                              <option value="12:00">12:00</option>
                              <option value="12:15">12:15</option>
                              <option value="12:30">12:30</option>
                              <option value="12:45">12:45</option>
                              <option value="13:00">13:00</option>
                              <option value="13:15">13:15</option>
                              <option value="13:30">13:30</option>
                              <option value="13:45">13:45</option>
                              <option value="14:00">14:00</option>
                              <option value="14:15">14:15</option>
                              <option value="14:30">14:30</option>
                              <option value="14:45">14:45</option>
                              <option value="15:00">15:00</option>
                              <option value="15:15">15:15</option>
                              <option value="15:30">15:30</option>
                              <option value="15:45">15:45</option>
                              <option value="16:00">16:00</option>
                              <option value="16:15">16:15</option>
                              <option value="16:30">16:30</option>
                              <option value="16:45">16:45</option>
                              <option value="17:00">17:00</option>
                              <option value="17:15">17:15</option>
                              <option value="17:30">17:30</option>
                              <option value="17:45">17:45</option>
                              <option value="18:00">18:00</option>
                              <option value="18:15">18:15</option>
                              <option value="18:30">18:30</option>
                              <option value="18:45">18:45</option>
                              <option value="19:00">19:00</option>
                              <option value="19:15">19:15</option>
                              <option value="19:30">19:30</option>
                              <option value="19:45">19:45</option>
                              <option value="20:00">20:00</option>
                              <option value="20:15">20:15</option>
                              <option value="20:30">20:30</option>
                              <option value="20:45">20:45</option>
                              <option value="21:00">21:00</option>
                              <option value="21:15">21:15</option>
                              <option value="21:30">21:30</option>
                              <option value="21:45">21:45</option>
                              <option value="22:00">22:00</option>
                              <option value="22:15">22:15</option>
                              <option value="22:30">22:30</option>
                              <option value="22:45">22:45</option>
                              <option value="23:00">23:00</option>
                              <option value="23:15">23:15</option>
                              <option value="23:30">23:30</option>
                              <option value="23:45">23:45</option>
                            </select>
                            <img
                              alt="Delete"
                              src="images/delete.gif"
                              height="20"
                              width="20"
                              id="idSunDelete_0"
                              onclick="DeleteTableRow(7,this.id)"
                            />
                          </div>
                        </td>
                        <td>
                          <center>
                            <input
                              type="button"
                              name="sundayTimeBtn"
                              id="idSundayAddBtn_0"
                              className="btn btn-warning classInputButton"
                              value="Add"
                            />
                          </center>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="m-t-20 text-center">
                <button className="btn btn-primary submit-btn">
                  Update Clinic
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
