import { useStore } from "../../@state/store";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function UserDetails() {
    const { id } = useParams();

    const { getUserById } = useStore();

    const { data } = useQuery({
        queryKey: ["service"],
        queryFn: () => getUserById(id!),
        enabled: !!id,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false
    });

    const user = data?.details;

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            {/* Box Layout */}
            <div className="lg:w-[70rem] relative lg:max-h-[65rem] md:w-[60rem] md:h-[62rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                <i onClick={() => window.history.back()} className="fa-solid fa-arrow-left absolute lg:text-3xl font-bold m-2 cursor-pointer transition duration-300 hover:text-[#d4af37]"></i>
                {/* Image Layout */}
                <div className="h-auto lg:block lg:w-1/2 md:block md:w-1/2 w-full hidden rounded-md border-r border-[#d4af37]">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="lg:h-[21rem] lg:w-[21rem] md:h-[18rem] md:w-[18rem]">
                            <img
                                src={user?.image[Math.floor(Math.random() * user.image.length)].url}
                                alt="User"
                                className="w-full h-full object-center object-contain rounded-full"
                            />
                        </div>

                        <div className="mt-6">
                            <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">User<span className="text-[#d4af37] ml-2">Image</span></h3>
                        </div>
                    </div>

                </div>

                {/* User Information Layout */}
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">User <span className="text-[#d4af37]">Information</span></h3>
                        <p className="lg:text-base lg:mt-3.5 md:text-sm text-xs text-center">Provide the details of the user below. Clear and accurate information helps customers understand what you offer best.</p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="username"><i className="fa-solid fa-user mr-1"></i>Username</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={user?.user.username || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname"><i className="fa-solid fa-id-card mr-1"></i>Fullname</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={user?.fullname || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="contact_number"><i className="fa-solid fa-phone mr-1"></i>Contact Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="contact_number"
                                    name="contact_number"
                                    value={user?.contact_number || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="email"><i className="fa-solid fa-envelope mr-1"></i>Email</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={user?.email || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="address"><i className="fa-solid fa-location-pin mr-1"></i>Address</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={user?.address || ""}
                                    readOnly
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="city"><i className="fa-solid fa-city mr-1"></i>City</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={user?.city || ""}
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