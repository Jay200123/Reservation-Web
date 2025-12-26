import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DateFormatter } from "../../@utils";
import { useState } from "react";

export default function ReservationForms() {
    const navigate = useNavigate();

    const {
        services,
        timeslot,
        reservation_date,
        getAllTimeslots,
        removeServiceFromFrom,
        addReservationDate,
        addTimeslot,
        clearForm,
    } = useStore();

    const [skip] = useState(0);
    const [limit] = useState(10);

    const { data: timeslotData } = useQuery({
        queryKey: ["timeslots"],
        queryFn: () => getAllTimeslots(skip, limit)
    });

    const timeslots = timeslotData?.details;

    // Remove service handler
    const handleRemoveService = (serviceId: string) => {
        toast.success("Service removed.")
        removeServiceFromFrom(serviceId);
    }

    //Reservation date handler
    const handleReservationDate = (date: Date) => {


        if (services.length == 0) {
            toast.error("Please select a service first.")
        } else {
            toast.success("Date selected.");
            const formattedDate = DateFormatter(date);

            addReservationDate(formattedDate);
        }
    }

    //Timeslot handler
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

    const handleClearForms = () => {

        if (services.length == 0) {
            toast.error("Please select a service first")

        } else if (reservation_date == null) {
            toast.error("Please select a reservation date first.")

        } else if (timeslot == null) {
            toast.error("Please select a timeslot first.")
        } else {
            toast.success("Forms successfully cleared.");
            clearForm();
        }
    }

    //Checkout handler
    const handleCheckout = () => {

        if (services.length == 0) {
            toast.error("Please, Select a Service First.")

        } else if (reservation_date == null) {
            toast.error("Please, Select a Reservation Date.")
        } else if (timeslot == null) {
            toast.error("Please, Select a Timeslot")
        } else {
            navigate("/checkout")
        }
    }

    return (
        <>
            <div className="min-h-screen  lg:p-6 md:p-4 p-3 text-gray-800 ">
                <h3 className="text-3xl font-bold mb-4 text-center lg:text-left">Reservation Form</h3>

                {/* Reservation Form Container */}
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Reservation Services Container */}
                    <div className="lg:w-[70%] w-full h-full flex flex-col p-4 bg-white  rounded-xl shadow-md overflow-y-auto max-h-[55rem]">
                        {services?.length > 0 ? (
                            <AnimatePresence>
                                {services.map((service) => (
                                    <motion.div
                                        key={service._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="flex flex-col md:flex-row items-center border border-gray-200 bg-[#c9a128] text-white rounded-xl shadow-lg mb-4"
                                    >
                                        {/* Service Image */}
                                        <div className="w-full md:w-[40%] lg:w-[25%] h-48 md:h-full">
                                            <img
                                                src={
                                                    service.image[0].url
                                                }
                                                alt="Service"
                                                className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                                            />
                                        </div>

                                        {/* Service Details */}
                                        <div className="w-full md:w-[60%] lg:w-[75%] p-4 flex flex-col justify-between">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-semibold">
                                                    {service.service_name}
                                                </h3>
                                                <p className="font-semibold">₱{service.service_price}</p>
                                            </div>

                                            <p className="text-sm mb-2">{service.description}</p>
                                            <p className="text-sm italic">{service.duration}</p>

                                            <div className="flex justify-end mt-3">
                                                <button
                                                    onClick={() => handleRemoveService(service._id)}
                                                    className="text-sm px-3 py-1.5 bg-red-500 hover:bg-red-600 rounded-md transition-all duration-200 cursor-pointer"
                                                >
                                                    <i className="fa-solid fa-trash mr-1"></i> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <h3 className="text-2xl font-medium">No Services Yet.</h3>
                            </div>
                        )}
                    </div>

                    {/* Sidebar: Calendar, Timeslot, Checkout */}
                    <div className="lg:w-[30%] w-full flex flex-col gap-6">
                        {/* Calendar Container */}
                        <div className=" p-4 rounded-xl shadow-md">
                            <h3 className="text-lg font-semibold mb-3">Select Date</h3>
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm bg-white rounded-lg shadow">
                                    <Calendar
                                        onChange={(date) => handleReservationDate(date as Date)}
                                        tileDisabled={({ date, view }) =>
                                            view === "month" &&
                                            date.getTime() < new Date().setHours(0, 0, 0, 0) // Disable all past dates (before today's date) in the monthly calendar view
                                        }
                                        value={reservation_date ? new Date(reservation_date.toString()) : null}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Timeslot Container */}
                        <div className="bg-white  p-4 rounded-xl shadow-md">
                            <h3 className="text-lg font-semibold mb-3">Select Timeslot</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                {timeslots?.map((item) => {
                                    // Renamed the map parameter to `item` for clarity when comparing it against the `timeslot` state
                                    const isSelected = timeslot === item._id;

                                    const [timeString, period] = item.start_time.split(" ");
                                    const hourString = timeString.split(":")[0];

                                    let hours = Number(hourString);

                                    if (period.toUpperCase() == "P.M") {
                                        hours += 12;
                                    } else {
                                        hours += 0;
                                    }

                                    const date = new Date();

                                    const dateToday = DateFormatter(date);


                                    const isPast = reservation_date == dateToday
                                        && date.getHours() >= hours ? true : false

                                    return (

                                        <div
                                            key={item._id}
                                            onClick={() => {
                                                if (!isPast && !isSelected) handleTimeslot(item._id);
                                            }}
                                            className={`p-2.5 text-center text-sm md:text-base rounded-lg shadow transition-transform duration-200
                                                ${isSelected
                                                    ? "bg-[#c9a128] cursor-not-allowed scale-100 text-white"
                                                    : isPast
                                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                                        : "text-black bg-white hover:scale-105 cursor-pointer"
                                                }`}
                                        >
                                            {item.start_time}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <button
                                onClick={handleClearForms}
                                className="w-full text-white font-semibold py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b88a00] shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
                            >
                                <i className="fa-solid fa-broom mr-1"></i> Clear Forms
                            </button>
                            <button
                                onClick={handleCheckout}
                                className="w-full text-white font-semibold py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b88a00] shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer lg:mt-3 md:mt-2.5 mt-2"
                            >
                                <i className="fa-solid fa-money-check-dollar mr-1"></i>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}