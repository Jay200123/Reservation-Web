import { useNavigate } from "react-router-dom";
import { useStore } from "../../@state/store";
import { toast } from "react-toastify";

export default function Navbar() {
    // Use the `useNavigate` hook from React Router for page navigation
    const navigate = useNavigate();

    const {
        user,
        access_token,
        services,
        logout,
    } = useStore(); // Destructure user, access_token, services, and logout from the Zustand store

    // Define an async `handleLogout` function to call the logout action and navigate to the sign-in page
    const handleLogout = async () => {
        await logout(); // Execute the logout API action
        toast.success("Logged out successfully"); // Show a success toast
        navigate("/signin"); // Redirect to the sign-in page
    };

    return (
        <>
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-6 lg:h-16 md:h-13 h-10 text-black shadow-lg">

                {/* Logo / Brand */}
                <h3 onClick={() => navigate("/")} className="cursor-pointer text-xs md:text-sm lg:text-xl font-medium transition-all duration-300 ease-in-out hover:text-[#d4af37]">
                    Reservation Web
                </h3>

                {/* Conditional rendering based on `user` and `access_token` from Zustand store */}
                {user && access_token ? (
                    <>

                        {user?.role == "USER" ? (
                            // User Menu
                            <ul className="hidden md:flex gap-6 text-xs md:text-sm lg:text-sm items-center">
                                <li onClick={() => navigate("/")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#d4af37] hover:text-shadow-2xs"><i className="fa-solid fa-house mr-1"></i>Home</li>
                                <li onClick={() => navigate("/about")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-circle-info mr-1"></i>About</li>
                                <li onClick={() => navigate("/contact")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-phone mr-1"></i>Contact Us</li>
                                <li
                                    onClick={() => navigate("/reservation/forms")}
                                    className="relative flex items-center gap-1 cursor-pointer px-3 py-1 transition-all duration-300 hover:text-[#d4af37]"
                                >
                                    <i className="fa-solid fa-calendar mr-1"></i>
                                    Reservations

                                    {/* Show the total count of items in the services state */}
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                                        {services.length}
                                    </span>
                                </li>

                                {/* Services Sub menu */}
                                <li
                                    onClick={() => navigate("/services")}
                                    className="cursor-pointer transition-all duration-300 hover:text-[#d4af37]"
                                >
                                    <i className="fa-solid fa-user-gear mr-1"></i>Services

                                </li>

                                <li
                                    onClick={() => navigate("/profile")}
                                    className="cursor-pointer transition-all duration-300 hover:text-[#d4af37]"
                                >
                                    <i className="fa-solid fa-user mr-1"></i>
                                    Profile
                                </li>

                                {/* Handle user logout */}
                                <li
                                    onClick={handleLogout}
                                    className="cursor-pointer transition-all duration-300 hover:text-[#d4af37]"
                                >
                                    <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
                                    Logout
                                </li>

                            </ul>
                        ) : (
                            // Admin Menu
                            <ul className="hidden md:flex gap-6 text-xs md:text-sm lg:text-sm items-center">
                                <li onClick={() => navigate("/dashboard")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#d4af37]">
                                    <i className="fa-solid fa-chart-simple mr-1"></i>Dashboard</li>
                                <li onClick={() => navigate("/users/table")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]">
                                    <i className="fa-solid fa-users mr-1"></i>Users</li>
                                <li onClick={() => navigate("/services/table")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]">
                                    <i className="fa-solid fa-user-gear mr-1"></i>Services</li>
                                <li
                                    onClick={() => navigate("/timeslots/table")}
                                    className="relative flex items-center gap-1 cursor-pointer px-3 py-1 transition-all duration-300 hover:text-[#d4af37]"
                                >
                                    <i className="fa-solid fa-clock mr-1"></i>
                                    Timeslots
                                </li>

                                <li
                                    onClick={() => navigate("/reservations/table")}
                                    className="relative flex items-center gap-1 cursor-pointer px-3 py-1 transition-all duration-300 hover:text-[#d4af37]"
                                >
                                    <i className="fa-solid fa-calendar mr-1"></i>
                                    Reservations
                                </li>

                                <li
                                    onClick={() => navigate("/ratings")}
                                    className="relative flex items-center gap-1 cursor-pointer px-3 py-1 transition-all duration-300 hover:text-[#d4af37]"
                                >
                                    <i className="fa-solid fa-star mr-1"></i>
                                    Ratings
                                </li>

                                {/* Handle user logout */}
                                <li
                                    onClick={handleLogout}
                                    className="cursor-pointer transition-all duration-300 hover:text-[#d4af37]"
                                >
                                    <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
                                    Logout
                                </li>
                            </ul>
                        )}

                    </>
                ) : (
                    <ul className="hidden md:flex gap-6 text-xs md:text-sm lg:text-sm items-center">
                        <li onClick={() => navigate("/")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#d4af37]">
                            <i className="fa-solid fa-house mr-1"></i>Home</li>
                        <li onClick={() => navigate("/about")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]">
                            <i className="fa-solid fa-circle-info mr-1"></i>About</li>
                        <li onClick={() => navigate("/contact")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]">
                            <i className="fa-solid fa-phone mr-1"></i>Contact Us</li>
                        <li
                            onClick={() => navigate("/services")}
                            className="cursor-pointer transition-all duration-300 hover:text-[#d4af37]"
                        >
                            <i className="fa-solid fa-user-gear mr-1"></i>Services

                        </li>

                        <li
                            onClick={() => navigate("/reservation/forms")}
                            className="relative flex items-center gap-1 cursor-pointer px-3 py-1 transition-all duration-300 hover:text-[#d4af37]"
                        >
                            <i className="fa-solid fa-calendar mr-1"></i>
                            Reservations

                            {/* Show the total count of items in the services state */}
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                                {services.length}
                            </span>
                        </li>
                        {/* Navigate to Sign In page */}
                        <li
                            onClick={() => navigate("/signin")}
                            className="cursor-pointer transition-all duration-300 hover:text-[#d4af37]"
                        >
                            <i className="fa-solid fa-right-to-bracket mr-1"></i>
                            Sign In
                        </li>

                        {/* Navigate to Sign Up page */}
                        <li
                            onClick={() => navigate("/signup")}
                            className="cursor-pointer transition-all duration-300 hover:text-[#d4af37]"
                        >
                            <i className="fa-solid fa-user-plus mr-1"></i>
                            Sign Up
                        </li>
                    </ul>
                )}

                {/* Mobile Menu */}
                <div className="block md:hidden">
                    <button className="focus:outline-none">☰</button>
                </div>
            </nav>
        </>
    )
}