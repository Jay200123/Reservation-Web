import { useStore } from "../../@state/store";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ImageOne from "../../assets/ReservationOne.avif";
import type { ServiceFormik } from "../../@types";
import { createServiceSchema } from "../../@validations";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";

export default function CreateService() {
    const navigate = useNavigate();

    const { addService } = useStore();

    const formik = useFormik<ServiceFormik>({
        enableReinitialize: true,
        initialValues: {
            service_name: "",
            service_price: 0,
            duration: "",
            description: "",
            image: []
        },
        validationSchema: createServiceSchema,
        onSubmit: async (values) => {
            const formData = new FormData();

            formData.append("service_name", values?.service_name);
            formData.append("service_price", values.service_price.toString());
            formData.append("duration", values.duration);
            formData.append("description", values.description);
            values.image.forEach((file) => {
                formData.append("image", file)
            });

            const result = await addService(formData);

            if (result.status == 201) {
                toast.success(result.message);
                navigate("/services/table")
            } else {
                toast.error("Service update failed.")
            }
        }
    });

    const back = () => {
        window.history.back();
    }


    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            <form onSubmit={formik.handleSubmit} className="lg:w-[70rem] lg:max-h-[65rem] md:w-[60rem] md:h-[62rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                {/* Image Layout */}
                <div className="lg:block lg:w-1/2 md:block md:w-1/2 w-full hidden">
                    <img src={ImageOne} className="w-full h-full object-cover" alt="ImageOne" />
                </div>

                {/* Service Information Layout */}
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center relative">
                    <FaArrowLeft
                        onClick={() => back()}
                        className="absolute top-0 left-0 bottom-0 lg:m-2 md:m-1.5 m-1 lg:text-3xl md:text-2xl text-lg transition-all duration-300 hover:text-[#d4af37] cursor-pointer"
                    />
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">Service Information</h3>
                        <p className="lg:text-base lg:mt-3.5 md:text-sm text-xs text-center">Provide the details of your service below. Clear and accurate information helps customers understand what you offer best.</p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="service_name"
                                    name="service_name"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.service_name || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>

                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.service_name && formik.errors.service_name && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.service_name}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Price</label>
                            <div className="relative">

                                <input
                                    type="text"
                                    id="service_price"
                                    name="service_price"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.service_price || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>

                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.service_price && formik.errors.service_price && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.service_price}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Duration</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.duration || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>

                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.duration && formik.errors.duration && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.duration}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Description</label>
                            <div className="relative">
                                <textarea
                                    id="description"
                                    name="description"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.description || ""}
                                    rows={6}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
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
                                Create Service
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}