export default function Footer() {


    const year = new Date().toISOString().split("T")[0];

    return (
        <>
            <footer className={`w-full lg:h-[21rem] md:h-[18rem] h-full lg:p-3 bg-gray flex flex-col justify-between bg-[#333333] text-white`}>
                <div className=" flex lg:flex-row justify-between lg:h-[12rem]">
                    <ul>
                        <li className="font-bold lg:text-lg md:text-lg lg:mt-1.5">Primary Information</li>
                        <li className="lg:text-base md:text-base lg:mt-2">Reservation Web</li>
                        <li className="lg:text-base md:text-base lg:mt-2">About</li>
                        <li className="lg:text-base md:text-base lg:mt-2">123 Lorem St., Ipsum City, Dolor 4567
                        </li>
                        <li className="lg:text-base md:text-base lg:mt-2">8:00 A.M to 5:00 P.M (Monday - Saturdays)</li>
                    </ul>

                    <ul>
                        <li className="font-bold lg:text-lg md:text-lg lg:mt-1.5">Contact </li>
                        <li className="lg:text-base md:text-base lg:mt-2">+63 9123456789</li>
                        <li className="lg:text-base md:text-base lg:mt-2">lorem.ipsum@gmail.com</li>
                    </ul>

                    <ul>
                        <li className="font-bold lg:text-lg md:text-lg lg:mt-1.5">Quick Links</li>
                        <li className="lg:text-base md:text-base lg:mt-2">Sign Up</li>
                        <li className="lg:text-base md:text-base lg:mt-2">Sign In</li>
                        <li className="lg:text-base md:text-base lg:mt-2">Services</li>
                    </ul>


                    <ul>
                        <li className="font-bold lg:text-lg md:text-lg lg:mt-1.5">Legal</li>
                        <li className="lg:text-base md:text-base lg:mt-2">Privacy Policy</li>
                        <li className="lg:text-base md:text-base lg:mt-2">Terms & Conditions.</li>
                    </ul>
                </div>
                <div className=" lg:h-12 lg:p-2 flex items-center">
                    <i className="lg:text-2xl lg:mr-3.5 fa-brands fa-facebook"></i>
                    <i className="lg:text-2xl lg:mr-3.5 fa-brands fa-instagram"></i>
                    <i className="lg:text-2xl lg:mr-3.5 fa-brands fa-twitter"></i>
                    <i className="lg:text-2xl lg:mr-3.5 fa-brands fa-google"></i>
                </div>
                <div className="flex justify-between border-t border-white">
                    <div className="lg:mt-1.5">
                        <p>Copyright {year.split("-")[0]} - Renyel Jay Sioc</p>
                    </div>
                    <div className="lg:mt-1.5 flex items-center">
                        <p>Privacy Policy.</p>
                        <p>Terms & Condition.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}