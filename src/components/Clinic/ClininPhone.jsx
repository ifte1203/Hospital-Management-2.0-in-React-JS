import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact, updateContact } from "../../slice/clinicSlice";
import { toast } from "react-toastify";

const ClininPhone = () => {
  const dispatch = useDispatch();
  const [mobileNumbers, setMobileNumbers] = useState([]);

  const { clinicDetail, updatedContact, deletedContact } = useSelector(
    (state) => state.clinic
  );

  useEffect(() => {
    if (clinicDetail) {
      if (clinicDetail.clinic_contacts.length > 0) {
        return setMobileNumbers(clinicDetail.clinic_contacts);
      }
      return setMobileNumbers([{ mobile_id: 0, mobile_number: "" }]);
    }
  }, [clinicDetail]);

  const addMobileNumber = () => {
    setMobileNumbers([...mobileNumbers, { mobile_id: 0, mobile_number: "" }]); // Add a new empty mobile number field
    console.log(mobileNumbers);
  };

  const removeMobileNumber = (index) => {
    const updatedMobileNumbers = [...mobileNumbers];
    console.log(updatedMobileNumbers[index].mobile_id);
    const id = updatedMobileNumbers[index].mobile_id;
    updatedMobileNumbers.splice(index, 1); // Remove the mobile number at the specified index
    setMobileNumbers(updatedMobileNumbers);

    if (id !== 0) {
      dispatch(deleteContact(id));
      if (deletedContact) {
        toast.success("Clinic Phone Deleted Successfully!");
      }
    }
  };

  const handleMobileNumberChange = (index, value) => {
    // Format the mobile number
    const formattedValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    // Create a copy of the mobileNumbers array
    const updatedMobileNumbers = [...mobileNumbers];

    updatedMobileNumbers[index] = {
      mobile_id: updatedMobileNumbers[index].mobile_id,
      mobile_number: formattedValue,
    };

    setMobileNumbers(updatedMobileNumbers);
  };

  function transformMobile(data) {
    return {
      updatedBy: 1,
      contacts: data.map(({ mobile_id, mobile_number, ...item }) => ({
        ...item,
        mobileId: mobile_id,
        mobileNumber: mobile_number,
        isUpdate: true,
      })),
    };
  }

  const updateMobileNumbers = () => {
    const transformedData = transformMobile(mobileNumbers);
    dispatch(
      updateContact({ data: transformedData, id: clinicDetail.clinic_id })
    );

    if (updatedContact) {
      toast.success("Clinic Phone Updated Successfully!");
    }
  };

  return (
    <div>
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
                          name="mobile_number"
                          className="form-control"
                          value={number.mobile_number}
                          onChange={() =>
                            handleMobileNumberChange(index, event.target.value)
                          }
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
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={updateMobileNumbers}>
                Update Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClininPhone;
