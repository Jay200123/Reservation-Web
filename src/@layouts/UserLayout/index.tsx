import { Outlet } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { UserSidebar, Footer } from "../../@components";

export default function UserLayout() {
    const location = useLocation();

    return (
        //v1
        <AnimatePresence mode="wait">
            <main className="min-h-screen min-w-full">
                <div className="flex flex-1 h-screen">
                    {/* sidebar container */}
                    <div className="w-[15%] h-full">
                        <UserSidebar />
                    </div>
                    {/* page container */}
                    <div key={location.pathname} className="overflow-y-auto w-full">
                        <Outlet />
                    </div>
                </div>
                {/* Footer Container */}
                <div className="relative z-50">
                    <Footer />
                </div>
            </main>
        </AnimatePresence>
    )
};