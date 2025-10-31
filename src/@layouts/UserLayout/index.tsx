import { Outlet } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { UserSidebar, Footer } from "../../@components";

export default function UserLayout() {
    /**
 * UserLayout Component
 * --------------------
 * 
 * Defines the primary layout for authenticated user pages.
 * 
 * Structure:
 * - `UserSidebar`: Fixed sidebar displayed on large and medium screens.
 * - `Outlet`: Dynamic route renderer for nested user-related pages.
 * - `Footer`: Global footer displayed at the bottom of the layout.
 * - `AnimatePresence`: Enables smooth animations during route transitions.
 * 
 * Responsive Design:
 * - Sidebar is hidden on small screens for a clean mobile experience.
 * - Content area is scrollable to handle long page content gracefully.
 * 
 * Example usage:
 * ```jsx
 * <Route element={<UserLayout />}>
 *   <Route path="dashboard" element={<Dashboard />} />
 *   <Route path="reservations" element={<Reservations />} />
 * </Route>
 * ```
 */
    const location = useLocation();

    return (
        //v1
        <AnimatePresence mode="wait">
            <main className="min-h-screen min-w-full">
                <div className="flex flex-1 h-screen">
                    {/* sidebar container */}
                    <div className="w-[15%] h-full lg:block md:block hidden">
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