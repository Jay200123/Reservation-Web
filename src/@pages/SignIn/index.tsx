import ImageOne from "../../assets/ReservationOne.avif";
import type { SignInFormik } from "../../@types";
import { useStore } from "../../@state/store";
import { useFormik } from "formik";
import { signInSchema } from "../../@validations";
import { motion } from "motion/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function SignUp() {
    const navigate = useNavigate();
    const { login } = useStore();

    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const formik = useFormik<SignInFormik>({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: signInSchema,
        onSubmit: async (values: SignInFormik) => {
            try {
                const result = await login(values.username, values.password);
                toast.success(`${result.message}`);

                if (result.details.user?.role == "USER") {
                    navigate("/profile");
                } else {
                    navigate("/dashboard");
                }
            } catch (err: any) {
                if (err.code == "ERR_NETWORK") {
                    toast.error("We're having trouble connecting to the server. Please try again later.");
                }
                toast.error(err.response.data.message);
            }

        }
    });

    const signup = () => {
        navigate("/signup");
    }


    return (
        <div className="min-h-screen flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37]">
            <div className="lg:w-[70rem] lg:h-[55rem] md:w-[60rem] md:h-[50rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                <div className="lg:block lg:w-1/2 md:block md:w-1/2 w-full hidden">
                    <img src={ImageOne} className="w-full h-full object-cover" alt="ImageOne" />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <form onSubmit={formik.handleSubmit} className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-semibold">
                            Welcome Back
                        </h3>
                        <p className="lg:text-base md:text-sm text-xs text-center text-gray-600">
                            Sign in to access your account and continue your journey with us.
                        </p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="username">Username</label>
                            <div className="relative">
                                <i className="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
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

                        <div className="w-full flex justify-center items-center p-2.5">
                            <button
                                type="submit"
                                disabled={!formik.isValid || formik.isSubmitting}
                                className={`rounded-2xl border border-white bg-[#d4af37] text-white lg:text-lg md:text-base text-base p-1.5 lg:px-2.5 lg:py-2.5 w-full md:px-1.5 md:py-1.5 lg:[8rem] lg:font-medium md:mb-2.5 mb-1.5 cursor-pointer ${!formik.isValid && "cursor-not-allowed opacity-50"}`}>
                                Sign Up
                            </button>
                        </div>

                        <p className="lg:text-lg md:text-base text-sm text-center">Don't have an account yet?<span className="text-[#d4af37] underline ml-1.5 cursor-pointer" onClick={signup}>Sign Up</span></p>
                    </form>
                </div >

            </div >
        </div >
    )
}