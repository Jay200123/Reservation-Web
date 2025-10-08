import * as yup from "yup";

const signInSchema = yup.object({
  username: yup.string().required("username required"),
  password: yup
    .string()
    .min(6, "password must be atleast 6 characters.")
    .required("password required"),
});

export { signInSchema } ;
