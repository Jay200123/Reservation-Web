import { useStore } from "../../@state/store"
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import type { EditProfileFormik } from "../../@types";
import { toast } from "react-toastify";

export default function EditProfile() {
    const { id } = useParams();

    const { user, getUserById, updateUserById } = useStore();

    const { data } = useQuery({
        queryKey: ["user"],
        queryFn: () => getUserById(user?._id!!),
        enabled: !!user?._id,
        refetchOnMount: false,
        refetchInterval: false,
        refetchOnWindowFocus: false
    });

    const user_details = data?.details;

    const formik = useFormik<EditProfileFormik>({
        enableReinitialize: true,
        initialValues: {
            fullname: user_details?.fullname || "",
            email: user_details?.email || "",
            contact_number: user_details?.contact_number || "",
            address: user_details?.address || "",
            city: user_details?.city || "",
            image: [],
        },
        onSubmit: async (values) => {
            const formData = new FormData();

            formData.append("fullname", formik.values.fullname);
            formData.append("email", formik.values.email);
            formData.append("address", formik.values.address);
            formData.append("city", formik.values.city);
            values?.image.forEach((file) => {
                formData.append("image", file);
            });

            try {
                await updateUserById(id!, formData);
                toast.success("Information updated successfully.")
            } catch (err) {
                toast.error("Something went wrong, please try again later.")
            }
        }
    });

    return (
        <>
            <div className="p-6">
                {/* Profile Page Header */}
                <div>
                    <h3 className="font-semibold text-3xl text-gray-800">
                        Welcome Back, <span className="text-yellow-600">{user_details?.user.username}</span>!
                    </h3>
                    {/* Profile Page Paragraphs */}
                    <p className="text-gray-600 mt-2">
                        Welcome back! Here’s your personal space where you can view and manage your account details,
                        update your profile, and keep track of your latest activity.
                    </p>
                </div>

                {/* Edit Information Card */}
                <form onSubmit={formik.handleSubmit} className="mt-8 bg-white shadow-md rounded-xl p-6">
                    <h4 className="font-semibold text-2xl text-gray-800 mb-4 border-b pb-2">
                        Update Information Details
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-4">
                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.fullname || ""}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email || ""}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Contact Number</label>
                            <input
                                type="text"
                                id="contact_number"
                                name="contact_number"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.contact_number || ""}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="grid  grid-cols-1 gap-6 lg:mt-4">
                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.address || ""}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-4">
                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.city || ""}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-4">
                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Image Upload</label>
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

                    <div className="w-full flex justify-end items-center ">
                        <button
                            className="rounded-2xl border border-white bg-[#d4af37] text-white 
                                            text-xs md:text-sm lg:text-base font-medium
                                            px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5
                                            w-auto lg:w-50
                                            mb-1.5 md:mb-2.5
                                            transition-all duration-200 hover:bg-[#c9a128]"
                        >
                            Update Information
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
};

