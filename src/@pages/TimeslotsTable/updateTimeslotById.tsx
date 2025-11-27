import { useStore } from "../../@state/store";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { TimeslotFormik } from "../../@types";
import ImageOne from "../../assets/ReservationOne.avif";
import { FaArrowLeft } from "react-icons/fa";

export default function updateTimeslotById() {
    const navigate = useNavigate();

    const { id } = useParams();

    const { getTimeslotById, updateTimeslotById } = useStore();

    const { data } = useQuery({
        queryKey: ["timeslot", id],
        queryFn: () => getTimeslotById(id!),
        enabled: !!id,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false
    });

    const timeslot = data?.details;

    const formik = useFormik<TimeslotFormik>({
        enableReinitialize: true,
        initialValues: {
            start_time: timeslot?.start_time || "",
            end_time: timeslot?.end_time || "",
        },
        onSubmit: async (values) => {
            const formData = new FormData();

            formData.append("start_time", values?.start_time);
            formData.append("end_time", values.end_time);

            const result = await updateTimeslotById(timeslot?._id!, formData);

            if (result.status == 200) {
                toast.success(result.message);
                navigate("/timeslots/table")
            } else {
                toast.error("Timeslot update failed.")
            }
        }
    });

    const back = () => {
        window.history.back();
    }

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            <form onSubmit={formik.handleSubmit} className="lg:w-[70rem] lg:max-h-[65rem] md:w-[60rem] md:h-[62rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
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
                            <label htmlFor="fullname">Timeslot Start Time </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="start_time"
                                    name="start_time"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.start_time || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Timeslot End Time</label>
                            <div className="relative">

                                <input
                                    type="text"
                                    id="end_time"
                                    name="end_time"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.end_time || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center p-2.5">
                            <button
                                type="submit"
                                disabled={!formik.isValid || formik.isSubmitting}
                                className={`rounded-2xl border border-white bg-[#d4af37] text-white lg:text-lg md:text-base text-base p-1.5 lg:px-2.5 lg:py-2.5 w-full md:px-1.5 md:py-1.5 lg:[8rem] lg:font-medium md:mb-2.5 mb-1.5 cursor-pointer ${!formik.isValid && "cursor-not-allowed opacity-50"}`}>
                                Update Timeslot
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}