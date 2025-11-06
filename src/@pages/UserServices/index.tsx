import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserServices() {
    const navigate = useNavigate();

    const { getAllServices } = useStore();

    const { data } = useQuery({
        queryKey: ["services"],
        queryFn: getAllServices,
    });

    const services = data?.details ?? [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-8 relative">
            <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-2">
                <h3
                    className="lg:text-2xl md:text-lg text-base cursor-pointer hover:text-[#c9a128] transition-all duration-300"
                    onClick={() => navigate("/")}
                >
                    <FaArrowLeft />
                </h3>

                <div
                    onClick={() => navigate("/reservation/forms")}
                    className="relative flex items-center gap-1 cursor-pointer px-3 py-1 transition-all duration-300 hover:text-[#d4af37]"
                >
                    <i className="fa-solid fa-calendar mr-1"></i>
                    Reservations
                    <span className="absolute -top-2 -right-2 mt-1 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                        {services.length}
                    </span>
                </div>
            </div>

            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                Our Services
            </h3>

            <div className="w-full flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full">
                    {services.map((service) => (
                        <div
                            key={service._id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Image */}
                            <div className="w-full h-56 md:h-60 lg:h-64 overflow-hidden">
                                <img
                                    src={
                                        service.image[
                                            Math.floor(Math.random() * service.image.length)
                                        ]?.url
                                    }
                                    alt={service.service_name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col justify-between flex-grow p-5">
                                <h3 className="text-lg font-medium text-gray-800 truncate">
                                    {service.service_name}
                                </h3>

                                <div className="flex justify-between items-center mt-3">
                                    <span className="text-indigo-600 font-semibold text-base">
                                        ₱{service.service_price}
                                    </span>
                                    <button className="bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
