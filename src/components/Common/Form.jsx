import React from "react";
import { useState } from "react";

const Form = ({ fields, title, onSubmit, btnText }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            {console.log()}
            <label>{field.label}:</label>
            {field.type === "text" && (
              <input
                type="text"
                name={field.name}
                className="form-control"
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              />
            )}
            {field.type === "number" && (
              <input
                type="number"
                name={field.name}
                className="form-control"
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              />
            )}
            {field.type === "date" && (
              <input
                type="date"
                name={field.name}
                className="form-control"
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              />
            )}
            {field.type === "time" && (
              <input
                type="time"
                name={field.name}
                className="form-control"
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              />
            )}
            {field.type === "radio" && (
              <input
                type="radio"
                name={field.name}
                value={field.value}
                checked={formData[field.name] === field.value}
                onChange={handleInputChange}
              />
            )}
            {field.type === "checkbox" && (
              <input
                type="checkbox"
                name={field.name}
                value={field.value}
                checked={formData[field.name] === field.value}
                onChange={handleInputChange}
              />
            )}
            {/* Add more cases for other input types */}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default Form;
