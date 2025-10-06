import ImageOne from "../../assets/ReservationOne.avif";

export default function SignIn() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#d4af37]">
            <div className="lg:w-[70rem] lg:h-[55rem] flex rounded-lg bg-white shadow-lg">
                <div className="lg:w-1/2">
                    <img src={ImageOne} className="w-full h-full object-cover rounded-lg" alt="ImageOne" />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <form className=" lg:px-3.5 lg:py-3.5">
                        <h3 className="lg:text-4xl md:text-lg font-medium">Sign In with your account</h3>
                        <p className="lg:text-base">Join us today and start your journey.</p>




                        <div className="flex flex-col p-2.5">
                            <label htmlFor="username">Username</label>
                            <div className="relative">
                                <i className="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input type="text" id="username" name="username" className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10" placeholder="john123" />
                            </div>
                        </div>


                        <div className="flex flex-col p-2.5">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input type="text" id="password" name="password" className="p-1.5 border border-gray-400 w-full rounded-md pr-3 pl-10" placeholder="*****" />
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center p-2.5">
                            <button className="rounded-2xl border border-white bg-[#d4af37] text-white lg:text-base md:text-sm text-xs p-1 lg:px-2.5 lg:py-2.5 w-full md:px-1.5 md:py-1.5 lg:[8rem] lg:font-medium md:mb-2.5 mb-1.5 cursor-pointer">Sign Up</button>
                        </div>

                        <p className="text-base text-center">Don't have an account yet ?<span className="text-[#d4af37] underline">Sign Up</span></p>
                    </form>
                </div>

            </div>
        </div>
    )
}