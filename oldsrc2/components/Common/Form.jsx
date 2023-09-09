import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formValidationSchema from "./ValidationSchema";
const Form = ({ fields, title, onSubmit, btnText }) => {
  // const [formData, setFormData] = useState({});

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(formValidationSchema),
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div>
      <form>
        <div className="row">
          {fields.map((field) => (
            <div className={field.col} key={field.name}>
              <div className="form-group">
                <label>{field.label}:</label>
                {field.type === "text" && (
                  <input
                    type="text"
                    name={field.name}
                    value={field.value}
                    className="form-control"
                    {...register(field.name)}
                  />
                )}
                {field.type === "email" && (
                  <input
                    type="email"
                    name={field.name}
                    className="form-control"
                    {...register(field.name)}
                  />
                )}
                {field.type === "password" && (
                  <input
                    type="password"
                    name={field.name}
                    className="form-control"
                    {...register(field.name)}
                  />
                )}
                {field.type === "number" && (
                  <input
                    type="number"
                    name={field.name}
                    className="form-control"
                    {...register(field.name)}
                  />
                )}
                {field.type === "date" && (
                  <input
                    type="date"
                    name={field.name}
                    className="form-control"
                    {...register(field.name)}
                  />
                )}
                {field.type === "time" && (
                  <input
                    type="time"
                    name={field.name}
                    className="form-control"
                    {...register(field.name)}
                  />
                )}
                {field.type === "radio" && (
                  <input
                    type="radio"
                    name={field.name}
                    value={field.value}
                    {...register(field.name)}
                  />
                )}
                {field.type === "checkbox" && (
                  <input
                    type="checkbox"
                    name={field.name}
                    value={field.value}
                    {...register(field.name)}
                  />
                )}
                {field.type === "file" && (
                  <input
                    type="file"
                    name={field.name}
                    className="form-control"
                    value={field.value}
                    {...register(field.name)}
                  />
                )}
                {field.type === "textarea" && (
                  <textarea
                    name={field.name}
                    className="form-control"
                    rows={"5"}
                    {...register(field.name)}
                  >
                    {field.value}
                  </textarea>
                )}
                <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="m-t-20 text-center">
          <button
            className="btn btn-primary submit-btn"
            onClick={handleSubmit(handleFormSubmit)}
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
