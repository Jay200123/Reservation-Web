import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";

export default function Profile() {
    const { user, getUserById } = useStore();

    const { data } = useQuery({
        queryKey: ["user"],
        queryFn: () => getUserById(user?._id!!),
        enabled: !!user?._id
    });

    const user_details = data?.details;

    return (
        <>
            <div className="p-6">
                {/* Header */}
                <div>
                    <h3 className="font-semibold text-3xl text-gray-800">
                        Welcome Back, <span className="text-yellow-600">{user_details?.user.username}</span>!
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Welcome back! Here’s your personal space where you can view and manage your account details,
                        update your profile, and keep track of your latest activity.
                    </p>
                </div>

                {/* Card */}
                <div className="mt-8 bg-white shadow-md rounded-xl p-6">
                    <h4 className="font-semibold text-2xl text-gray-800 mb-4 border-b pb-2">
                        Your Primary Information
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-4">
                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Full Name</label>
                            <input
                                type="text"
                                value={user_details?.fullname || ""}
                                readOnly
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Email</label>
                            <input
                                type="text"
                                value={user_details?.email || ""}
                                readOnly
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Contact Number</label>
                            <input
                                type="text"
                                value={user_details?.contact_number || ""}
                                readOnly
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="grid  grid-cols-1 gap-6 lg:mt-4">
                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">Address</label>
                            <input
                                type="text"
                                value={user_details?.address || ""}
                                readOnly
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-4">
                        <div className="flex flex-col p-2.5">
                            <label className="text-sm font-medium text-gray-500 mb-1">City</label>
                            <input
                                type="text"
                                value={user_details?.city || ""}
                                readOnly
                                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="w-full flex justify-end items-center ">
                        <button
                            className="rounded-2xl border border-white bg-[#d4af37] text-white 
                                            text-xs md:text-sm lg:text-base font-medium
                                            px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5
                                            w-auto lg:w-40
                                            mb-1.5 md:mb-2.5
                                            transition-all duration-200 hover:bg-[#c9a128]"
                        >
                            Edit Information
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}