import { useStore } from "../../@state/store";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ImageOne from "../../assets/ReservationOne.avif";

export default function getReservationById() {
    const { id } = useParams();

    const { getReservationById } = useStore();

    const { data } = useQuery({
        queryKey: ["reservation"],
        queryFn: () => getReservationById(id!),
        enabled: !!id,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false
    });

    const reservation = data?.details;

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            <div className="lg:w-[70rem] lg:max-h-[65rem] md:w-[60rem] md:h-[62rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                {/* Image Layout */}
                <div className="lg:block lg:w-1/2 md:block md:w-1/2 w-full hidden">
                    <img src={ImageOne} className="w-full h-full object-cover" alt="ImageOne" />
                </div>

                {/* Service Information Layout */}
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">Reservation Information</h3>
                        <p className="lg:text-base lg:mt-3.5 md:text-sm text-xs text-center">Provide the details of a reservation below. Clear and accurate information helps customers understand what you offer best.</p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="username">Username</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={reservation?.user?.username || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="reservation_date">Reservation Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="reservation_date"
                                    name="reservation_date"
                                    value={reservation?.reservation_date.toISOString().split("T")[0]}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="start_time">Start Time</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="start_time"
                                    name="start_time"
                                    value={reservation?.timeslot?.start_time}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="end_time">End Time</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="end_time"
                                    name="end_time"
                                    value={reservation?.timeslot?.end_time}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="mb-4 text-sm font-medium md:text-lg md:font-bold">
                                Services
                            </h3>
                            <div className="w-full h-[30rem] border border-gray-300 overflow-y-auto rounded-md shadow-sm p-4 space-y-4">
                                {reservation?.services?.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex w-full gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                                    >
                                        <div className="flex w-[30%] justify-center items-center">
                                            {service?.service?.image?.length > 1 ? (
                                                <img
                                                    className="object-contain w-32 h-32 md:w-40 md:h-40"
                                                    src={
                                                        service?.service?.image[
                                                            Math.floor(
                                                                Math.random() * service?.service?.image?.length
                                                            )
                                                        ]?.url
                                                    }
                                                    alt="Service"
                                                />
                                            ) : (
                                                <img
                                                    className="object-contain w-32 h-32 md:w-40 md:h-40"
                                                    src={service?.service?.image[0]?.url || ""}
                                                    alt="Product"
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col w-[70%] justify-between">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-base font-medium md:text-lg">
                                                    {service?.service?.service_name}
                                                </h3>
                                                <h3 className="text-base font-medium text-green-600 md:text-lg">
                                                    ₱  {service?.service?.service_price}
                                                </h3>
                                            </div>
                                            <div className="flex items-center justify-end">
                                                <h3 className="text-sm text-gray-700 md:text-lg">
                                                    Duration: {service.service.duration}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="end_time">Status</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="status"
                                    name="status"
                                    value={reservation?.status}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="end_time">Amount</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={reservation?.amount}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="end_time">Payment Type</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    id="payment_type"
                                    name="payment_type"
                                    value={reservation?.payment_type}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}