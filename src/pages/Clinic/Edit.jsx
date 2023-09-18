import React, { useEffect, useState } from "react";
import Form from "../../components/Common/Form";
import Layout from "../../components/Layout";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formValidationSchema from "../../components/Common/formValidationSchema";
import { upload, validateImage } from "../../components/Common/fileUpload";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getclinicDetails } from "../../slice/clinicSlice";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { clinicDetail } = useSelector((state) => state.clinic) || {
    clinicDetail: [],
  };

  const [mobileNumbers, setMobileNumbers] = useState([""]);
  const initialSelectedDays = [];
  const [selectedDays, setSelectedDays] = useState(initialSelectedDays);

  // Use a separate state variable for rows
  const [rows, setRows] = useState([]);

  useEffect(() => {
    dispatch(getclinicDetails(id));
  }, []);

  // Use a useEffect to monitor changes in clinicDetail and update rows
  useEffect(() => {
    if (clinicDetail && clinicDetail.length > 0) {
      console.log("clinicDetail", clinicDetail[0].clinic_availabilities);
      setRows(clinicDetail[0].clinic_availabilities);
    }
  }, [clinicDetail]);

  // // Log the updated rows
  // useEffect(() => {
  //   console.log("rows", rows);
  // }, [rows]);

  const addRow = (e) => {
    e.preventDefault();
    const newRow = { day: "", fromTime: "", toTime: "" };
    setRows([...rows, newRow]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleInputChange = (e, index) => {
    console.log("Field Name:", e.target.name);
    console.log("Field Value:", e.target.value);
    console.log("hello");
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const addMobileNumber = () => {
    setMobileNumbers([...mobileNumbers, ""]); // Add a new empty mobile number field
  };

  const removeMobileNumber = (index) => {
    const updatedMobileNumbers = [...mobileNumbers];
    updatedMobileNumbers.splice(index, 1); // Remove the mobile number at the specified index
    setMobileNumbers(updatedMobileNumbers);
  };

  const handleMobileNumberChange = (index, value) => {
    const updatedMobileNumbers = [...mobileNumbers];
    updatedMobileNumbers[index] = value;
    setMobileNumbers(updatedMobileNumbers);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      selectedDays: [],
      mobile: [],
    },
  });

  const handleFormSubmit = (data) => {
    // Handle form submission for the first component
    console.log("Form data:", data);
  };

  const onSubmit = (data) => {
    // Gather and format the clinic availability data
    const formattedAvailability = tableData.map((item) => ({
      day: item.day,
      timings: item.timings.map((timing) => ({
        from: timing.from,
        to: timing.to,
      })),
    }));

    // Update the clinicAvailability state with the formatted data
    setClinicAvailability(formattedAvailability);
    console.log(clinicAvailability);
    console.log(data);
  };
  // console.log(errors);

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
                <div className="card border-0">
                  <div className="card-header p-0 border-0" id="heading-239">
                    <button
                      className="btn btn-link accordion-title border-0 collapse"
                      data-toggle="collapse"
                      data-target="#collapse-239"
                      aria-expanded="true"
                      aria-controls="#collapse-239"
                    >
                      <i className="fa fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>
                      Clinic Details
                    </button>
                  </div>
                  <div
                    id="collapse-239"
                    className="collapse show"
                    aria-labelledby="heading-239"
                    data-parent="#accordion"
                  >
                    <div className="card-body accordion-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Clinic Name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                {...register("name")}
                              />
                              <p style={{ color: "red" }}>
                                {errors.name?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Registration No.{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                {...register("registration_number")}
                              />
                              <p style={{ color: "red" }}>
                                {errors.registration_number?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Clinic Loyalty Centre No.
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Clinic Type&nbsp;
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                name="clinic_type"
                                className="form-control"
                                {...register("clinic_type")}
                              >
                                <option value="">Select Clinic Type</option>
                                <option value="Clinic">Clinic</option>
                                <option value="Pathology Lab">
                                  Pathology Lab
                                </option>
                                <option value="Hospital">Hospital</option>
                              </select>
                              <p style={{ color: "red" }}>
                                {errors.clinic_type?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Email&nbsp;
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="email"
                                {...register("email")}
                              />
                            </div>
                            <p style={{ color: "red" }}>
                              {errors.email?.message}
                            </p>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Alternate Email</label>
                              <input
                                className="form-control"
                                type="email"
                                {...register("alternate_email")}
                              />
                            </div>
                            <p style={{ color: "red" }}>
                              {errors.alternate_email?.message}
                            </p>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Mobile&nbsp;
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                {...register("phone")}
                              />
                            </div>
                            <p style={{ color: "red" }}>
                              {errors.phone?.message}
                            </p>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group gender-select">
                              <label className="gen-label">Type:</label>

                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    name="type"
                                    value="onsite"
                                    className="form-check-input"
                                    {...register("type")}
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
                                    {...register("type")}
                                  />
                                  Nearsite
                                </label>
                              </div>
                              <p style={{ color: "red" }}>
                                {errors.type?.message}
                              </p>
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
                                    {...register("telemedicine")}
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
                                    {...register("telemedicine")}
                                  />
                                  No
                                </label>
                              </div>
                              <p style={{ color: "red" }}>
                                {errors.telemedicine?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group gender-select">
                              <label className="gen-label">
                                Doctor Presence:
                              </label>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    name="type"
                                    className="form-check-input"
                                    {...register("doctorPresence")}
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
                                    {...register("doctorPresence")}
                                  />
                                  Full time
                                </label>
                              </div>
                              <p style={{ color: "red" }}>
                                {errors.doctorPresence?.message}
                              </p>
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
                                    {...register("specialist")}
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
                                    {...register("specialist")}
                                  />
                                  No
                                </label>
                              </div>
                              <p style={{ color: "red" }}>
                                {errors.specialist?.message}
                              </p>
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
                                    {...register("labTest")}
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
                                    {...register("labTest")}
                                  />
                                  No
                                </label>
                              </div>
                              <p style={{ color: "red" }}>
                                {errors.labTest?.message}
                              </p>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>Address</label>
                                  <input
                                    type="text"
                                    className="form-control "
                                    {...register("address")}
                                  />
                                </div>
                                <p style={{ color: "red" }}>
                                  {errors.address?.message}
                                </p>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>Area</label>
                                  <input
                                    type="text"
                                    className="form-control "
                                    {...register("area")}
                                  />
                                </div>
                                <p style={{ color: "red" }}>
                                  {errors.area?.message}
                                </p>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                  <label>Country</label>
                                  <select
                                    className="form-control select"
                                    {...register("country")}
                                  >
                                    <option value="">Select Country</option>
                                    <option>USA</option>
                                    <option>United Kingdom</option>
                                  </select>
                                </div>
                                <p style={{ color: "red" }}>
                                  {errors.country?.message}
                                </p>
                              </div>

                              <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                  <label>State/Province</label>
                                  <select
                                    className="form-control select"
                                    {...register("state")}
                                  >
                                    <option value="">Select state</option>

                                    <option>California</option>
                                    <option>Alaska</option>
                                    <option>Alabama</option>
                                  </select>
                                </div>
                                <p style={{ color: "red" }}>
                                  {errors.state?.message}
                                </p>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                  <label>City</label>
                                  <select
                                    className="form-control select"
                                    {...register("city")}
                                  >
                                    <option value="">Select city</option>

                                    <option>California</option>
                                    <option>Alaska</option>
                                    <option>Alabama</option>
                                  </select>
                                </div>
                                <p style={{ color: "red" }}>
                                  {errors.city?.message}
                                </p>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                  <label>Pin Code</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    inputMode="numeric"
                                    {...register("pincode")}
                                  />
                                </div>
                                <p style={{ color: "red" }}>
                                  {errors.pincode?.message}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">Website</label>
                              <input
                                type="url"
                                name="website"
                                className="form-control"
                                {...register("website")}
                              />
                            </div>
                            <p style={{ color: "red" }}>
                              {errors.website?.message}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">Fax</label>
                              <input
                                type="text"
                                name="fax"
                                className="form-control"
                              />
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
                                  <input
                                    type="file"
                                    // onChange={handleFileChange()}
                                    className="form-control"
                                    {...register("image")}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <p style={{ color: "red" }}>
                            {errors.image?.message}
                          </p>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="">Location Map URL</label>
                              <input
                                type="text"
                                name="location_map_url"
                                className="form-control"
                                {...register("location")}
                              />
                            </div>
                            <p style={{ color: "red" }}>
                              {errors.location?.message}
                            </p>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="form-group">
                              <label>Time Slot</label>
                              <select
                                className="form-control select"
                                {...register("timeslot")}
                              >
                                <option>Select slot</option>
                                <option>15</option>
                                <option>20</option>
                                <option>30</option>
                              </select>
                            </div>
                            <p style={{ color: "red" }}>
                              {errors.timeslot?.message}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">GSTIN</label>
                              <input
                                type="text"
                                name="GSTIN"
                                className="form-control"
                                {...register("gst")}
                              />
                            </div>
                            <p style={{ color: "red" }}>
                              {errors.gst?.message}
                            </p>
                          </div>
                        </div>

                        <div className="m-t-20 text-center">
                          <button
                            className="btn btn-primary submit-btn"
                            onClick={handleSubmit(onSubmit)}
                          >
                            Create Clinic
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* 2nd Accordian */}
                <div
                  className="card border-0 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="card-header p-0 border-0" id="heading-240">
                    <button
                      className="btn btn-link accordion-title border-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-240"
                      aria-expanded="false"
                      aria-controls="#collapse-240"
                    >
                      <i className="fa fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>
                      Edit Mobile Number
                    </button>
                  </div>
                  <div
                    id="collapse-240"
                    className="collapse "
                    aria-labelledby="heading-240"
                    data-parent="#accordion"
                  >
                    <div className="card-body accordion-body">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Mobile Numbers</label>
                          <table className="table">
                            {mobileNumbers.map((number, index) => (
                              <tr key={index}>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    {...register(`mobile[${index}]`)}
                                  />
                                </td>
                                {mobileNumbers.length > 1 && ( // Render delete button only if there's more than one field
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm"
                                      onClick={() => removeMobileNumber(index)}
                                    >
                                      <i className="fa fa-close"></i>
                                    </button>
                                  </td>
                                )}
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-warning classInputButton"
                                    onClick={addMobileNumber}
                                  >
                                    <i className="fa fa-plus"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </table>
                        </div>
                        <p style={{ color: "red" }}>{errors.mobile?.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3rd Accordian */}
                <div
                  className="card border-0 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="card-header p-0 border-0" id="heading-241">
                    <button
                      className="btn btn-link accordion-title border-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-241"
                      aria-expanded="false"
                      aria-controls="#collapse-241"
                    >
                      <i className="fa fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>
                      Update Clinic Availability
                    </button>
                  </div>
                  <div
                    id="collapse-241"
                    className="collapse "
                    aria-labelledby="heading-241"
                    data-parent="#accordion"
                  >
                    <div className="card-body accordion-body">
                      <div className="form-group">
                        <label>Clinic Time availability Table</label>
                        <div id="id_days_hours_div">
                          <table className="table table-bordered table-condensed classTableView">
                            <tbody>
                              {rows.map((row, index) => (
                                <tr key={index}>
                                  <td>
                                    <select
                                      name={`selectedDays[${index}].day`}
                                      value={row.day} // Set the selected value to the corresponding value in the rows array
                                      onChange={(e) =>
                                        handleInputChange(e, index)
                                      }
                                      {...register(
                                        `selectedDays[${index}].day`
                                      )}
                                    >
                                      <option value="">Select Days</option>
                                      <option value="Monday">Monday</option>
                                      <option value="Tuesday">Tuesday</option>
                                      <option value="Wednesday">
                                        Wednesday
                                      </option>
                                      <option value="Thursday">Thursday</option>
                                      <option value="Friday">Friday</option>
                                      <option value="Saturday">Saturday</option>
                                      <option value="Sunday">Sunday</option>
                                    </select>
                                    <p style={{ color: "red" }}>
                                      {errors.selectedDays &&
                                        errors.selectedDays[index] &&
                                        errors.selectedDays[index].day?.message}
                                    </p>
                                  </td>

                                  <td>
                                    <label>From time:&nbsp;</label>
                                    <input
                                      type="time"
                                      name={`selectedDays[${index}].fromTime`}
                                      value={row.from_time} // Set the input value to the corresponding value in the rows array
                                      onChange={(e) =>
                                        handleInputChange(e, index)
                                      }
                                      {...register(
                                        `selectedDays[${index}].fromTime`
                                      )}
                                    />
                                    &nbsp;&nbsp;&nbsp;
                                    <label>To time:&nbsp;</label>
                                    <input
                                      type="time"
                                      name={`selectedDays[${index}].toTime`}
                                      value={row.to_time} // Set the input value to the corresponding value in the rows array
                                      onChange={(e) =>
                                        handleInputChange(e, index)
                                      }
                                      {...register(
                                        `selectedDays[${index}].toTime`
                                      )}
                                    />
                                    <br />
                                    <p style={{ color: "red" }}>
                                      {errors.selectedDays &&
                                        errors.selectedDays[index] &&
                                        errors.selectedDays[index].fromTime
                                          ?.message}
                                      <br />
                                      {errors.selectedDays &&
                                        errors.selectedDays[index] &&
                                        errors.selectedDays[index].toTime
                                          ?.message}
                                    </p>
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn-warning"
                                      onClick={addRow}
                                    >
                                      <i className="fa fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => removeRow(index)}
                                      >
                                        <i className="fa fa-trash"></i>
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
