import { AnimatePresence } from "motion/react";
import { Outlet, useLocation } from "react-router-dom";
import {
    ServiceSidebar,
    Footer
} from "../../@components";

export default function ServiceLayout() {

    const location = useLocation();
    return (
        <>
            <AnimatePresence mode="wait">
                <main className="min-h-screen w-full">
                    <div className="w-full h-full flex flex-row items-center">
                        <div className="w-[20%] h-screen border-r border-gray-400">
                            {/* Service Sidebar */}
                            <ServiceSidebar />
                        </div>

                        {/* Pages */}
                        <div key={location.pathname} className="overflow-y-auto w-full">
                            <Outlet />
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </main>
            </AnimatePresence>
        </>
    )
}