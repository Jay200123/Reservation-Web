import ImageOne from "../../assets/ReservationOne.avif";
import { useStore } from "../../@state/store";
import { useFormik } from "formik";
import type { SignUpFormik } from "../../@types";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../@validations";
import { motion } from "motion/react";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function SignUp() {
    const navigate = useNavigate();

    const [isPasswordShow, setIsPasswordShow] = useState(false);


    const { register } = useStore();

    const formik = useFormik<SignUpFormik>({
        initialValues: {
            username: "",
            password: "",
            fullname: "",
            email: "",
            contact_number: "",
            address: "",
            city: "",
            image: [],
        },
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            try {
                const formdata = new FormData();

                formdata.append("username", formik.values.username);
                formdata.append("password", formik.values.password);
                formdata.append("fullname", formik.values.fullname);
                formdata.append("email", formik.values.email);
                formdata.append("contact_number", formik.values.contact_number);
                formdata.append("address", formik.values.address);
                formdata.append("city", formik.values.city);
                values.image.forEach((file) => {
                    formdata.append("image", file)
                })

                await register(formdata);
                toast.success("Registered Successfully.");
                navigate("/signin");
            } catch (err: any) {
                if (err.code == "ERR_NETWORK") {
                    toast.error("We're having trouble connecting to the server. Please try again later.");
                }
                toast.error(err.response.data.message);
            }
        }
    });

    const signin = () => {
        navigate("/signin");
    }

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
                            <label htmlFor="fullname">Fullname</label>
                            <div className="relative">
                                <i className="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.fullname}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="John Doe" />
                            </div>
                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.fullname && formik.errors.fullname && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.fullname}
                                    </motion.p>
                                )}
                            </div>
                        </div>


                        <div className="flex flex-col p-2.5">
                            <label htmlFor="username">Username</label>
                            <div className="relative">
                                <i className="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="john123" />
                            </div>
                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.username && formik.errors.username && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.username}
                                    </motion.p>
                                )}
                            </div>
                        </div>


                        <div className="flex flex-col p-2.5">
                            <label htmlFor="password" className="mb-1 text-gray-700 font-medium">
                                Password
                            </label>

                            <div className="relative">
                                {/* Left Lock Icon */}
                                <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

                                {/* Password Input */}
                                <input
                                    type={isPasswordShow ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="•••••••"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="p-2 border border-gray-400 w-full rounded-md pr-10 pl-10 focus:outline-none focus:border-[#d4af37] transition-all duration-300"
                                />

                                {/* Show / Hide Icon */}
                                <div
                                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#d4af37] cursor-pointer transition-colors duration-200"
                                >
                                    {isPasswordShow ? (
                                        <FaRegEye size={18} />
                                    ) : (
                                        <FaRegEyeSlash size={18} />
                                    )}
                                </div>
                            </div>

                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.password && formik.errors.password && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.password}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="email">Email</label>
                            <div className="relative">
                                <i className="fa-regular fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="john.doe@gmail.com" />
                            </div>
                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.email && formik.errors.email && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.email}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="contact_number">Contact Number</label>
                            <div className="relative">
                                <i className="fa-solid fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="contact_number"
                                    name="contact_number"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.contact_number}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="09123456789" />
                            </div>
                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.contact_number && formik.errors.contact_number && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.contact_number}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="address">Address</label>
                            <div className="relative">
                                <i className="fa-solid fa-location-dot absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="Block 115 Lot 8 Juan Street, etc." />
                            </div>
                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.address && formik.errors.address && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.address}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="city">City</label>
                            <div className="relative">
                                <i className="fa-solid fa-city absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="Taguig City..." />
                            </div>
                            <div className="min-h-[1.25rem] mt-1.5">
                                {formik.touched.city && formik.errors.city && (
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            transition: { duration: 0.5 }
                                        }}
                                        className="text-sm text-red-500">
                                        {formik.errors.city}
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
                                Sign Up
                            </button>
                        </div>

                        <p className="lg:text-lg md:text-base text-sm text-center">Already have an account?<span className="text-[#d4af37] underline ml-1.5 cursor-pointer" onClick={signin}>Sign In</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}