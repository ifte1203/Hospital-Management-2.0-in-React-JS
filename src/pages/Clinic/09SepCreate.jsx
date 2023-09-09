import React, { useState } from "react";
import Form from "../../components/Common/Form";
import Layout from "../../components/Layout";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formValidationSchema from "../../components/Common/formValidationSchema";

const Create = () => {
  const [mobileNumbers, setMobileNumbers] = useState([""]);

  const initialSelectedDays = [];
  const [selectedDays, setSelectedDays] = useState(initialSelectedDays);
  console.log(selectedDays);

  const handleDayClick = (day) => {
    setSelectedDays((prevSelectedDays) => {
      const dayIndex = prevSelectedDays.findIndex(
        (selectedDay) => selectedDay.day === day
      );

      if (dayIndex !== -1) {
        // If the day is already selected, remove it
        prevSelectedDays.splice(dayIndex, 1);
      } else {
        // If the day is not selected, add it
        prevSelectedDays.push({
          day,
          fromTime: "", // You can set default values for fromTime and toTime here
          toTime: "",
        });
      }

      return [...prevSelectedDays];
    });
  };
  const [tableData, setTableData] = useState([
    {
      day: "Monday",
      timings: [{ from: "", to: "" }],
    },
    {
      day: "Tuesday",
      timings: [{ from: "", to: "" }],
    },
    {
      day: "Wednesday",
      timings: [{ from: "", to: "" }],
    },
    {
      day: "Thursday",
      timings: [{ from: "", to: "" }],
    },
    {
      day: "Friday",
      timings: [{ from: "", to: "" }],
    },
    {
      day: "Satuday",
      timings: [{ from: "", to: "" }],
    },
    {
      day: "Sunday",
      timings: [{ from: "", to: "" }],
    },
    // Add initial data for other days here
  ]);
  const addMobileNumber = () => {
    setMobileNumbers([...mobileNumbers, ""]); // Add a new empty mobile number field
  };

  const handleMobileNumberChange = (index, value) => {
    const updatedMobileNumbers = [...mobileNumbers];
    updatedMobileNumbers[index] = value;
    setMobileNumbers(updatedMobileNumbers);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      selectedDays: [],
      mobile: [],
    },
  });

  // const addRow = (day) => {
  //   const updatedTableData = [...tableData];
  //   const dayIndex = updatedTableData.findIndex((item) => item.day === day);
  //   updatedTableData[dayIndex].timings.push({ from: "", to: "" });
  //   setTableData(updatedTableData);
  // };

  const addRow = (day) => {
    const updatedTableData = [...tableData];
    const dayIndex = updatedTableData.findIndex((item) => item.day === day);
    console.log(dayIndex);

    if (dayIndex !== -1) {
      // If the day already exists, add a new row with empty values
      const newIndex = updatedTableData[dayIndex].timings.length;
      console.log(newIndex);
      updatedTableData[dayIndex].timings.push({ from: "", to: "" });
      // handleTimeChange(day, newIndex, "fromTime", "0:00");
      // handleTimeChange(day, newIndex, "toTime", "0:00");
    } else {
      // If the day doesn't exist, create a new day with the first row
      updatedTableData.push({ day: day, timings: [{ from: "", to: "" }] });
      handleTimeChange(day, 0, "fromTime", "");
      handleTimeChange(day, 0, "toTime", "");
    }

    // Create a new object with empty time values in selectedDays
    setSelectedDays((prevSelectedDays) => [
      ...prevSelectedDays,
      { day: day, fromTime: "", toTime: "" },
    ]);

    setTableData(updatedTableData);
  };
  const deleteRow = (day, index) => {
    const updatedTableData = [...tableData];
    const dayIndex = updatedTableData.findIndex((item) => item.day === day);

    // Check if there is more than one timing record before allowing deletion
    if (updatedTableData[dayIndex].timings.length > 1) {
      updatedTableData[dayIndex].timings.splice(index, 1);
      setTableData(updatedTableData);
    } else {
      alert("You cannot delete the last timing record for " + day);
    }

    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.length > 1) {
        return prevSelectedDays.slice(0, -1); // Remove the last selected day
      } else {
        return prevSelectedDays;
      }
    });
  };

  const handleFormSubmit = (data) => {
    // Handle form submission for the first component
    console.log("Form data:", data);
  };

  const [clinicAvailability, setClinicAvailability] = useState([]);

  // const handleTimeChange = (day, index, field, value) => {
  //   console.log("im updating");
  //   console.log(day);
  //   console.log(index);
  //   setSelectedDays((prevSelectedDays) => {
  //     const dayIndex = prevSelectedDays.findIndex(
  //       (selectedDay) => selectedDay.day === day
  //     );

  //     if (dayIndex !== -1) {
  //       // Copy the selected day object
  //       const updatedDay = { ...prevSelectedDays[dayIndex] };

  //       // Update the specific field (fromTime or toTime)
  //       updatedDay[field] = value;

  //       // Update the selected day in the array
  //       prevSelectedDays[dayIndex] = updatedDay;
  //     }

  //     return [...prevSelectedDays];
  //   });
  // };
  // const handleTimeChange = (day, index, field, value) => {
  //   console.log(index);
  //   setSelectedDays((prevSelectedDays) => {
  //     // Find the index of the day in the selectedDays array
  //     const dayIndex = prevSelectedDays.findIndex(
  //       (selectedDay) => selectedDay.day === day
  //     );

  //     if (dayIndex !== -1) {
  //       // Create a copy of the selected day object
  //       const updatedDay = { ...prevSelectedDays[dayIndex] };

  //       // Update the specific field (fromTime or toTime)
  //       updatedDay[field] = value;

  //       // Create a new array with the updated object
  //       const updatedSelectedDays = [...prevSelectedDays];
  //       updatedSelectedDays[dayIndex] = updatedDay;

  //       // Return the updated selectedDays array
  //       return updatedSelectedDays;
  //     }

  //     // If the day is not found, return the previous state
  //     return prevSelectedDays;
  //   });
  // };
  const handleTimeChange = (day, index, field, value) => {
    setSelectedDays((prevSelectedDays) => {
      const updatedSelectedDays = prevSelectedDays.map(
        (selectedDay, selectedIndex) => {
          if (selectedDay.day === day) {
            const updatedDay = { ...selectedDay };

            // Ensure the field exists and initialize it as an empty string if it doesn't
            if (typeof updatedDay[field] !== "string") {
              updatedDay[field] = "";
            }

            // Set the value at the specified index
            if (selectedIndex === index) {
              updatedDay[field] = value;
            }

            return updatedDay;
          }
          return selectedDay;
        }
      );

      return updatedSelectedDays;
    });
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
                      Clinic Type&nbsp;<span className="text-danger">*</span>
                    </label>
                    <select
                      name="clinic_type"
                      className="form-control"
                      {...register("clinic_type")}
                    >
                      <option value="">Select Clinic Type</option>
                      <option value="Clinic">Clinic</option>
                      <option value="Pathology Lab">Pathology Lab</option>
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
                          {...register(`mobile[${index}]`)}
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
                  <p style={{ color: "red" }}>{errors.mobile?.message}</p>
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
                          className="form-control"
                          {...register("image")}
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
                      {...register("location")}
                    />
                  </div>
                  <p style={{ color: "red" }}>{errors.location?.message}</p>
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
                      {...register("gst")}
                    />
                  </div>
                  <p style={{ color: "red" }}>{errors.gst?.message}</p>
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
                      {tableData.map((item, dayIndex) => (
                        <tr key={item.day}>
                          <td width="150px">
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                // name={`selectedDays[${dayIndex}].day`}
                                value={item.day}
                                {...register(`selectedDays[${dayIndex}].day`)}
                                className="classInputCheckbox classClinicTiming"
                                onChange={() => handleDayClick(item.day)}
                              />
                              &nbsp; {item.day}
                            </label>
                            <p style={{ color: "red" }}>
                              {errors.selectedDays?.message}
                            </p>
                          </td>
                          <td width="350px">
                            {item.timings.map((timing, index) => (
                              <div key={index}>
                                {console.log(index)}
                                <span>From</span>&nbsp;
                                <input
                                  type="time"
                                  name={`selectedDays[${dayIndex}].fromTime[${index}]`}
                                  value={timing.fromTime}
                                  {...register(
                                    `selectedDays[${dayIndex}].fromTime[${index}]`
                                  )}
                                  onChange={(e) =>
                                    handleTimeChange(
                                      item.day,
                                      index,
                                      "fromTime",
                                      e.target.value
                                    )
                                  }
                                  disabled={
                                    !selectedDays.some(
                                      (selectedDay) =>
                                        selectedDay.day === item.day
                                    )
                                  }
                                />
                                &nbsp;<span>To</span>&nbsp;
                                <input
                                  type="time"
                                  name={`selectedDays[${dayIndex}].toTime[${index}]`}
                                  {...register(
                                    `selectedDays[${dayIndex}].toTime[${index}]`
                                  )}
                                  value={timing.toTime}
                                  onChange={(e) =>
                                    handleTimeChange(
                                      item.day,
                                      index,
                                      "toTime",
                                      e.target.value
                                    )
                                  }
                                  disabled={
                                    !selectedDays.some(
                                      (selectedDay) =>
                                        selectedDay.day === item.day
                                    )
                                  }
                                />
                                &nbsp;
                                {index > 0 && ( // Render delete button only for rows after the first one
                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteRow(item.day, index)}
                                  >
                                    <i className="fa fa-close"></i>
                                  </button>
                                )}
                              </div>
                            ))}
                          </td>
                          <td width="90px">
                            <center>
                              <button
                                type="button"
                                name={`${item.day}TimeBtn`}
                                className="btn btn-warning classInputButton"
                                onClick={() => addRow(item.day)}
                                disabled={
                                  !selectedDays.some(
                                    (selectedDay) =>
                                      selectedDay.day === item.day
                                  )
                                }
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </center>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
          <div className="col-lg-8 offset-lg-2">
            <div className="time-slot">
              <h4>Clinic Availability</h4>
              <ul>
                {clinicAvailability.map((item, index) => (
                  <li key={index}>
                    <strong>{item.day}:</strong>
                    {item.timings.map((timing, index) => (
                      <span key={index}>
                        &nbsp;From: {timing.from}, To: {timing.to}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
