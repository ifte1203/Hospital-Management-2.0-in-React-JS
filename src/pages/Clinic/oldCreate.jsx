import React, { useState } from "react";
import Form from "../../components/Common/Form";
import Layout from "../../components/Layout";

const Create = () => {
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

  const addRow = (day) => {
    const updatedTableData = [...tableData];
    const dayIndex = updatedTableData.findIndex((item) => item.day === day);
    updatedTableData[dayIndex].timings.push({ from: "", to: "" });
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
  };

  const handleFormSubmit = (data) => {
    // Handle form submission for the first component
    console.log("Form data:", data);
  };

  const [clinicAvailability, setClinicAvailability] = useState([]);

  // ...

  const handleTimeChange = (day, index, field, value) => {
    const updatedTableData = [...tableData];
    const dayIndex = updatedTableData.findIndex((item) => item.day === day);

    if (dayIndex !== -1) {
      updatedTableData[dayIndex].timings[index][field] = value;
      setTableData(updatedTableData);
    }
  };

  const handleCreateClinicClick = (e) => {
    e.preventDefault();
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
  };

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
                      {tableData.map((item, dayIndex) => (
                        <tr key={item.day}>
                          <td width="150px">
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                name={item.day}
                                className="classInputCheckbox classClinicTiming"
                              />
                              &nbsp; {item.day}
                            </label>
                          </td>
                          <td width="350px">
                            {item.timings.map((timing, index) => (
                              <div key={index}>
                                <span>From</span>&nbsp;
                                <input
                                  type="time"
                                  name={`from-${item.day}-${index}`}
                                  value={timing.from}
                                  onChange={(e) =>
                                    handleTimeChange(
                                      item.day,
                                      index,
                                      "from",
                                      e.target.value
                                    )
                                  }
                                />
                                &nbsp;<span>To</span>&nbsp;
                                <input
                                  type="time"
                                  name={`to-${item.day}-${index}`}
                                  value={timing.to}
                                  onChange={(e) =>
                                    handleTimeChange(
                                      item.day,
                                      index,
                                      "to",
                                      e.target.value
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
                  onClick={handleCreateClinicClick}
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
