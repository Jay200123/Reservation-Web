export default function Navbar() {
    return (
        <>
            <footer className={`w-full lg:h-14 md:h-12 h-10 flex justify-between border items-center border-black`}>
                <div className="lg:p-1.5 md:p-1 p-0.5 w-1/4">
                    <h3 className="cursor-pointer lg:text-lg lg:font-medium md:text-sm, md:font-medium text-xs">Navbar!</h3>
                </div>

                <div className="lg:p-1.5 md:p-1 p-0.5 w-1/5 lg:block md:block hidden">
                    {/* Menu here */}
                    <ul className=" flex justify-between items-center">
                        <li className="cursor-pointer lg:text-sm font-medium md:text-sm text-xs">Home</li>
                        <li className="cursor-pointer lg:text-sm font-medium md:text-sm text-xs">About</li>
                        <li className="cursor-pointer lg:text-sm font-medium md:text-sm text-xs">Contact Us</li>
                        <li className="cursor-pointer lg:text-sm font-medium md:text-sm text-xs">Sign In</li>
                        <li className="cursor-pointer lg:text-sm font-medium md:text-sm text-xs">Sign Up</li>
                    </ul>
                </div>

                <div className="lg:p-1.5 md:p-1 p-0.5 w-1/5 lg:hidden md:hidden block">
                    <ul>
                        <li>Menu here!</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}