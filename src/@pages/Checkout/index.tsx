import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import type { ReservationFormik, PaymentType } from "../../@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const navigate = useNavigate();

    const {
        user: userState,
        services,
        reservation_date,
        timeslot: timeslotState,
        payment_type,
        getUserById,
        getTimeslotById,
        createReservation,
        addPaymentType
    } = useStore();

    const { data } = useQuery({
        queryKey: ["user"],
        queryFn: () => getUserById(userState?._id!),
        enabled: !!userState?._id,
        refetchInterval: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    const user_details = data?.details;

    const { data: timeslotData } = useQuery({
        queryKey: ["timeslot"],
        queryFn: () => getTimeslotById(timeslotState?.toString()!),
        enabled: !!timeslotState,
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

    /**
    * Calculates the subtotal price of all selected services.
     *
    * This uses the Array.prototype.reduce() method, which loops through
    * every item in the `services` array and adds up each `price` value.
    *
    * @param {Array} services - An array of service objects, each containing a `price` property.
    * @returns {number} subtotal - The total price of all services combined.
    *
    * Example:
    * const services = [
    *   { price: 100 },
    *   { price: 200 },
    *   { price: 300 }
    * ];
    * const subtotal = services.reduce((total, item) => total + item.price, 0);
    * console.log(subtotal); // Output: 600
    *
    * Explanation:
    * - `reduce()` starts with the initial value of 0.
    * - For each service, it adds `item.service` to the running total.
    * - The final value after looping through all services is the subtotal.
    */
    const subtotal = services.reduce((item, total) => item + total.service_price, 0);

    const total = subtotal;

    const formik = useFormik<ReservationFormik>({
        enableReinitialize: true,
        initialValues: {
            user: userState?._id.toString() || "",
            services: services.map((service) => ({
                service: service._id
            })) || [],
            timeslot: timeslotState?.toString() || "",
            reservation_date: reservation_date || "",
            payment_type: (payment_type as PaymentType) ?? null,
        },

        onSubmit: async (values) => {
            try {
                const result = await createReservation(values);
                toast.success("Reservation successfully placed.")

                if (result.details[0].payment_type == "ONLINE_PAYMENT") {
                    window.location.href = result.details.payment.redirectUrl || ""
                } else {
                    toast.success("Reservation successfully placed.")
                    navigate("/");
                }

            } catch (err: any) {
                if (err.code == "ERR_NETWORK") {
                    toast.error("We're having trouble connecting to the server. Please try again later.");
                }
                toast.error(err.response.data.message);
            }
        }
    });

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-2">
            {/* Form Container */}
            <div className="lg:w-[65rem] lg:h-[50rem] md:w-[55rem] md:h-[44rem] h-full w-full flex lg:flex-row md:flex-row flex-col rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">

                {/* User Details Container */}
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
                <form onSubmit={formik.handleSubmit} className="lg:w-1/2 md:w-1/2 w-full lg:p-3 md:p-2.5 p-2 flex flex-col justify-between">
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-lg md:text-base text-lg text-left font-medium">Services</h3>
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
                                    <p className="lg:text-base md:text-base text-sm text-gray-500">{service.duration}</p>
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

                    <div className="lg:m-3.5 md:m-2.5 m-2">
                        <h3 className="lg:text-lg md:text-base text-lg text-left font-medium">Reservation Date</h3>
                        <p className="lg:text-lg md:text-base text-lg">{formatted} <span>{timeslot_details?.start_time} - {timeslot_details?.end_time}</span></p>
                    </div>

                    {/* Mock Subtotal UI */}
                    <div className="border-t border-gray-300 pt-4">
                        <div className="space-y-2 text-sm md:text-base">
                            <div className="flex justify-between">
                                <p className="lg:text-lg md:text-base text-lg text-left font-medium">Subtotal:</p>
                                <p className="lg:text-lg md:text-base text-lg">₱{subtotal.toLocaleString()}</p>
                            </div>

                            <hr className="my-2 border-gray-300" />

                            <div className="flex justify-between font-semibold text-lg">
                                <p className="lg:text-lg md:text-base text-lg text-left font-medium">Total:</p>
                                <p className="lg:text-lg md:text-base text-lg">₱{total.toLocaleString()}</p>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-5 space-y-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="paymaya"
                                    onChange={() => addPaymentType("ONLINE_PAYMENT")}
                                    className="accent-[#0f9d58] w-4 h-4"
                                />
                                <span className="font-medium lg:text-lg md:text-base text-lg">PayMaya</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    onChange={() => addPaymentType("CASH")}
                                    className="accent-black w-4 h-4"
                                />
                                <span className="font-medium lg:text-lg md:text-base text-lg">Cash </span>
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
                </form>
            </div>
        </div>
    )
}