import * as yup from "yup";

const createRatingSchema = yup.object({
  description: yup.string().required("description required"),
  rating: yup.string().required("rating required"),
});

export { createRatingSchema };
