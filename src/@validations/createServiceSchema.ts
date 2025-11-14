import * as yup from "yup";

const createServiceSchema = yup.object({
  service_name: yup.string().required("service_name required"),
  service_price: yup.string().required("service_name required"),
  duration: yup.string().required("duration required"),
  description: yup.string().required("description required"),
});

export { createServiceSchema };
