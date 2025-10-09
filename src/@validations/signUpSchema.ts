import * as yup from "yup";

const signUpSchema = yup.object({
  fullname: yup.string().required("Fullname required"),
  username: yup.string().required("Username required"),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 characters.")
    .required("Password required"),
  email: yup.string().email("Invalid Email").required("Email required"),
  contact_number: yup
    .string()
    .required("Contact Number is required")
    .matches(
      /^09\d{9}$/,
      "Contact number must start with 09 and be 11 digits long"
    ),
  address: yup.string().required("Address required"),
  city: yup.string().required("City required"),
});

export { signUpSchema };
