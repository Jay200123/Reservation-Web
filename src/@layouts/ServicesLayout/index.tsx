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
                        <div className="w-[20%] h-screen border border-blue-500">
                            {/* Service Sidebar */}
                            <ServiceSidebar />
                        </div>

                        {/* Pages */}
                        <div key={location.pathname} className="w-full  border border-red-500">
                            <Outlet />
                        </div>
                    </div>
                    <div className="border border-yellow-500">
                        <Footer />
                    </div>
                </main>
            </AnimatePresence>
        </>
    )
}