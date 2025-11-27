import { useStore } from "../../@state/store";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function getServiceById() {
    const { id } = useParams();

    const { getServiceById } = useStore();

    const { data } = useQuery({
        queryKey: ["service", id],
        queryFn: () => getServiceById(id!),
        enabled: !!id,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false
    });

    const service = data?.details;

    console.log({ service });

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            <div className="lg:w-[70rem] lg:max-h-[65rem] md:w-[60rem] md:h-[62rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                {/* Image Layout */}
                <div className="h-auto lg:block lg:w-1/2 md:block md:w-1/2 w-full hidden">
                    <img
                        src={service?.image[Math.floor(Math.random() * service?.image.length)]?.url}
                        className="w-full h-full object-cover object-center"
                        alt="ImageOne"
                    />
                </div>

                {/* Service Information Layout */}
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">Service Information</h3>
                        <p className="lg:text-base lg:mt-3.5 md:text-sm text-xs text-center">Provide the details of your service below. Clear and accurate information helps customers understand what you offer best.</p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="service_name"
                                    name="service_name"
                                    value={service?.service_name || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Price</label>
                            <div className="relative">

                                <input
                                    type="text"
                                    id="service_name"
                                    name="service_name"
                                    value={service?.service_price || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Duration</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    value={service?.duration || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Description</label>
                            <div className="relative">
                                <textarea
                                    id="description"
                                    name="description"
                                    value={service?.description || ""}
                                    rows={6}
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