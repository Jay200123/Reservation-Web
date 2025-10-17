import ImageOne from "../../assets/ImageTwo.jpg";
import ImageTwo from "../../assets/ReservationOne.jpg";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../@state/store";

export default function Home() {

    const { getAllServices } = useStore();

    const { data } = useQuery({
        queryKey: ["services"],
        queryFn: getAllServices,
        refetchOnWindowFocus: false, // Disable automatic refetching when the window or tab becomes active again.
        refetchOnMount: false, // Prevent refetching when the component remounts (use cached data instead).
        refetchInterval: false, // Disable polling — the query won’t auto-refetch at a set interval.
    });

    const services = data?.details;

    return (
        <div    >
            {/* Image Container */}
            <div className="relative w-full lg:h-[55rem] md:h-[45rem] h-[32rem]">
                {/* Home page Image */}
                <img className="w-full h-full absolute object-cover lg:object-center" src={ImageTwo} alt="ImageTwo" />
                {/* Darkens the Background of the Landing Page to make Heading and paragraph more visible. */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Landing Page Title & Paragraph */}
                <div className="absolute flex flex-col items-center justify-center inset-0">
                    <h3 className="block lg:text-6xl md:text-3xl text-base font-bold text-white">Easy Reservations, Great Experiences. </h3>
                    <p className="lg:mx-3.5 lg:my-3.5 lg:text-lg md:text-base text-xs font-light text-white italic">Your time is precious — and so is your experience. Book ahead with ease and let us take care of the rest.</p>
                </div>
            </div>
            {/* Web Information Container */}
            <div
                className="flex lg:flex-row md:flex-row flex-col items-center w-full lg:h-[36rem] md:h-[33rem] h-[33rem] lg:mb-3.5 lg:p-3.5 md:p-2.5 p-2 md:mb-2.5 mb-1.5 lg:mt-3.5">
                <div className="flex flex-col justify-center h-full lg:w-1/2 md:w-full lg:px-2.5 lg:py-2.5">
                    <h3 className="font-bold lg:text-3xl md:text-2xl text-lg lg:mb-4.5 lg:mt-2.5">Reservation Web</h3>

                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5 md:mb-2.5 mb-2">
                        Our Reservation Web makes it simple to manage bookings in real time. Whether you’re running a restaurant, hotel, or event, the system ensures quick and reliable scheduling for your customers.
                    </p>

                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5 md:mb-2.5 mb-2">
                        With seamless integration and secure data handling, you can automate confirmations, reduce double-bookings, and give your users a hassle-free reservation experience.
                    </p>

                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5 md:mb-2.5 mb-2">
                        Designed for scalability, the Reservation API adapts to businesses of all sizes — from small cafés to large enterprises — providing efficiency, flexibility, and customer satisfaction.
                    </p>

                    {/* Button Section */}
                    <div className="w-full flex justify-center items-center">
                        <button
                            className="rounded-2xl border border-white bg-[#d4af37] text-white 
               text-xs md:text-sm lg:text-base font-medium
               px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5
               w-auto lg:w-40
               mb-1.5 md:mb-2.5
               transition-all duration-200 hover:bg-[#c9a128]"
                        >
                            Learn More
                        </button>
                    </div>


                </div>
                <div className="h-full lg:w-1/2 flex lg:justify-center items-center md:w-full lg:px-3.5 lg:py-3.5">
                    <img className="w-full h-full object-center items-center rounded-md" src={ImageOne} alt="ImageOne" />
                </div>
            </div>

            <div className="lg:h-[32rem] w-full border border-black p-4">
                <h3 className="lg:text-4xl font-medium">Our Services</h3>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {services?.map((service) => (
                        <div
                            key={service._id}
                            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            {/* Service Image */}
                            {service.image?.length > 0 && (
                                <img
                                    src={service.image[0].url}
                                    alt={service.service_name}
                                    className="w-32 h-32 object-cover rounded-full mb-3"
                                />
                            )}

                            {/* Service Info */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {service.service_name}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {service.description || "No description available"}
                            </p>
                            <p className="text-yellow-600 font-semibold mt-2">
                                ₱{service.service_price}
                            </p>
                            <span className="text-xs text-gray-500 mt-1">
                                Duration: {service.duration}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex flex-col justify-center items-center w-full lg:h-[44rem] lg:mt-12 bg-[#d4af37] text-white ">
                <h3 className="font-bold lg:text-3xl md:text-lg lg:mb-4.5 lg:mt-2.5">
                    Efficient and Seamless Reservation Services
                </h3>
                <p className="italic text-gray lg:text-base md:text-sm text-xs lg:mb-3.5 md:mb-2.5 mb-1.5">
                    Simplify your bookings with our reliable and user-friendly system.
                </p>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-5 place-items-center">
                    {/* Box */}
                    <div className="w-72 h-64 border border-white flex flex-col justify-between rounded-md p-4">
                        {/* Card 1 */}
                        <div className="flex justify-between">
                            <i className="fa-solid fa-calendar-check text-lg"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-3">Service Reservations</h3>
                            <p className="italic text-sm">
                                Secure your spot at your preferred time with ease. Book online and avoid the hassle of waiting.
                            </p>
                        </div>
                    </div>

                    <div className="w-72 h-64 border border-white flex flex-col justify-between rounded-md p-4">
                        {/* Card 2 */}
                        <div className="flex justify-between">
                            <i className="fa-solid fa-gear text-lg"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-3">Custom Booking Options</h3>
                            <p className="italic text-sm">
                                Personalize your reservation — choose seating, special requests, or dietary preferences.
                            </p>
                        </div>
                    </div>

                    <div className="w-72 h-64 border border-white flex flex-col justify-between rounded-md p-4">
                        {/* Card 3 */}
                        <div className="flex justify-between">
                            <i className="fa-solid fa-pen-to-square text-lg"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-3">Reservation Management</h3>
                            <p className="italic text-sm">
                                Modify or cancel your bookings quickly with our user-friendly system.
                            </p>
                        </div>
                    </div>

                    <div className="w-72 h-64 border border-white flex flex-col justify-between rounded-md p-4">
                        {/* Card 4 */}
                        <div className="flex justify-between">
                            <i className="fa-solid fa-gift text-lg"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-3">Exclusive Offers</h3>
                            <p className="italic text-sm">
                                Access member-only discounts and seasonal promotions when you reserve online.
                            </p>
                        </div>
                    </div>

                    <div className="w-72 h-64 border border-white flex flex-col justify-between rounded-md p-4">
                        {/* Card 5 */}
                        <div className="flex justify-between">
                            <i className="fa-solid fa-bolt text-lg"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-3">Efficient and Seamless Reservation Services</h3>
                            <p className="italic text-sm">
                                Simplify your bookings with our reliable and user-friendly system.
                            </p>
                        </div>
                    </div>

                    <div className="w-72 h-64 border border-white flex flex-col justify-between rounded-md p-4">
                        {/* Card 6 */}
                        <div className="flex justify-between">
                            <i className="fa-solid fa-clock text-lg"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-3">Real-Time Availability</h3>
                            <p className="italic text-sm">
                                View up-to-date table availability and confirm your reservation instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}