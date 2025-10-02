import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../@components";
import { AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export default function HomeLayout() {
    const location = useLocation();

    return (
        <>
            <AnimatePresence mode="wait">
                <main className={`min-h-screen flex flex-col`}>
                    <Navbar />
                    <div key={location.pathname}>
                        <Outlet />
                    </div>
                    <Footer />
                </main>
            </AnimatePresence>
        </>
    )
}