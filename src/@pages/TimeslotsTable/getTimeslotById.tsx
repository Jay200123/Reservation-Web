import { useStore } from "../../@state/store";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ImageOne from "../../assets/ReservationOne.avif";
import { FaArrowLeft } from "react-icons/fa";

export default function GetTimeslotById() {
    const { id } = useParams();

    const { getTimeslotById } = useStore();

    const { data } = useQuery({
        queryKey: ["timeslot", id],
        queryFn: () => getTimeslotById(id!),
        enabled: !!id,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false
    });

    const timeslot = data?.details;

    const back = () => {
        window.history.back();
    }

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            <div className="lg:w-[70rem] lg:max-h-[65rem] md:w-[60rem] md:h-[62rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                {/* Image Layout */}
                <div className="lg:block lg:w-1/2 md:block md:w-1/2 w-full hidden">
                    <img src={ImageOne} className="w-full h-full object-cover" alt="ImageOne" />
                </div>

                {/* Service Information Layout */}
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center relative">
                    <FaArrowLeft
                        onClick={() => back()}
                        className="absolute top-0 left-0 bottom-0 lg:m-2 md:m-1.5 m-1 lg:text-3xl md:text-2xl text-lg transition-all duration-300 hover:text-[#d4af37] cursor-pointer"
                    />
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">Timeslot Information</h3>
                        <p className="lg:text-base lg:mt-3.5 md:text-sm text-xs text-center">Provide the details of a timeslot below. Clear and accurate information helps customers understand what you offer best.</p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Start Time</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="start_time"
                                    name="start_time"
                                    value={timeslot?.start_time || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">End Time</label>
                            <div className="relative">

                                <input
                                    type="text"
                                    id="end_time"
                                    name="end_time"
                                    value={timeslot?.end_time || ""}
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