import ImageOne from "../../assets/ReservationOne.avif";
import { useStore } from "../../@state/store";
import { useFormik } from "formik";
import type { RatingsFormik } from "../../@types";
import { useNavigate } from "react-router-dom";
import { createRatingSchema } from "../../@validations";
import { motion } from "motion/react";
import { toast } from "react-toastify";

export default function AddRating() {

    const navigate = useNavigate();


    const { addRating } = useStore();

    const formik = useFormik<RatingsFormik>({
        initialValues: {
            user: "",
            reservation: "",
            description: "",
            rating: 0,
            image: [],
        },
        validationSchema: createRatingSchema,
        onSubmit: async (values) => {
            try {
                const formdata = new FormData();

                formdata.append("username", formik.values.description);
                formdata.append("password", formik.values.rating.toString());
                values.image.forEach((file) => {
                    formdata.append("image", file)
                });

                await addRating(formdata);
                toast.success("Rating created Successfully.");
                navigate("/signin");
            } catch (err: any) {
                if (err.code == "ERR_NETWORK") {
                    toast.error("We're having trouble connecting to the server. Please try again later.");
                }
                toast.error(err.response.data.message);
            }
        }
    });

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            <div className="lg:w-[70rem] lg:h-[65rem] md:w-[60rem] md:h-[62rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                <div className="lg:block lg:w-1/2 md:block md:w-1/2 w-full hidden">
                    <img src={ImageOne} className="w-full h-full object-cover" alt="ImageOne" />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <form onSubmit={formik.handleSubmit} className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">Create Account</h3>
                        <p className="lg:text-base md:text-sm text-xs text-center">Join us today and start your journey.</p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Description</label>
                            <div className="relative">
                                <i className="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="John Doe" />
                            </div>
                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.description && formik.errors.description && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.description}
                                    </motion.p>
                                )}
                            </div>
                        </div>


                        <div className="flex flex-col p-2.5">
                            <label htmlFor="rating">Ratings</label>
                            <div className="relative">
                                <i className="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="rating"
                                    name="rating"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.rating}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="john123" />
                            </div>
                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.rating && formik.errors.rating && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.rating}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="image">Image Upload</label>
                            <div>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    multiple
                                    onChange={(e) => {
                                        const files = Array.from(e.currentTarget.files || []);
                                        formik.setFieldValue("image", files)
                                    }}
                                    className="cursor-pointer p-1.5"
                                />
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center p-2.5">
                            <button
                                type="submit"
                                disabled={!formik.isValid || formik.isSubmitting}
                                className={`rounded-2xl border border-white bg-[#d4af37] text-white lg:text-lg md:text-base text-base p-1.5 lg:px-2.5 lg:py-2.5 w-full md:px-1.5 md:py-1.5 lg:[8rem] lg:font-medium md:mb-2.5 mb-1.5 cursor-pointer ${!formik.isValid && "cursor-not-allowed opacity-50"}`}>
                                Create Rating
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}