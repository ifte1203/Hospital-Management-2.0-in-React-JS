import React from "react";
import Layout from "../../components/Layout";

const Edit = () => {
  return (
    <div>
      <Layout>
        <div className="content">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4 className="page-title">Add Doctor</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form>
                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="form-group">
                      <label>Avatar</label>
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Employee Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Designation</label>
                      <select name="designation" className="form-control">
                        <option value="">Select Designation</option>
                        <option value="Manager">Manager</option>
                        <option value="Employee">Employee</option>
                        <option value="Director">Director</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Qualification <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Resistration Number{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
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
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <div className="cal-icon">
                        <input
                          type="date"
                          className="form-control datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">Gender:</label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            className="form-check-input"
                          />
                          Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            className="form-check-input"
                          />
                          Female
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
                          <input type="text" className="form-control" />
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Date of Joining&nbsp;
                        <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="date" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        EHR User Type&nbsp;
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value="Doctor"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        CPH User Type&nbsp;
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value="Doctor"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Clinic Attached&nbsp;
                        <span className="text-danger">*</span>
                      </label>
                      <select name="clinic" className="form-control">
                        <option value="">Select Clinic</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Doctor Visit Time&nbsp;
                        <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="time" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Doctor Available Service&nbsp;
                        <span className="text-danger">*</span>
                      </label>
                      <br />
                      <input type="checkbox" name="modality" value="" />
                      &nbsp;
                      <label htmlFor="">Test 1</label>
                      <br />
                      <input type="checkbox" name="modality" value="" />
                      &nbsp;
                      <label htmlFor="">Test 2</label>
                      <br />
                      <input type="checkbox" name="modality" value="" />
                      &nbsp;
                      <label htmlFor="">Test 3</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <div className="form-group">
                      <label>
                        Upload Signature&nbsp;
                        <span className="text-danger">*</span>
                      </label>
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
                </div>
                <div className="form-group">
                  <label>Description About Doctor</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    cols={30}
                    defaultValue={""}
                  />
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">
                    Create Doctor
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Edit;
