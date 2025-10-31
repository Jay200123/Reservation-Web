import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../@state/store";
import ImageOne from "../../assets/ImageFive.jpg"

export default function UserReservations() {

    const { user, getUserReservations } = useStore();

    const { data } = useQuery({
        queryKey: ["user_reservation"],
        queryFn: () => getUserReservations(user?._id!),
        enabled: !!user?._id
    });

    const reservations = data?.details;

    return (
        <div className="min-h-screen lg:p-5 md:p-4 p-3 overflow-y-auto bg-gray-50">
            {/* Header and Filter */}
            <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                    Reservations
                </h3>

                <div className="w-full sm:w-auto max-w-xs">
                    <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Reservation Status
                    </label>
                    <select
                        id="status"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Finished">Finished</option>
                    </select>
                </div>
            </div>

            {/* Reservation Cards */}
            <div className="space-y-4">
                {reservations?.map((reservation) => {

                    const now = new Date();
                    const reservationDate = new Date(reservation.reservation_date);

                    const isReservationMissed = now > reservationDate;

                    return (
                        <div
                            key={reservation._id}
                            className={`w-full border border-gray-300 rounded-lg ${isReservationMissed ? "bg-gray-500" : "bg-[#d4af37]"} overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Section */}
                                <div className="md:w-1/3 lg:w-1/4 h-48 md:h-auto">
                                    <img
                                        src={ImageOne}
                                        alt="Service"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="flex-1 flex flex-col justify-between text-white p-4 md:p-5">
                                    {/* Title & Status */}
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg md:text-xl font-semibold">Test 1</h3>
                                        <span className="border border-white rounded-md px-4 py-2 bg-white text-[#d4af37] font-medium hover:bg-[#d4af37] hover:text-white transition-all duration-300">
                                            {isReservationMissed ? "MISSED " : reservation.status}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-4">
                                        <h4 className="text-lg font-medium mb-1">₱150.00</h4>
                                        <p className="text-sm md:text-base leading-relaxed line-clamp-3">
                                            Experience seamless and reliable service with our team of dedicated professionals.
                                            From start to finish, we ensure every detail of your reservation is handled with care,
                                            providing you with a smooth and stress-free experience.
                                        </p>
                                    </div>

                                    {/* Date & Button */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <p className="text-sm">
                                            {new Date(reservation.reservation_date).toLocaleDateString()}{" "}
                                            <span className="font-medium">(8:00 A.M - 9:00 A.M)</span>
                                        </p>

                                        <button className="border border-white rounded-md px-4 py-2 bg-white text-[#d4af37] font-medium hover:bg-[#d4af37] hover:text-white transition-all duration-300">
                                            Reschedule
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );

}