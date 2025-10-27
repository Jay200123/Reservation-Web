import ImageTwo from "../../assets/ImageThree.jpg";

export default function Contact() {
    return (
        <section className="min-h-screen flex items-center justify-center lg:bg-[#c9a128] md:bg-[#c9a128] bg-none">
            {/* Contact Container */}
            <div className="flex flex-col md:flex-row lg:flex-row bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden max-w-[76rem] w-full md:h-[55rem] lg:h-[57rem]">

                {/* Left: Information Section */}
                <div className="flex flex-col justify-between w-full md:w-1/2 lg:w-1/2 p-6 md:p-8 lg:p-10 space-y-6 overflow-y-auto">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Contact <span className="text-[#c9a128]">Us</span>
                        </h2>
                    </div>

                    {/* Contact Sections */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                            Get in <span className="text-[#c9a128]">Touch</span>
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            We’d love to hear from you! Whether you have a question about our services,
                            need help with your reservations, or simply want to connect — our team is here for you.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                            Customer <span className="text-[#c9a128]">Support</span>
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            Our support team is always ready to assist you. From booking inquiries to troubleshooting,
                            we make sure your experience remains smooth and stress-free.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                            Business <span className="text-[#c9a128]">Inquiries</span>
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            Interested in collaborating or listing your services on our platform?
                            We’re open to partnerships that help expand reliable and quality bookings.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                            Visit <span className="text-[#c9a128]">Us</span>
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            You’re always welcome to drop by our office and meet our team.
                            We’d love to show you how we’re shaping the future of online reservations.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                            Contact <span className="text-[#c9a128]">Information</span>
                        </h3>
                        <ul className="text-gray-700 text-sm md:text-base leading-relaxed space-y-1">
                            <li>📧 <strong>Email:</strong> support@reservationweb.com</li>
                            <li>☎️ <strong>Phone:</strong> +63 912 345 6789</li>
                            <li>📍 <strong>Address:</strong> 123 Main Street, Taguig City, Philippines</li>
                        </ul>
                    </div>
                </div>

                {/* Right: Image Section */}
                <div className="w-full md:w-1/2 lg:w-1/2 h-64 md:h-auto lg:h-auto relative">
                    <img
                        src={ImageTwo}
                        alt="Contact Us"
                        className="w-full h-full object-cover object-center rounded-t-md md:rounded-t-none md:rounded-r-md"
                    />
                </div>
            </div>
        </section>
    );
}