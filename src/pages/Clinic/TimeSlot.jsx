import React, { useState } from "react";
import Layout from "../../components/Layout";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formValidationSchema from "../../components/Common/formValidationSchema";

const TimeSlot = () => {
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

  return (
    <Layout>
      <div className="content">
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
                      <br />
                      <p style={{ color: "red" }}>
                        {errors.selectedDays &&
                          errors.selectedDays[index] &&
                          errors.selectedDays[index].fromTime?.message}
                        <br />
                        {errors.selectedDays &&
                          errors.selectedDays[index] &&
                          errors.selectedDays[index].toTime?.message}
                      </p>
                    </td>
                    <td>
                      <button className="btn btn-warning" onClick={addRow}>
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
    </Layout>
  );
};

export default TimeSlot;
