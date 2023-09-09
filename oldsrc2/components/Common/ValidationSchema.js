import * as Yup from "yup";
const formValidationSchema = Yup.object().shape({
  clinic_name: Yup.string().required("Clinic Name is required"),
  registration_number: Yup.string().required("Registration Number is required"),
  clinic_loyalty_number: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("pls enter phone number"),
});

export default formValidationSchema;
