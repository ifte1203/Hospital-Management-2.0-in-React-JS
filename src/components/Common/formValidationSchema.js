import * as Yup from "yup";
const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Clinic Name is required"),
  registration_number: Yup.string().required("Registration Number is required"),
  clinic_loyalty_number: Yup.string(),
  clinic_type: Yup.string().required("Clinic Type is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  alternate_email: Yup.string().email("invalid email"),
  phone: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .test("min-length", "Please enter at least 10 digits", (value) => {
      // Check if the value is null or undefined (nullable), or if it has at least 10 digits
      return (
        value === null || value === undefined || value.toString().length >= 10
      );
    })
    .required("pls enter phone number"),
  // radio: Yup.string().required("pls select"),
  telemedicine: Yup.string().required("pls select"),
  specialist: Yup.string().required("pls select"),
  labTest: Yup.string().required("pls select"),
  doctorPresence: Yup.string().required("pls select"),
  address: Yup.string().required("pls enter address"),
  area: Yup.string().required("pls enter area"),
  country: Yup.string().required("select country"),
  state: Yup.string().required("select state"),
  city: Yup.string().required("select city"),
  pincode: Yup.number()
    .typeError("Pincode must be a number")
    .required("Please enter a pin code"),
  // mobile: Yup.number()
  //   .typeError("Mobile must be a number")
  //   .min(10, "pls enter 10 digits")
  //   .required("Please enter mobile number"),
  mobile: Yup.array()
    .of(
      Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Please enter a mobile number")
    )
    .min(1, "Please enter at least one mobile number"),
  website: Yup.string().required("pls enter website URL"),
  location: Yup.string().required("pls enter location"),
  image: Yup.mixed()
    .required("Please select a logo")
    .test("required", "You need to provide a file", (file) => {
      return file && file.length;
    }),
  timeslot: Yup.number()
    .typeError("timeslot must be a number")
    .required("Please select"),
  gst: Yup.string().required("pls enter gst number"),
  // selectedDays: Yup.array()
  //   .of(Yup.string())
  //   .min(1, "Please select at least one day")
  //   .required("Please select at least one day"),
  selectedDays: Yup.array()
  .of(
    Yup.object().shape({
      day: Yup.string()
        .required("Please select a day")
        .oneOf(
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          "Please select a valid day"
        ),
      fromTime: Yup.string()
        .required("Please select a from time")
        .test("is-string", "Please select a valid from time", (value) => {
          return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
        }),
      toTime: Yup.string()
        .required("Please select a to time")
        .test("is-string", "Please select a valid to time", (value) => {
          return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
        }),
    })
  )
  .min(1, "Please select at least one day"),

  type: Yup.string().required("Please select type"),
});

export default formValidationSchema;