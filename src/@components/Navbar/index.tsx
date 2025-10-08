import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-6 lg:h-16 md:h-13 h-10 text-black shadow-lg">

                {/* Logo / Brand */}
                <h3 className="cursor-pointer text-xs md:text-sm lg:text-xl font-medium transition-all duration-300 ease-in-out hover:text-[#d4af37]">
                    Reservation Web
                </h3>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-xs md:text-sm lg:text-sm items-center">
                    <li onClick={() => navigate("/")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#d4af37]"><i className="fa-solid fa-house mr-1"></i>Home</li>
                    <li className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-circle-info mr-1"></i>About</li>
                    <li className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-phone mr-1"></i>Contact Us</li>
                    <li onClick={() => navigate("/signin")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-right-to-bracket mr-1"></i>Sign In</li>
                    <li onClick={() => navigate("/signup")} className="cursor-pointer  transition-all duration-300 hover:text-[#d4af37]"><i className="fa-solid fa-user-plus mr-1"></i>Sign Up</li>
                </ul>

                {/* Mobile Menu */}
                <div className="block md:hidden">
                    <button className="focus:outline-none">☰</button>
                </div>
            </nav>
        </>
    )
}