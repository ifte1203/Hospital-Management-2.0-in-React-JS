import React, { useState } from "react";
import Form from "../../components/Common/Form";
import Layout from "../../components/Layout";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formValidationSchema from "../../components/Common/formValidationSchema";
import { validateImage, upload } from "../../components/Common/fileUpload";
import { motion } from "framer-motion";
import { buttonVariants } from "../../../reusable/animation";
import { createClinic } from "../../slice/clinicSlice";
import { useDispatch } from "react-redux";
const Create = () => {
  const [mobileNumbers, setMobileNumbers] = useState([""]);
  const enterpriseId = 1;
  const dispatch = useDispatch();

  const initialSelectedDays = [];
  const [selectedDays, setSelectedDays] = useState(initialSelectedDays);
  console.log(selectedDays);

  const [rows, setRows] = useState([{ day: "", fromTime: "", toTime: "" }]);

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
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      selectedDays: [],
      mobile: [],
    },
  });

  // const handleFileChange = async () => {
  //   const image = getValues("image");
  //   const file = image[0];
  //   console.log(image[0].name);

  //   const validationResult = validateImage(
  //     image,
  //     ["jpg", "jpeg", "png", "gif", "tif"],
  //     3 * 1024 * 1024
  //   );
  //   if (validationResult === true) {
  //     try {
  //       const s3Url = await upload(file);
  //       // console.log("result", s3Url);
  //       setValue("image", "hello");
  //       console.log(image);
  //     } catch (error) {
  //       console.log("s3 error", error);
  //     }
  //   }
  // };

  const onSubmit = async (data) => {
    let image = getValues("logo");
    console.log(image);
    const file = image && image[0];
    console.log(image[0].name);

    const validationResult = validateImage(
      image,
      ["jpg", "jpeg", "png", "gif", "tif"],
      3 * 1024 * 1024
    );
    if (validationResult === true) {
      try {
        const s3Url = await upload(file);
        console.log("result", s3Url);
        data.logo = s3Url;
        console.log(data.logo);

        const formDataToSend = {
          ...data,
          enterpriseId,
        };
        console.log("newData", formDataToSend);
        dispatch(createClinic(formDataToSend));
      } catch (error) {
        console.log("s3 error", error);
      }
    }
  };
  console.log(errors);

  return (
    <Layout>
      <div className="content">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="page-title">Add Clinic</h4>
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
                    <input
                      className="form-control"
                      type="text"
                      {...register("name")}
                    />
                    <p style={{ color: "red" }}>{errors.name?.message}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Registration No. <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      {...register("registrationNo")}
                    />
                    <p style={{ color: "red" }}>
                      {errors.registrationNo?.message}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Clinic Loyalty Centre No.
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      {...register("clinicLoyaltyCentreNo")}
                    />
                    <p style={{ color: "red" }}>
                      {errors.clinicLoyaltyCentreNo?.message}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Clinic Type&nbsp;<span className="text-danger">*</span>
                    </label>
                    <select
                      name="clinic_type"
                      className="form-control"
                      {...register("clinicType")}
                    >
                      <option value="">Select Clinic Type</option>
                      <option value="Clinic">Clinic</option>
                      <option value="Pathology Lab">Pathology Lab</option>
                      <option value="Hospital">Hospital</option>
                    </select>
                    <p style={{ color: "red" }}>{errors.clinicType?.message}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Email&nbsp;<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      {...register("email")}
                    />
                  </div>
                  <p style={{ color: "red" }}>{errors.email?.message}</p>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    {/* <input
                      className="form-control"
                      type="text"
                      value={"1"}
                      {...register("enterpriseId")}
                    /> */}
                  </div>
                  {/* <p style={{ color: "red" }}>{errors.enterpriseId?.message}</p> */}
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Mobile&nbsp;<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      {...register("phone")}
                    />
                  </div>
                  <p style={{ color: "red" }}>{errors.phone?.message}</p>
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
                    <p style={{ color: "red" }}>{errors.type?.message}</p>
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
                    <label className="gen-label">Doctor Presence:</label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="type"
                          className="form-check-input"
                          {...register(" doctorPresence")}
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
                    <p style={{ color: "red" }}>{errors.specialist?.message}</p>
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
                    <p style={{ color: "red" }}>{errors.labTest?.message}</p>
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
                      <p style={{ color: "red" }}>{errors.address?.message}</p>
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
                      <p style={{ color: "red" }}>{errors.area?.message}</p>
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
                      <p style={{ color: "red" }}>{errors.country?.message}</p>
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
                      <p style={{ color: "red" }}>{errors.state?.message}</p>
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
                      <p style={{ color: "red" }}>{errors.city?.message}</p>
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
                      <p style={{ color: "red" }}>{errors.pincode?.message}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Mobile Numbers</label>
                    {mobileNumbers.map((number, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          className="form-control"
                          {...register(`mobileNumber[${index}]`)}
                        />
                        {mobileNumbers.length > 1 && ( // Render delete button only if there's more than one field
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => removeMobileNumber(index)}
                          >
                            <i className="fa fa-close"></i>
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-warning classInputButton"
                      onClick={addMobileNumber}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <p style={{ color: "red" }}>{errors.mobileNumber?.message}</p>
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
                  <p style={{ color: "red" }}>{errors.website?.message}</p>
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
                        <input
                          type="file"
                          // onChange={handleFileChange()}
                          className="form-control"
                          {...register("logo")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ color: "red" }}>{errors.image?.message}</p>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Location Map URL</label>
                    <input
                      type="text"
                      name="location_map_url"
                      className="form-control"
                      {...register("locationMapUrl")}
                    />
                  </div>
                  <p style={{ color: "red" }}>
                    {errors.locationMapUrl?.message}
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
                  <p style={{ color: "red" }}>{errors.timeslot?.message}</p>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">GSTIN</label>
                    <input
                      type="text"
                      name="GSTIN"
                      className="form-control"
                      {...register("gstinNo")}
                    />
                  </div>
                  <p style={{ color: "red" }}>{errors.gstinNo?.message}</p>
                </div>
              </div>

              <div className="form-group">
                <label>Clinic Time availability Table</label>
                <div id="id_days_hours_div">
                  <table className="table table-bordered table-condensed classTableView">
                    <tbody>
                      {rows.map((row, index) => (
                        <tr key={index}>
                          <td>
                            <select
                              name="day" // Use a unique name for each select
                              //   value={row.day}
                              onChange={(e) => handleInputChange(e, index)}
                              {...register(`selectedDays[${index}].day`)} // Register the input
                            >
                              <option value="">Select Days</option>
                              <option value="Monday">Monday</option>
                              <option value="Tuesday">Tuesday</option>
                              <option value="Wednesday">Wednesday</option>
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
                              name="fromTime" // Use a unique name for each input
                              //   value={row.fromTime}
                              onChange={(e) => handleInputChange(e, index)}
                              {...register(`selectedDays[${index}].fromTime`)} // Register the input
                            />
                            &nbsp;&nbsp;&nbsp;
                            <label>To time:&nbsp;</label>
                            <input
                              type="time"
                              name="toTime" // Use a unique name for each input
                              //   value={row.toTime}
                              onChange={(e) => handleInputChange(e, index)}
                              {...register(`selectedDays[${index}].toTime`)}
                            />
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
              <div className="m-t-20 text-center">
                <motion.button
                  className="btn btn-primary submit-btn"
                  onClick={handleSubmit(onSubmit)}
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Create Clinic
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
