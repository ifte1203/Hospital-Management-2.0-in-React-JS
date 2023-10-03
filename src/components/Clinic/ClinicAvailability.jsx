import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteAvailability,
  updateAvailability,
} from "../../slice/clinicSlice";
import { toast } from "react-toastify";

const ClinicAvailability = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const { clinicDetail, updatedAvailability, deletedAvailability } =
    useSelector((state) => state.clinic);

  useEffect(() => {
    if (clinicDetail) {
      if (clinicDetail.clinic_availabilities.length > 0) {
        return setRows(clinicDetail.clinic_availabilities);
      }
      setRows([{ clinic_avail_id: 0, day: "", fromTime: "", toTime: "" }]);
    }
  }, [clinicDetail]);

  const addRow = (e) => {
    e.preventDefault();
    const newRow = { clinic_avail_id: 0, day: "", fromTime: "", toTime: "" };
    setRows([...rows, newRow]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    // console.log(updatedRows[index]);
    const clinic_avail_id = updatedRows[index].clinic_avail_id;
    updatedRows.splice(index, 1);
    setRows(updatedRows);

    if (clinic_avail_id !== 0) {
      const data = { availabilityIds: clinic_avail_id };
      dispatch(deleteAvailability({ id: clinicDetail.clinic_id, data: data }));
      if (deletedAvailability) {
        toast.success("Clinic Availability Deleted Successfully!");
      }
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    // Parse the field name and subfield name
    const [selectedDaysIndex, subfield] = name
      .match(/\[(\d+)\]\.(\w+)/)
      .slice(1);

    // Create a copy of the rows array
    const updatedRows = [...rows];
    console.log(selectedDaysIndex);

    // Create a new object with updated properties
    updatedRows[selectedDaysIndex] = {
      ...updatedRows[selectedDaysIndex],
      [subfield]: value,
    };

    // Update the state with the modified rows
    setRows(updatedRows);
  };

  function transformAvailability(data) {
    return {
      updatedBy: 1,
      availabilities: data.map(
        ({ clinic_avail_id, from_time, to_time, ...item }) => ({
          ...item,
          availabilityId: clinic_avail_id,
          fromTime: from_time,
          toTime: to_time,
          isUpdate: true,
        })
      ),
    };
  }

  const updateTimeSlot = () => {
    const transformedData = transformAvailability(rows);
    // console.log(transformedData);
    dispatch(
      updateAvailability({ data: transformedData, id: clinicDetail.clinic_id })
    );
    // console.log(updatedAvailability);

    if (updatedAvailability) {
      toast.success("Clinic Availability Updated Successfully!");
      //   navigate("/clinic");
    }
  };

  return (
    <div>
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
                            onChange={(e) => handleInputChange(e, index)}
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
                        </td>

                        <td>
                          <label>From time:&nbsp;</label>
                          <input
                            type="time"
                            name={`selectedDays[${index}].from_time`}
                            value={row.from_time} // Set the input value to the corresponding value in the rows array
                            onChange={(e) => handleInputChange(e, index)}
                          />
                          &nbsp;&nbsp;&nbsp;
                          <label>To time:&nbsp;</label>
                          <input
                            type="time"
                            name={`selectedDays[${index}].to_time`}
                            value={row.to_time} // Set the input value to the corresponding value in the rows array
                            onChange={(e) => handleInputChange(e, index)}
                          />
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
              <div className="text-center">
                <button className="btn btn-primary" onClick={updateTimeSlot}>
                  Update Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicAvailability;
