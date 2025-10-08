import ImageOne from "../../assets/ReservationOne.avif";
import type { SignInFormik } from "../../@types";
import { useStore } from "../../@state/store";
import { useFormik } from "formik";
import { signInSchema } from "../../@validations";
import { motion } from "motion/react";

export default function SignUp() {
    const { login } = useStore();

    const formik = useFormik<SignInFormik>({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: signInSchema,
        onSubmit: async (values: SignInFormik) => {
            try {
                const result = await login(values.username, values.password);
                alert(`${result.message}`);
            } catch (err: any) {
                alert(err.response.data.message);
            }

        }
    });

    return (
        <div className="min-h-screen flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37]">
            <div className="lg:w-[70rem] lg:h-[55rem] md:w-[60rem] md:h-[50rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                <div className="lg:block lg:w-1/2 md:block md:w-1/2 w-full hidden">
                    <img src={ImageOne} className="w-full h-full object-cover" alt="ImageOne" />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <form onSubmit={formik.handleSubmit} className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">Create Account</h3>
                        <p className="lg:text-base md:text-sm text-xs text-center">Join us today and start your journey.</p>

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
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    placeholder="*****" />
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
                            <button type="submit"
                                className="rounded-2xl border border-white bg-[#d4af37] text-white lg:text-lg md:text-base text-base p-1.5 lg:px-2.5 lg:py-2.5 w-full md:px-1.5 md:py-1.5 lg:[8rem] lg:font-medium md:mb-2.5 mb-1.5 cursor-pointer">Sign Up</button>
                        </div>

                        <p className="lg:text-lg md:text-base text-sm text-center">Already have an account?<span className="text-[#d4af37] underline ml-1.5">Sign In</span></p>
                    </form>
                </div>

            </div>
        </div>
    )
}