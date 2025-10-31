import { useStore } from "../../@state/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserSidebar() {
    // Use the `useNavigate` hook from React Router for page navigation
    const navigate = useNavigate();

    // Destructure user, services, and logout from the Zustand store
    const { user, services, logout } = useStore();

    // Define an async `handleLogout` function to call the logout action and navigate to the sign-in page
    const handleLogout = async () => {
        await logout();
        toast.success("Logout successfully");
        navigate("/signin");
    };

    return (
        <>
            {/* Navbar */}
            <nav className="w-full flex flex-col justify-between px-6 h-full text-white bg-[#d4af37] shadow-lg p-2">

                {/* Logo / Brand */}
                <div className="relative inline-block">
                    <h3 onClick={() => navigate("/reservation/forms")} className="cursor-pointer text-xs md:text-sm lg:text-xl mt-4 font-medium transition-all duration-300 ease-in-out">
                        <i className="fa-solid fa-calendar mr-1"></i> Reservations
                    </h3>

                    <span className="absolute -top-1 -right-3 bg-red-500 text-white text-[10px] md:text-xs font-semibold lg:w-8 lg:h-8 lg:text-base flex items-center justify-center rounded-full">
                        {services.length}
                    </span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-col gap-6 text-xs md:text-sm lg:text-sm">
                    {/* Landing Page */}
                    <li onClick={() => navigate("/")} className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#d4af37] lg:p-2.5 rounded-md font-medium">
                        <i className="fa-solid fa-house mr-1"></i>Home
                    </li>

                    {/* Profile Page */}
                    <li onClick={() => navigate("/profile")} className="cursor-pointer  transition-all duration-300 hover:bg-white hover:text-[#d4af37] lg:p-2.5 rounded-md font-medium">
                        <i className="fa-solid fa-user mr-1"></i>Profile
                    </li>

                    {/* Services Page */}
                    <li onClick={() => toast.error("Feature on progress")} className="cursor-pointer  transition-all duration-300 hover:bg-white hover:text-[#d4af37] lg:p-2.5 rounded-md font-medium">
                        <i className="fa-solid fa-user-gear mr-1"></i>Services
                    </li>

                    {/* User Reservations page */}
                    <li onClick={() => navigate(`/reservations/${user?._id}`)} className="cursor-pointer  transition-all duration-300 hover:bg-white hover:text-[#d4af37] lg:p-2.5 rounded-md font-medium">
                        <i className="fa-solid fa-bookmark mr-1"></i>Reservations
                    </li>

                </ul>

                {/* Mobile Menu */}
                <div className="block">
                    <ul>
                        <li onClick={handleLogout} className="cursor-pointer  transition-all duration-300 hover:bg-white hover:text-[#d4af37] lg:p-3 rounded-md font-medium">
                            <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>Logout
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}