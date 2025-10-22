import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();

    const {
        services,
        timeslot,
        reservation_date,
        getAllTimeslots,
        removeServiceFromFrom,
        addReservationDate,
        addTimeslot
    } = useStore();

    const { data: timeslotData } = useQuery({
        queryKey: ["timeslots"],
        queryFn: getAllTimeslots
    });

    const timeslots = timeslotData?.details;

    //Reservation date handler
    const handleReservationDate = (date: Date) => {

        if (services.length == 0) {
            toast.error("Please select a service first.")
        } else {
            toast.success("Date selected.")
            const formattedDate = date.toISOString().split("T")[0];
            addReservationDate(formattedDate);
        }
    }

    const handleTimeslot = (timeslotId: string) => {

        if (services.length == 0) {
            toast.error("Please select a service first")
        } else if (reservation_date == null) {
            toast.error("Please select a reservation date first.")
        } else {
            toast.success("Timeslot selected.")
            addTimeslot(timeslotId)

        }
    }

    //Checkout handler
    const handleCheckout = () => {
        if (reservation_date == null) {
            toast.error("Please, Select a Reservation Date.")
        } else if (timeslot == null) {
            toast.error("Please, Select a Timeslot")
        } else {
            navigate("/checkout")
        }
    }

    console.log(reservation_date);
    console.log(timeslot);


    return (
        <>
            <div className="min-h-screen lg:p-4 md:p-3 p-2">
                <h3 className="text-3xl font-bold">Reservation Form</h3>
                <div className="lg:h-[52rem] flex items-center">
                    {/* Reservation Services Container */}
                    <div className="lg:w-[70%] h-full flex flex-col p-4 overflow-y-scroll  bg-white">

                        {/* Service Container */}
                        <AnimatePresence>
                            {services?.map((service) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}       // Animation when card appears
                                    animate={{ opacity: 1, y: 0 }}        // Final state
                                    exit={{ opacity: 0, y: -20 }}         // Animation when card leaves
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    key={service._id} className="flex items-center border border-gray-500 min-h-[18rem] bg-[#c9a128] rounded-lg shadow-lg mt-4">
                                    {/* Service Image */}
                                    <div className="w-[20%] h-full">
                                        <img
                                            src={service.image[Math.floor(Math.random() * service.image.length)].url}
                                            alt="Service"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>

                                    {/* Service Details */}
                                    <div className="w-[80%] h-full p-4 flex flex-col justify-between text-white">
                                        <div className="flex items-center justify-between">
                                            <h3 className="lg:text-lg font-medium md:text-base text-base">{service.service_name}</h3>
                                            <p className="lg:text-base md:text-sm text-sm font-medium">₱{service.service_price}</p>
                                        </div>

                                        <div>
                                            <p className="lg:text-base md:text-sm text-sm">
                                                {service.description}
                                            </p>

                                            <p className="lg:text-base md:text-sm text-sm ">
                                                {service.duration}
                                            </p>
                                        </div>

                                        <div className="flex justify-end">
                                            <button onClick={() => removeServiceFromFrom(service._id)} className="text-sm px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md transition-all duration-200">
                                                <i className="fa-solid fa-trash mr-1"></i> Remove
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>


                    </div>

                    <div className="lg:w-[30%] h-full lg:grid lg:grid-rows-[auto_1fr_1fr] gap-6">
                        {/* Calendar Container */}
                        <div className="p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3">Select Date</h3>

                            <div className="flex items-center justify-center overflow-hidden">
                                <div className="w-full max-w-sm bg-white rounded-lg shadow">
                                    <Calendar
                                        onChange={(date) => handleReservationDate(date as Date)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/*  Timeslot Container */}
                        <div className="p-4  rounded-lg">
                            <h3 className="text-lg font-semibold mb-3">Select Timeslot</h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {timeslots?.map((timeslot) => (
                                    <div
                                        key={timeslot._id}
                                        onClick={() => handleTimeslot(timeslot._id)}
                                        className="p-3 rounded-xl text-center font-medium text-white bg-gradient-to-r from-[#d4af37] to-[#b88a00] shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    >
                                        <p>{timeslot.start_time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Payment & Checkout btn Container */}
                        <div className="flex items-center justify-center shadow-lg relative lg:p-3.5">

                            <button onClick={handleCheckout} className="lg:text-lg md:text-base text-sm lg:p-3 border border-white text-white rounded-lg w-full bg-gradient-to-r from-[#d4af37] to-[#b88a00] shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}