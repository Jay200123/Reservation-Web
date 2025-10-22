import { useNavigate } from "react-router-dom";
import { useStore } from "../../@state/store";
import { toast } from "react-toastify";

export default function Navbar() {
    const navigate = useNavigate();
    const { user, access_token, services, logout } = useStore();

    const handleLogout = async () => {
        await logout();
        toast.success("Logout successfully");
        navigate("/signin");
    };

    return (
        <>
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-6 lg:h-16 md:h-13 h-10 text-black shadow-lg">

                {/* Logo / Brand */}
                <h3 onClick={() => navigate("/")} className="cursor-pointer text-xs md:text-sm lg:text-xl font-medium transition-all duration-300 ease-in-out hover:text-[#d4af37]">
                    Reservation Web
                </h3>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-xs md:text-sm lg:text-sm items-center">
                    <li onClick={() => navigate("/")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#d4af37]"><i className="fa-solid fa-house mr-1"></i>Home</li>
                    <li className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-circle-info mr-1"></i>About</li>
                    <li className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-phone mr-1"></i>Contact Us</li>
                    <li
                        onClick={() => navigate("/reservation/forms")}
                        className="relative flex items-center gap-1 cursor-pointer px-3 py-1 transition-all duration-300 hover:text-[#d4af37]"
                    >
                        <i className="fa-solid fa-calendar mr-1"></i>
                        Reservations
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                            {services.length}
                        </span>
                    </li>
                    {user && access_token ? (
                        <>
                            <li
                                onClick={() => navigate("/profile")}
                                className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]">
                                <i className="fa-solid fa-user mr-1"></i>Profile
                            </li>

                            <li onClick={handleLogout} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>Logout</li>
                        </>
                    ) : (
                        <>
                            <li onClick={() => navigate("/signin")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-right-to-bracket mr-1"></i>Sign In</li>
                            <li onClick={() => navigate("/signup")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-user-plus mr-1"></i>Sign Up</li>
                        </>
                    )}

                </ul>

                {/* Mobile Menu */}
                <div className="block md:hidden">
                    <button className="focus:outline-none">☰</button>
                </div>
            </nav>
        </>
    )
}