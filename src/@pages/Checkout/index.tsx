import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";

export default function Checkout() {

    const {
        user,
        services,
        reservation_date,
        timeslot,
        getUserById,
        getTimeslotById
    } = useStore();

    const { data } = useQuery({
        queryKey: ["user"],
        queryFn: () => getUserById(user?._id!),
        enabled: !!user?._id,
        refetchInterval: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    const user_details = data?.details;

    const { data: timeslotData } = useQuery({
        queryKey: ["user"],
        queryFn: () => getTimeslotById(timeslot?.toString()!),
        enabled: !!timeslot,
        refetchInterval: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    const timeslot_details = timeslotData?.details;

    let checkoutDate;

    let formatted;

    if (reservation_date) {
        checkoutDate = new Date(reservation_date.toString());

        formatted = checkoutDate.toLocaleDateString("en-US", {
            weekday: "long", // day
            year: "numeric", // year
            month: "long",   // month
            day: "numeric",  // date
        });
    };

    const subtotal = 750;
    const total = 750;

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            <div className="lg:w-[65rem] lg:h-[50rem] md:w-[55rem] md:h-[40rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-3xl md:text-2xl text-lg text-center font-medium">Billing Details</h3>
                        <p className="lg:text-base md:text-sm text-xs text-center">Please check your billing information below to ensure a smooth and secure checkout process.</p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Fullname</label>
                            <div className="relative">
                                <i className="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    readOnly
                                    value={user_details?.fullname || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="John Doe" />
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
                                    readOnly
                                    value={user_details?.address || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="John Doe" />
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
                                    readOnly
                                    value={user_details?.city || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="John Doe" />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="contact_number">Phone Number</label>
                            <div className="relative">
                                <i className="fa-solid fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="contact_number"
                                    name="contact_number"
                                    readOnly
                                    value={user_details?.contact_number || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="John Doe" />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="email">Email</label>
                            <div className="relative">
                                <i className="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    readOnly
                                    value={user_details?.email || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10 focus:outline-none focus:border-[#d4af37]"
                                    placeholder="John Doe" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtotal Container */}
                <div className="lg:w-1/2 md:w-1/2 w-full lg:p-3 md:p-2.5 p-2 flex flex-col justify-between">
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-lg md:text-base text-sm text-left font-medium">Services</h3>
                        {/* Service Checkout Containe */}
                        {services.map((service) => (
                            <div
                                key={service._id}
                                className="w-full flex items-center justify-between bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 p-3 mb-3"
                            >
                                {/* Service Image */}
                                <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                    <img
                                        src={service.image[Math.floor(Math.random() * service.image.length)].url}
                                        alt="Service"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Service Info */}
                                <div className="flex-1 px-4 flex flex-col justify-center">
                                    <h3 className="font-semibold text-gray-800 text-base leading-tight">
                                        {service.service_name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{service.duration}</p>
                                </div>

                                {/* Price */}
                                <div className="text-right">
                                    <p className="font-bold text-gray-800 text-lg">
                                        ₱{service.service_price.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div>
                        <h3 className="lg:text-lg md:text-base text-sm text-left font-medium">Reservation Date</h3>
                        <p className="lg:text-base md:text-sm text-xs">{formatted} <span>{timeslot_details?.start_time} - {timeslot_details?.end_time}</span></p>
                    </div>

                    {/* Mock Subtotal UI */}
                    <div className="border-t border-gray-300 pt-4">
                        <div className="space-y-2 text-sm md:text-base">
                            <div className="flex justify-between">
                                <p>Subtotal:</p>
                                <p>₱{subtotal.toLocaleString()}</p>
                            </div>

                            <div className="flex justify-between">
                                <p>Shipping:</p>
                                <p className="text-green-600 font-medium">Free</p>
                            </div>

                            <hr className="my-2 border-gray-300" />

                            <div className="flex justify-between font-semibold text-lg">
                                <p>Total:</p>
                                <p>₱{total.toLocaleString()}</p>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-5 space-y-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="paymaya"
                                    className="accent-[#0f9d58] w-4 h-4"
                                />
                                <span className="font-medium">PayMaya</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    className="accent-black w-4 h-4"
                                />
                                <span className="font-medium">Cash on Delivery</span>
                            </label>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center p-2.5">
                        <button
                            type="submit"
                            className={`rounded-2xl border border-white bg-[#d4af37] text-white lg:text-lg md:text-base text-base p-1.5 lg:px-2.5 lg:py-2.5 w-full md:px-1.5 md:py-1.5 lg:[8rem] lg:font-medium md:mb-2.5 mb-1.5 cursor-pointer`}>
                            Place Reservation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}