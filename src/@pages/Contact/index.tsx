import { motion } from "framer-motion";
import ImageTwo from "../../assets/ImageThree.jpg";

export default function Contact() {
    const contactSections = [
        {
            title: "Get in Touch",
            text: "We’d love to hear from you! Whether you have a question about our services, need help with your reservations, or simply want to connect — our team is here for you."
        },
        {
            title: "Customer Support",
            text: "Our support team is always ready to assist you. From booking inquiries to troubleshooting, we make sure your experience remains smooth and stress-free."
        },
        {
            title: "Business Inquiries",
            text: "Interested in collaborating or listing your services on our platform? We’re open to partnerships that help expand reliable and quality bookings."
        },
        {
            title: "Visit Us",
            text: "You’re always welcome to drop by our office and meet our team. We’d love to show you how we’re shaping the future of online reservations."
        },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#c9a128]  lg:p-10 md:p-8 p-4">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-[80rem] w-full border border-gray-100">

                {/* LEFT — Text Section */}
                <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-10 lg:p-14 overflow-y-auto space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left"
                    >
                        Contact <span className="text-[#c9a128]">Us</span>
                    </motion.h2>

                    <div className="space-y-10">
                        {contactSections.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                                    {item.title.split(" ")[0]}{" "}
                                    <span className="text-[#c9a128]">
                                        {item.title.split(" ").slice(1).join(" ")}
                                    </span>
                                </h3>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                                Contact <span className="text-[#c9a128]">Information</span>
                            </h3>
                            <ul className="text-gray-700 text-sm md:text-base leading-relaxed space-y-2">
                                <li>📧 <strong>Email:</strong> support@reservationweb.com</li>
                                <li>☎️ <strong>Phone:</strong> +63 912 345 6789</li>
                                <li>📍 <strong>Address:</strong> 123 Main Street, Taguig City, Philippines</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* RIGHT — Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 relative"
                >
                    <img
                        src={ImageTwo}
                        alt="Contact Us"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay for visual depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#c9a128]/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
