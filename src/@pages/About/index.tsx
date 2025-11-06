import { motion } from "framer-motion";
import ImageOne from "../../assets/ImageSix.jpg";

export default function About() {
    const sections = [
        {
            title: "Who We Are",
            text: "Welcome to Reservation Web — your go-to platform for simple and reliable reservations. Whether you’re planning ahead or booking on the go, we make the process fast, transparent, and stress-free."
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
    ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#c9a128] lg:p-10 md:p-8 p-4">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-[80rem] w-full border border-gray-100">
                {/* LEFT — Text Section */}
                <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-10 lg:p-14 overflow-y-auto space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center md:text-left"
                    >
                        About <span className="text-[#c9a128]">Us</span>
                    </motion.h2>

                    <div className="space-y-8">
                        {sections.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
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
                        src={ImageOne}
                        alt="About"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay for visual depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#c9a128]/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
