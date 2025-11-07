import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { DateFormatter } from "../../@utils";
import { useFormik } from "formik";

export default function RescheduleReservation() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        timeslot,
        reservation_date,
        getAllTimeslots,
        getReservationById,
        rescheduleReservation,
    } = useStore();

    const { data: servicesData } = useQuery({
        queryKey: ["reservation", id],
        queryFn: () => getReservationById(id!),
        enabled: !!id,
        refetchOnMount: false,
        refetchInterval: false,
        refetchOnWindowFocus: false
    });

    const reservation = servicesData?.details;

    const { data: timeslotData } = useQuery({
        queryKey: ["timeslots"],
        queryFn: getAllTimeslots
    });

    const timeslots = timeslotData?.details;


    const formik = useFormik({
        initialValues: {
            timeslot: timeslot || "",
            reservation_date: reservation_date || "",
            reason: "",
        },

        onSubmit: async (values) => {
            await rescheduleReservation(id!, {
                timeslot: values.timeslot,
                reservation_date: new Date(values.reservation_date).toISOString().split("T")[0],
                reason: values.reason
            });

            toast.success("Reschedule Form submitted successfully.");
            navigate("/profile")
        }
    });



    return (
        <>
            <form onSubmit={formik.handleSubmit} className="min-h-screen  lg:p-6 md:p-4 p-3 text-gray-800 ">
                <h3 className="text-3xl font-bold mb-4 text-center lg:text-left">Reschedule Reservation Form</h3>

                {/* Reservation Form Container */}
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Reservation Services Container */}
                    <div className="lg:w-[70%] w-full h-full flex flex-col p-4 bg-white  rounded-xl shadow-md overflow-y-auto max-h-[55rem]">
                        <AnimatePresence>
                            {reservation?.services?.map((service) => (
                                <motion.div
                                    key={service.service._id}
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
                                                service.service.image[0].url
                                            }
                                            alt="Service"
                                            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                                        />
                                    </div>

                                    {/* Service Details */}
                                    <div className="w-full md:w-[60%] lg:w-[75%] p-4 flex flex-col justify-between">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-semibold">
                                                {service.service.service_name}
                                            </h3>
                                            <p className="font-semibold">₱{service.service.service_price}</p>
                                        </div>

                                        <p className="text-sm mb-2">{service.service.description}</p>
                                        <p className="text-sm italic">{service.service.duration}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Sidebar: Calendar, Timeslot, Checkout */}
                    <div className="lg:w-[30%] w-full flex flex-col gap-6">
                        {/* Calendar Container */}
                        <div className=" p-4 rounded-xl shadow-md">
                            <h3 className="text-lg font-semibold mb-3">Select Date</h3>
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm bg-white rounded-lg shadow">
                                    <Calendar
                                        onChange={(date) => formik.setFieldValue("reservation_date", date)}
                                        tileDisabled={({ date, view }) =>
                                            view === "month" &&
                                            date.getTime() < new Date().setHours(0, 0, 0, 0) // Disable all past dates (before today's date) in the monthly calendar view
                                        }
                                        value={formik.values?.reservation_date ? new Date(formik.values?.reservation_date.toString()) : null}
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
                                    const isSelected = formik.values.timeslot === item._id;

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


                                    const isPast = formik.values.reservation_date.toString() == dateToday
                                        && date.getHours() >= hours ? true : false

                                    return (
                                        <div
                                            key={item._id}
                                            onClick={() => {
                                                if (!isPast && !isSelected) {
                                                    formik.setFieldValue("timeslot", item._id);
                                                }
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

                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <div className="flex flex-col p-2.5">
                                <label htmlFor="fullname">Reason for Reschedule</label>
                                <div className="relative">
                                    <textarea
                                        id="reason"
                                        name="reason"
                                        onChange={formik.handleChange}
                                        value={formik.values.reason || ""}
                                        rows={3}
                                        className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white font-semibold py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b88a00] shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer lg:mt-3 md:mt-2.5 mt-2"
                            >
                                <i className="fa-solid fa-money-check-dollar mr-1"></i>
                                Reschedule Reservation
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )
}