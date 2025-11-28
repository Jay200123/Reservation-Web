import { FaStar } from "react-icons/fa";
import { useStore } from "../../@state/store";
import { useEffect } from "react";

export default function ServiceSidebar() {

    const {
        serviceNameFilter,
        servicePriceFilter,
        serviceRatingFilter,
        serviceClearFilter,
    } = useStore();

    useEffect(() => {
        return () => {
            // clears the service filter state after the UserServices page unmounts
            serviceClearFilter();
        }
    }, [serviceClearFilter])


    return (
        <aside className="w-full h-full bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between gap-6 border border-gray-100">
            {/* Search */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Search for a <span className="text-[#c9a128]">Service</span>
                </h3>
                <input
                    type="text"
                    placeholder="Search Service..."
                    id="service_name"
                    name="service_name"
                    onChange={(e) => serviceNameFilter(e.target.value)}
                    className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:text-[#c9a128] placeholder-gray-400 transition-all duration-300"
                />
            </div>

            <hr className="border-gray-200" />

            {/* Filter by Price */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Filter by <span className="text-[#c9a128]">Price</span>
                </h3>
                <div className="flex gap-2">
                    <input
                        type="number"
                        id="min"
                        name="min"
                        onChange={(e) => servicePriceFilter(Number(e.target.value))}
                        placeholder="Min"
                        className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:text-[#c9a128] placeholder-gray-400 transition-all duration-300"
                    />
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Filter by Rating */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    Filter by <span className="text-[#c9a128]">Rating</span>
                </h3>
                <div className="flex flex-col space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div
                            key={rating}
                            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex">
                                {[...Array(rating)].map((_, index) => (
                                    <FaStar key={index} onClick={() => serviceRatingFilter(rating)} className="text-yellow-500" />
                                ))}
                            </div>
                            <span className="text-sm text-[#c9a128]">{rating} Stars</span>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
