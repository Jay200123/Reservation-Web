import { useStore } from "../../@state/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserSidebar() {
    const navigate = useNavigate();
    const { logout } = useStore();

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
                <h3 className="cursor-pointer text-xs md:text-sm lg:text-xl mt-4 font-medium transition-all duration-300 ease-in-out">
                    Reservation Web
                </h3>

                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-col gap-6 text-xs md:text-sm lg:text-sm">
                    <li onClick={() => navigate("/")} className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#d4af37] lg:p-2.5 rounded-md font-medium">
                        <i className="fa-solid fa-house mr-1"></i>Home
                    </li>
                    <li className="cursor-pointer  transition-all duration-300 hover:bg-white hover:text-[#d4af37] lg:p-2.5 rounded-md font-medium">
                        <i className="fa-solid fa-circle-info mr-1"></i>About
                    </li>
                    <li className="cursor-pointer  transition-all duration-300 hover:bg-white hover:text-[#d4af37] lg:p-2.5 rounded-md font-medium">
                        <i className="fa-solid fa-phone mr-1"></i>Contact Us
                    </li>

                    <li onClick={() => navigate("/profile")} className="cursor-pointer  transition-all duration-300 hover:bg-white hover:text-[#d4af37] lg:p-2.5 rounded-md font-medium">
                        <i className="fa-solid fa-user mr-1"></i>Profile
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