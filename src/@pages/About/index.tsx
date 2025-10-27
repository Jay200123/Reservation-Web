import ImageOne from "../../assets/ImageSix.jpg";

export default function About() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#c9a128]/10 lg:bg-[#c9a128] md:bg-[#c9a128] transition-colors duration-300 lg:p-0 md:p-4">
            {/* About Container */}
            <div className="flex flex-col md:flex-row lg:flex-row bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-[76rem] w-full md:h-[55rem] lg:h-[57rem]">

                {/* Left: Information Section */}
                <div className="flex flex-col justify-between w-full md:w-1/2 lg:w-1/2 p-6 md:p-8 lg:p-10 space-y-6 overflow-y-auto">

                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            About <span className="text-[#c9a128]">Us</span>
                        </h2>
                    </div>

                    {/* Each info block */}
                    {[
                        {
                            title: "Who We Are",
                            text: "Welcome to Reservation Web, your go-to platform for simple and reliable reservations. Whether you’re planning ahead or booking on the go, we make the process fast, transparent, and stress-free."
                        },
                        {
                            title: "Our Mission",
                            text: "Our mission is to make scheduling and service booking effortless for everyone. We bridge the gap between customers and service providers — helping you save time while getting the quality service you deserve."
                        },
                        {
                            title: "What We Offer",
                            text: "We provide an easy-to-use reservation system that allows you to explore, choose, and book various services — all in one place. From professional appointments to lifestyle services, our platform is built to adapt to your needs."
                        },
                        {
                            title: "Why Choose Us",
                            text: "We believe that booking shouldn’t be complicated. That’s why we’ve designed our system to be intuitive, efficient, and accessible anytime, anywhere."
                        },
                        {
                            title: "Our Vision",
                            text: "We aim to become a trusted hub where convenience meets reliability. Our goal is to redefine how people book services online — making it simpler, smarter, and more connected."
                        },
                    ].map((item, i) => (
                        <div key={i}>
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                                {item.title.split(" ")[0]}{" "}
                                <span className="text-[#c9a128]">{item.title.split(" ").slice(1).join(" ")}</span>
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right: Image Section */}
                <div className="w-full md:w-1/2 lg:w-1/2 h-64 md:h-auto lg:h-auto relative">
                    <img
                        src={ImageOne}
                        alt="About"
                        className="w-full h-full object-cover object-center rounded-t-md md:rounded-t-none md:rounded-r-md"
                    />
                </div>
            </div>
        </section>
    );

}