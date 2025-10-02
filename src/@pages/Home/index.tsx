import ImageOne from "../../assets/3914478.jpg";

export default function Home() {
    return (
        <>
            <div className="flex items-center w-full lg:h-[28rem]">
                <div className="h-full lg:w-1/2 lg:px-2.5 lg:py-2.5">
                    <h3 className="font-bold lg:text-3xl lg:mb-4.5 lg:mt-2.5">Reservation API</h3>
                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    </p>

                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    </p>

                </div>
                <div className="h-full lg:w-1/2">
                    <img className="h-full w-full object-center" src={ImageOne} alt="ImageOne" />
                </div>
            </div>

            <div className="flex items-center w-full lg:h-[28rem]">
                <div className="h-full lg:w-1/2">
                    <img className="h-full w-full object-center" src={ImageOne} alt="ImageOne" />
                </div>
                <div className="h-full lg:w-1/2 lg:px-2.5 lg:py-2.5">
                    <h3 className="font-bold lg:text-3xl lg:mb-4.5 lg:mt-2.5">Reservation API</h3>
                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    </p>

                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <p className="lg:text-base md:text-sm text-xs lg:mb-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    </p>

                </div>
            </div>

            {/* <div className="flex items-center w-full lg:h-[24rem]">
                Other Informations
            </div> */}
        </>
    )
}