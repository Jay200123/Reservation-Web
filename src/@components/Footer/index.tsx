export default function Footer() {
    // Get the current date in ISO format (YYYY-MM-DD)

    const year = new Date().toISOString().split("T")[0];

    return (
        <>
            <footer className={`w-full lg:h-[21rem] md:h-[18rem] h-[33rem] lg:p-3 bg-gray flex flex-col lg:justify-between md:justify-between bg-[#333333] text-white`}>
                <div className=" flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-around lg:h-[12rem] md:h-[22rem] h-[28rem]">
                    <ul>
                        <li className="font-bold lg:text-lg md:text-lg text-base lg:m-1.5 md:m-1.5 m-1">Primary Information</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">Reservation Web</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">About</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">123 Lorem St., Ipsum City, Dolor 4567
                        </li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">8:00 A.M to 5:00 P.M (Monday - Saturdays)</li>
                    </ul>

                    <ul>
                        <li className="font-bold lg:text-lg md:text-lg text-base lg:m-1.5 md:m-1.5 m-1 cursor-pointer">Contact </li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">+63 9123456789</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">lorem.ipsum@gmail.com</li>
                    </ul>

                    <ul>
                        <li className="font-bold lg:text-lg md:text-lg text-base lg:m-1.5 md:m-1.5 m-1">Quick Links</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">Sign Up</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">Sign In</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">Services</li>
                    </ul>


                    <ul>
                        <li className="font-bold lg:text-lg md:text-lg text-base lg:m-1.5 md:m-1.5 m-1">Legal</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">Privacy Policy</li>
                        <li className="lg:text-base md:text-base text-sm lg:m-2 md:m-1.5 m-1 cursor-pointer">Terms & Conditions.</li>
                    </ul>
                </div>
                <div className=" lg:h-12 lg:m-2 md:m-1.5 m-1 flex items-center">
                    <i className="lg:text-2xl lg:m-3.5 md:text-lg text-base md:m-2.5 m-2 fa-brands fa-facebook cursor-pointer"></i>
                    <i className="lg:text-2xl lg:m-3.5  md:text-lg text-base md:m-2.5 m-2 fa-brands fa-instagram cursor-pointer"></i>
                    <i className="lg:text-2xl lg:m-3.5  md:text-lg text-base md:m-2.5 m-2 fa-brands fa-twitter cursor-pointer"></i>
                    <i className="lg:text-2xl lg:m-3.5  md:text-lg text-base md:m-2.5 m-2 fa-brands fa-google cursor-pointer"></i>
                </div>
                <div className="flex justify-between border-t border-white">
                    <div className="lg:m-2 md:m-2 m-1.5">
                        {/* Display current year */}
                        <p className="lg:text-lg md:text-base text-sm">Copyright {year.split("-")[0]} - Renyel Jay Sioc</p>
                    </div>
                    <div className="lg:m-1.5 flex items-center">
                        <p className="lg:text-lg md:text-base text-sm">Privacy Policy.</p>
                        <p className="lg:text-lg md:text-base text-sm">Terms & Condition.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}