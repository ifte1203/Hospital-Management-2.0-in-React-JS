import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Clinic Name is required"),
  registrationNo: Yup.string().required("Registration Number is required"),
  clinicLoyaltyCentreNo: Yup.string(),
  clinicType: Yup.string().required("Clinic Type is required"),
  phone: Yup.string().required("pls enter phone number"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  telemedicine: Yup.string().required("pls select"),
  specialist: Yup.string().required("pls select"),
  labTest: Yup.string().required("pls select"),
  doctorPresence: Yup.string().required("pls select"),
  address: Yup.string().required("pls enter address"),
  // area: Yup.string().required("pls enter area"),
  // country: Yup.string().required("select country"),
  // state: Yup.string().required("select state"),
  cityName: Yup.string().required("select city"),
  pincode: Yup.string()
    .typeError("Pincode must be a number")
    .required("Please enter a pin code"),

  mobileNumber: Yup.array()
    .of(
      Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Please enter a mobile number")
    )
    .min(1, "Please enter at least one mobile number"),
  website: Yup.string().required("pls enter website URL"),
  locationMapUrl: Yup.string().required("pls enter location"),
  logo: Yup.string()
    .required("Please select a logo")
    .test("required", "You need to provide a file", (file) => {
      return file && file.length;
    }),
  timeSlot: Yup.string()
    .typeError("timeslot must be a number")
    .required("Please select"),
  gstinNo: Yup.string().required("pls enter gst number"),

  availabilities: Yup.array()
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